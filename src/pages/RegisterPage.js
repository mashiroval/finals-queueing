import React from "react";
import UserLayout from "../layouts/UserLayout";
import { Link } from "react-router-dom";
import './pagestyles.css';

function RegisterPage() {
  return (
    <UserLayout>
      <div className="center-container">
      <div>
        <h1>DEPOSIT</h1>
      </div>
      
      <div>
        <label>First Name</label>
        <br/>
        <input className="typings"  type="text" ></input>
      </div>
      <div>
        <label>Last Name</label>
        <br/>
        <input className="typings" type="text" ></input>
      </div>
      
      <div>
        <Link to="/register/ticket">
          <button className="nbtns">NEXT</button>
        </Link>
      </div>
      
      </div>
    </UserLayout>
  );
}

export default RegisterPage;
