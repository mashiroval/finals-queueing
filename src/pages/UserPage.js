import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import './pagestyles.css';

function UserPage() {
  return (

    <div className="main"> 
    <div>
            <Link to="/">
                <button className="bbtnstv">
                <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
                </span>
                <span className="button-text">Back</span>
                </button>
            </Link>
            </div>

    <div className="user-container ">
      
      <div className="middlepanel"> 
        <div className="vlogo">
            <img src={logo} width={250} height={200} alt="Logo" />
          </div>
  
          <h3 className="select">Select</h3>
  
          <div>
            <Link to="/register">
              <button className="fbtn">OPEN AN ACCOUNT</button>
            </Link>
          </div>
          <div>
            <Link to="/withdraw">
              <button className="fbtn">WITHDRAW</button>
            </Link>
          </div>
          <div>
            <Link to="/deposit">
              <button className="fbtn">DEPOSIT</button>
            </Link>
          </div>
          <div>
            <Link to="/service">
              <button className="fbtn">CUSTOMER SERVICE</button>
            </Link>
          </div>
  
        </div>
        
      </div>
    </div>
    
  );
}

export default UserPage;
