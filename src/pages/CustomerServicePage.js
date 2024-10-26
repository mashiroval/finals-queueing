import React, { useState, useEffect } from "react";
import UserLayout from "../layouts/UserLayout";
import { Link, useNavigate } from "react-router-dom";
import './pagestyles.css';
import logo from "../logo.png";
import axios from 'axios';


function CustomerServicePage({ customerServiceTicketCounter, setCustomerServiceTicketCounter }) {
  const [accountNumber, setAccountNumber] = useState("");
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

  // Handle back navigation confirmation if input fields are filled
  const handleBackNavigation = (e) => {
    if (accountNumber) {
      const confirmLeave = window.confirm("You have unsaved changes. Do you really want to go back?");
      if (!confirmLeave) {
        e.preventDefault(); // Prevent navigation if the user cancels
      }
    }
  };

  useEffect(() => {
    // Add beforeunload event listener for browser close or navigation
    const beforeUnloadHandler = (e) => {
      if (accountNumber) {
        e.preventDefault();
        e.returnValue = ""; // Required to show the confirmation dialog
      }
    };

    window.addEventListener("beforeunload", beforeUnloadHandler);

    return () => {
      window.removeEventListener("beforeUnload", beforeUnloadHandler);
    };
  }, [accountNumber]);

  const handleNextClick = (e) => {
    // Validate Account Number (exactly 12 digits)
    if (accountNumber.length !== 12) {
      setError("Account number must be exactly 12 digits.");
      e.preventDefault();
      return;
    }

    // If validation passes, clear error and navigate
    setError("");
    const updatedTicketCounter = customerServiceTicketCounter + 1;
    setCustomerServiceTicketCounter(updatedTicketCounter); 
    handleCreateUser(`C-${String(customerServiceTicketCounter).padStart(3, '0')}`);
    // setCustomerServiceTicketCounter(customerServiceTicketCounter + 1); // Increment the ticket counter
    navigate("/service/ticket");
  };

  const handleAccountNumberChange = (e) => {
    const input = e.target.value;
    if (/^\d{0,12}$/.test(input)) {
      setAccountNumber(input); // Only set value if it’s up to 12 digits
      setError(""); // Clear error when user starts typing
    }
  };

  return (
    <UserLayout>
      <div className="center-container">

      <div>
          <img src={logo} width={250} height={200} alt="Logo" />
      </div>

        <div>
          <h1>CUSTOMER SERVICE</h1>
        </div>

        <div>
          <label>Account #</label>
          <br />
          <input
            className="typings"
            type="text"
            value={accountNumber}
            onChange={handleAccountNumberChange}
            placeholder="Enter 12-digit account number"
          />
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <div>
          <button className="nbtns" onClick={handleNextClick}>
            NEXT
          </button>
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

export default CustomerServicePage;
