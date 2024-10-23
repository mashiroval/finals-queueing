import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import './pagestyles.css';

function AdminPasswordPage() {
  return (
    <div className="center-container">

      <div className="middlepanel"> 
            <div>
              <Link to={"/"}>
                <img src={logo} width={250} height={200} alt="Logo" />
              </Link>
            </div>

            <div className="center-container-next">
              <div>
                <label>Password</label>
                <br />
                <input className="typings" type="number"></input>
            </div>
            </div>
            
            <div>
              <Link to="/admin/home">
                <button className="nbtns">NEXT</button>
              </Link>
            </div>
      </div>

    </div>
  );
}

export default AdminPasswordPage;
