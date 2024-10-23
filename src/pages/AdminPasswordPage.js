import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../logo.png";
import './pagestyles.css';

function AdminPasswordPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [attempts, setAttempts] = useState(0);
  const navigate = useNavigate();
  const maxAttempts = 3;

  // Handle when the user tries to navigate back with data in input
  const handleBackNavigation = (e) => {
    if (password) {
      const confirmLeave = window.confirm("You have unsaved changes. Do you really want to go back?");
      if (!confirmLeave) {
        e.preventDefault(); // Prevent navigation if the user cancels
      }
    }
  };

  useEffect(() => {
    // Before the component unmounts or the user navigates away, check if input is filled
    window.addEventListener("beforeunload", (e) => {
      if (password) {
        e.preventDefault();
        e.returnValue = ""; 
      }
    });
    return () => {
      window.removeEventListener("beforeunload", handleBackNavigation);
    };
  }, [password]);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError(""); // Clear error when the user types
  };

  const handleNextClick = () => {
    if (password === "admin" && password.length >= 5 && password.length <= 15) {
      navigate("/admin/home"); // Redirect to admin home if password is correct
      setPassword("");
    } else {
      setError("Incorrect password");
      setAttempts(attempts + 1);
      setPassword("");

      if (attempts + 1 >= maxAttempts) {
        navigate("/"); // Redirect to homepage after 3 incorrect attempts
      }
    }
  };

  return (
    <div className="center-container">
      <div>
        <Link to={"/"} onClick={handleBackNavigation}>
          <img src={logo} width={250} height={200} alt="Logo" />
        </Link>
      </div>

      <div className="center-container-next">
        <div>
          <label>Password</label>
          <br />
          <input
            className="typings"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            minLength={5}
            maxLength={15}
          />
        </div>
        {error && (
          <div style={{ color: "red" }}>
            <p>{error}</p>
            <p>Remaining Attempts: {maxAttempts - attempts}</p>
          </div>
        )}
      </div>

      <div>
        <button className="nbtns" onClick={handleNextClick}>
          NEXT
        </button>
      </div>
    </div>
  );
}

export default AdminPasswordPage;
