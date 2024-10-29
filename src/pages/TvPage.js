import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
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

  const synthRef = useRef(window.speechSynthesis);
  const lastTicketsRef = useRef({ Register: null, Withdraw: null, Deposit: null, Service: null });

  const speakText = (text) => {
    if (synthRef.current.speaking) {
      synthRef.current.cancel();
    }
    const utterance = new SpeechSynthesisUtterance(text);
    synthRef.current.speak(utterance);
  };

  const fetchUsers = () => {
    axios.get("http://localhost:8000/api/getUsers")
      .then((response) => {
        const fetchedUsers = response.data;

        const waitingList = [];
        const counterAssignments = {
          Register: null,
          Withdraw: null,
          Deposit: null,
          Service: null,
        };

        const unsettledUsers = fetchedUsers.filter(user => user.settled === false || user.settled === "false");

        unsettledUsers.forEach(user => {
          if (!counterAssignments[user.type]) {
            counterAssignments[user.type] = user;
          } else {
            waitingList.push(user);
          }
        });

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

  useEffect(() => {
    ["Register", "Withdraw", "Deposit", "Service"].forEach(type => {
      const currentTicket = counterTickets[type] ? counterTickets[type].ticketnum : "No ticket";
      const lastTicket = lastTicketsRef.current[type];

      if (currentTicket !== lastTicket) {
        lastTicketsRef.current[type] = currentTicket;
        const message = `Counter ${type} serving ticket ${currentTicket}`;
        speakText(message);
      }
    });
  }, [counterTickets]);

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
      
      <div className="rows">
        <div className='admin-container' id="column">
          <div className="rows">
            <div className='admin-container' id="column">
              {["Register", "Withdraw", "Deposit", "Service"].map((type, index) => (
                <div className={`squares${index + 1}`} key={type}>
                  <h4 className='counter'>Counter {index + 1}</h4>
                  <p>
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
                <p key={user._id}>{user.ticketnum}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TvPage;
