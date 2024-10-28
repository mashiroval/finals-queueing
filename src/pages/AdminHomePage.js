import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom'
import axios from 'axios';

import './pagestyles.css';

function AdminHomePage() {
  const [users, setUsers] = useState([]);
  const [waiting, setWaiting] = useState([]);

  const [counterTickets, setCounterTickets] = useState({
    Register: null,
    Withdraw: null,
    Deposit: null,
    Service: null,
  });

  const fetchUsers = () => {
    axios.get("http://localhost:8000/api/getUsers")
      .then((response) => {
        const fetchedUsers = response.data;
  
        console.log("Fetched Users:", fetchedUsers);
  
        const waitingList = [];
        const counterAssignments = {
          Register: null,
          Withdraw: null,
          Deposit: null,
          Service: null,
        };
  
        const unsettledUsers = fetchedUsers.filter(user => user.settled === false || user.settled === "false");
        console.log("Unsettled Users (should be only those with settled: false):", unsettledUsers);
  
        unsettledUsers.forEach(user => {
          if (!counterAssignments[user.type]) {
            counterAssignments[user.type] = user;
          } else {
            waitingList.push(user);
          }
        });
  
        console.log("Counter Assignments:", counterAssignments);
        console.log("Waiting List:", waitingList);
  
        setCounterTickets(counterAssignments);
        setWaiting(waitingList);
      })
      .catch((error) => {
        console.log("Error fetching users:", error);
      });
  };

  useEffect(() => {
    fetchUsers();
    const interval = setInterval(fetchUsers, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div>
        <NavBar/>

<div className='cardcontainer'>
        <div className='box1'>
          <h3 className="admins3">OVERVIEW</h3>
          <iframe 
            style={{
              background: '#FFFFFF',
              border: 'none',
              borderRadius: '2px',
              boxShadow: '0 2px 10px 0 rgba(70, 76, 79, .2)',
              width:'650px',
              height:'500px'
            }}
            src="https://charts.mongodb.com/charts-project-0-kdrfole/embed/charts?id=8dcb76b1-b0f2-4e21-9c53-1241d89293f7&maxDataAge=3600&theme=light&autoRefresh=true"
            />
        </div>

        <div className='box2'>
        <h3 className="admins4">NOW SERVING</h3>
            <div className='admin-container' id="column">
              {["Register", "Withdraw", "Deposit", "Service"].map((type, index) => (
                <div key={type}>
                  <p>
                    {counterTickets[type] ? counterTickets[type].ticketnum : "No ticket"}
                  </p>
              </div>))}
            </div>
        </div>
</div>
        

    </div>
    </div>
  )
}

export default AdminHomePage
