import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import './pagestyles.css';
import axios from 'axios';

function AdminQueuePage() {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);

  const handleUpdateUser = (id) => {
    axios.put(`http://localhost:8000/api/updateUser/${id}`, { settled: true })
      .then(() => {
        fetchUsers();
        setEditUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDeleteUser = (id) => {
    axios.delete(`http://localhost:8000/api/deleteUser/${id}`)
      .then(() => {
        setUsers(prevUsers => prevUsers.filter(user => user._id !== id));
        setSettled(prevSettled => prevSettled.filter(user => user._id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [counterTickets, setCounterTickets] = useState({
    Register: null,
    Withdraw: null,
    Deposit: null,
    Service: null,
  });
  const [waiting, setWaiting] = useState([]);
  const [settled, setSettled] = useState([]);

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
  

  const handleFinish = (type) => {
    const finishedTicket = counterTickets[type];
    if (finishedTicket) {
      setSettled(prevSettled => [...prevSettled, finishedTicket]);

      handleUpdateUser(finishedTicket._id);
    }

    const nextTicket = waiting.find(user => user.type === type);
    const newWaiting = waiting.filter(user => user !== nextTicket);

    setCounterTickets(prev => ({ ...prev, [type]: nextTicket || null }));
    setWaiting(newWaiting);
  };

  useEffect(() => {
    fetchUsers();
    const interval = setInterval(fetchUsers, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <NavBar/>

      <div className='servingbox'>
        <h3 className="admins1">SERVING NOW</h3>
      </div>

      <div className="rows">
        <div className='admin-container' id="column">

          {["Register", "Withdraw", "Deposit", "Service"].map((type, index) => (
            <div className={`squares${index + 1}`} key={type}>
              <h4 className='counter'>Counter {index + 1}</h4>
              <p>
                {counterTickets[type] ? counterTickets[type].ticketnum : "No ticket"}
              </p>
              <button className="next" onClick={() => handleFinish(type)}>SETTLED</button>
            </div>
          ))}

        </div>

        <div id="column">
          <div className="squares5">
            <h3 className="admins2">WAITING</h3>
            {waiting.map(user => (
              <p key={user._id}>{user.ticketnum}</p>
            ))}
          </div>
        </div>

        <div id="column">
          <div className="squares5">
            <h3 className="admins3">SETTLED</h3>
            {settled.map(ticket => (
              <p key={ticket._id}>
                {ticket.ticketnum}
                <button onClick={() => handleDeleteUser(ticket._id)}>Delete</button>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminQueuePage;
