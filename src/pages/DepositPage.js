import React from "react";
import UserLayout from "../layouts/UserLayout";
import { Link } from "react-router-dom";
import './pagestyles.css';
import logo from "../logo.png";

function DepositPage() {
  return (
    <UserLayout>
      <div className="center-container ">
        <div className="middlepanel">
            <div>
                <Link to={"/user"}>
                  <img src={logo} width={250} height={200} alt="Logo" />
                </Link>
                </div>
                
            <div>
              <h1>DEPOSIT</h1>
            </div>
            
            <div>
              <label>Account #</label>
              <br/>
              <input className="typings"  type="number" ></input>
            </div>
            <div>
              <label>Amount</label>
              <br/>
              <input className="typings" type="text" ></input>
            </div>
            <div>
              <Link to="/deposit/ticket">
                <button className="nbtns">NEXT</button>
              </Link>
            </div>
      </div>
      </div>
    </UserLayout>
  );
}

export default DepositPage;
