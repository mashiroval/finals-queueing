import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import logo from "../logo.png";
import axios from 'axios';

function TvPage() {
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
      <div className="vlogoadmin">
      <Link to={"/"}>
        <img src={logo} width={200} height={150} alt="Logo" />
      </Link>
      </div>
      
      <div className='servingbox'>
    <h3 className="admins1">SERVING NOW</h3>
    </div>
    

  <div class="rows">

  <div className='admin-container' id="column">
      <div className="rows">
        <div className='admin-container' id="column">
          <div className="rows">
            <div className='admin-container' id="column">
              {["Register", "Withdraw", "Deposit", "Service"].map((type, index) => (
                <div className={`squares${index + 1}`} key={type}>
                  <h4 className='counter'>Counter {index + 1}</h4>
                  <p class="tvticket">
                    {counterTickets[type] ? counterTickets[type].ticketnum : "No ticket"}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div id="column">
            <div className="squares5">
              <h3 className="admins2">WAITING</h3>
              {waiting.map(user => (
                <p className="waitingtext" key={user._id}>{user.ticketnum}</p>
              ))}
            </div>
          </div>
        </div>
        </div>
    
  </div>
      </div>
    </div>
  )
}

export default TvPage
