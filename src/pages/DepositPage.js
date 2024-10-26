import React, { useState, useEffect } from "react";
import UserLayout from "../layouts/UserLayout";
import { Link, useNavigate } from "react-router-dom";
import './pagestyles.css';
import logo from "../logo.png";
import axios from 'axios';

function DepositPage({ depositTicketCounter, setDepositTicketCounter }) { // Accept the counter props
  const [accountNumber, setAccountNumber] = useState("");
  const [amount, setAmount] = useState("");
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

  const formatAmount = (num) => {
    return num.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleBackNavigation = (e) => {
    if (accountNumber || amount) {
      const confirmLeave = window.confirm("You have unsaved changes. Do you really want to go back?");
      if (!confirmLeave) {
        e.preventDefault(); // Prevent navigation if the user cancels
      }
    }
  };

  useEffect(() => {
    const beforeUnloadHandler = (e) => {
      if (accountNumber || amount) {
        e.preventDefault();
        e.returnValue = ""; // Required to show the confirmation dialog
      }
    };

    window.addEventListener("beforeunload", beforeUnloadHandler);

    return () => {
      window.removeEventListener("beforeunload", beforeUnloadHandler);
    };
  }, [accountNumber, amount]);

  const handleNextClick = (e) => {
    const rawAmount = amount.replace(/,/g, "");

    if (accountNumber.length !== 12) {
      setError("Account number must be exactly 12 digits.");
      e.preventDefault();
      return;
    }

    const numAmount = parseFloat(rawAmount);
    if (isNaN(numAmount) || rawAmount.length > 15) {
      setError("Amount must be a valid number.");
      e.preventDefault();
      return;
    }

    // If all validations pass, clear error and navigate
    setError("");
    const updatedTicketCounter = depositTicketCounter + 1;
    setDepositTicketCounter(updatedTicketCounter); 
    handleCreateUser(`D-${String(depositTicketCounter).padStart(3, '0')}`); 
    // setDepositTicketCounter(depositTicketCounter + 1); Increment the deposit ticket counter
    navigate("/deposit/ticket");
  };

  const handleAccountNumberChange = (e) => {
    const input = e.target.value;
    if (/^\d{0,12}$/.test(input)) {
      setAccountNumber(input); // Only set value if it’s up to 12 digits
      setError(""); // Clear error when the user starts typing
    }
  };

  const handleAmountChange = (e) => {
    const inputAmount = e.target.value.replace(/[^0-9]/g, ""); // Remove non-numeric characters

    if (inputAmount.length <= 15) { // Limit to 15 digits
      setAmount(formatAmount(inputAmount)); // Format the amount with commas
      setError(""); // Clear error when the user starts typing
    }
  };

  return (
    <UserLayout>
      <div className="center-container">
        
      <div>
          <img src={logo} width={250} height={200} alt="Logo" />
      </div>

        <div>
          <h1>DEPOSIT</h1>
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
        <div>
          <label>Amount</label>
          <br />
          <input
            className="typings"
            type="text"
            value={amount}
            onChange={handleAmountChange}
            placeholder="Enter amount"
          />
        </div>
        
        {error && <p style={{ color: "red" }}>{error}</p>}

        <div>
          <button className="nbtns" onClick={handleNextClick}>
            NEXT
          </button>
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

export default DepositPage;
