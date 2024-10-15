import React from "react";
import UserLayout from "../layouts/UserLayout";
import { Link } from "react-router-dom";
import './pagestyles.css';

function CustomerServicePage() {
  return (
    <UserLayout>
      <div className="center-container">
      <div>
        <h1>DEPOSIT</h1>
      </div>
      
      <div>
        <label>Account #</label>
        <br/>
        <input className="typings"  type="text" ></input>
      </div>

      
      <div>
        <Link to="/service/ticket">
          <button className="nbtns">NEXT</button>
        </Link>
      </div>
      
      </div>
    </UserLayout>
  );
}

export default CustomerServicePage;
