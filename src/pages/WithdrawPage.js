import React, { useState, useEffect } from "react";
import UserLayout from "../layouts/UserLayout";
import { Link, useNavigate } from "react-router-dom";
import "./pagestyles.css";
import logo from "../logo.png";
import axios from 'axios';

// Accept ticketCounter and setTicketCounter as props
function WithdrawPage({withdrawTicketCounter, setWithdrawTicketCounter}) {

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
      type: "Withdraw",
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

  // Function to format the amount with commas
  const formatAmount = (num) => {
    return num.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // Handle back navigation confirmation if input fields are filled
  const handleBackNavigation = (e) => {
    if (accountNumber || amount) {
      const confirmLeave = window.confirm(
        "You have unsaved changes. Do you really want to go back?"
      );
      if (!confirmLeave) {
        e.preventDefault(); // Prevent navigation if the user cancels
      }
    }
  };

  useEffect(() => {
    // Add beforeunload event listener for browser close or navigation
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

  // Handle when the user clicks "Next"
  const handleNextClick = (e) => {
    const rawAmount = amount.replace(/,/g, ""); // Remove commas

    // Validate Account Number (exactly 12 digits)
    if (accountNumber.length !== 12) {
      setError("Account number must be exactly 12 digits.");
      e.preventDefault();
      return;
    }

    // Validate Amount (up to 15 digits)
    const numAmount = parseFloat(rawAmount);
    if (isNaN(numAmount)) {
      setError("Please enter a valid amount.");
      e.preventDefault();
      return;
    }

    // Clear error if everything is valid, increment ticket counter, and navigate
    setError("");
    const updatedTicketCounter = withdrawTicketCounter + 1;
    setWithdrawTicketCounter(updatedTicketCounter); 
    handleCreateUser(`W-${String(updatedTicketCounter).padStart(3, '0')}`); 
    navigate("/withdraw/ticket");
  };

  // Handle account number change
  const handleAccountNumberChange = (e) => {
    const input = e.target.value;
    if (/^\d{0,12}$/.test(input)) {
      setAccountNumber(input); // Only allow up to 12 digits
      setError(""); // Clear error when the user starts typing
    }
  };

  const handleAmountChange = (e) => {
    // Only allow digits in the amount field
    const inputAmount = e.target.value.replace(/[^0-9]/g, ""); // Remove non-numeric characters

    if (inputAmount.length <= 15) {
      setAmount(formatAmount(inputAmount)); // Format the amount with commas
      setError(""); // Clear error when the user starts typing
    }
  };

  return (

    <div className="main">
    {/* Handle back navigation confirmation */}
    <div>
                <Link to="/user" onClick={handleBackNavigation}>
                <button className="bbtns">
                  <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                  </span>
                  <span className="button-text">Back</span>
                  </button>
                  </Link>
            </div>

<UserLayout>
      <div className="center-container">

      <div>
          <img src={logo} width={250} height={200} alt="Logo" />
      </div>

        <div>
          <h1>WITHDRAW</h1>
        </div>

        <div>
          <label className="text">Account #</label>
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
          <label className="text">Amount</label>
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

    
      </div>
    </UserLayout>
    </div>

    
  );
}

export default WithdrawPage;
