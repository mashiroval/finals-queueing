import React, { useState, useEffect } from "react";
import UserLayout from "../layouts/UserLayout";
import { Link, useNavigate } from "react-router-dom";
import './pagestyles.css';
import logo from "../logo.png";
import axios from 'axios';

function RegisterPage({ registerTicketCounter, setRegisterTicketCounter }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    axios.get("http://localhost:8000/api/getUsers")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCreateUser = (ticketNumber) => {
    axios.post("http://localhost:8000/api/createUser", {
      ticketnum: ticketNumber,
      showed: false,
      settled: false,
    })
      .then(() => {
        fetchUsers();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleBackNavigation = (e) => {
    if (firstName || lastName) {
      const confirmLeave = window.confirm("You have unsaved changes. Do you really want to go back?");
      if (!confirmLeave) {
        e.preventDefault();
      }
    }
  };

  const handleNextClick = (e) => {
    if (firstName.length < 1 || firstName.length > 50) {
      setError("First name must not be empty.");
      e.preventDefault();
    } else if (lastName.length < 1 || lastName.length > 50) {
      setError("Last name must not be empty.");
      e.preventDefault();
    } else {
      setError("");
      const updatedTicketCounter = registerTicketCounter + 1;
      setRegisterTicketCounter(updatedTicketCounter); 
      handleCreateUser(`R-${String(updatedTicketCounter).padStart(3, '0')}`); 
      navigate("/register/ticket");
    }
  };

  return (
    <UserLayout>
      <div className="center-container">
        <div>
          <img src={logo} width={250} height={200} alt="Logo" />
        </div>

        <div>
          <h1>OPEN AN ACCOUNT</h1>
        </div>

        <div>
          <label>First Name</label>
          <br />
          <input
            className="typings"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            minLength={1}
            maxLength={50}
          />
        </div>

        <div>
          <label>Last Name</label>
          <br />
          <input
            className="typings"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            minLength={1}
            maxLength={50}
          />
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <div>
          <button className="nbtns" onClick={handleNextClick}>NEXT</button>
        </div>

        <div>
          <Link to="/user" onClick={handleBackNavigation}>
            <button className="nbtns">GO BACK</button>
          </Link>
        </div>
      </div>
    </UserLayout>
  );
}

export default RegisterPage;
