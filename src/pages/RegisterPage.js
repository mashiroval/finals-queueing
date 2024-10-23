import React, { useState, useEffect } from "react";
import UserLayout from "../layouts/UserLayout";
import { Link, useNavigate } from "react-router-dom";
import './pagestyles.css';


function RegisterPage({registerTicketCounter, setRegisterTicketCounter}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleBackNavigation = (e) => {
    if (firstName || lastName) {
      const confirmLeave = window.confirm("You have unsaved changes. Do you really want to go back?");
      if (!confirmLeave) {
        e.preventDefault(); // Prevent navigation if the user cancels
      }
    }
  };

  const handleNextClick = (e) => {
    if (firstName.length < 1 || firstName.length > 50) {
      setError("First name must not be empty.");
      e.preventDefault(); // Prevent navigation if validation fails
    } else if (lastName.length < 2 || lastName.length > 50) {
      setError("Last name must not be empty.");
      e.preventDefault(); // Prevent navigation if validation fails
    } else {
      setError(""); // Clear any errors if validation passes
      setRegisterTicketCounter(registerTicketCounter + 1); // Increment ticket counter
      
      navigate("/register/ticket");
    }
};


  return (
    <UserLayout>
      <div className="center-container">
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
          <Link to="/register/ticket" onClick={handleNextClick}>
            <button className="nbtns">NEXT</button>
          </Link>
        </div>

        {/* Handle back navigation confirmation */}
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
