import React from "react";
import UserLayout from "../layouts/UserLayout";
import { Link } from "react-router-dom";
import logo from "../logo.png";

function WithdrawPage() {
  return (
      <UserLayout>

          <div className="middlepanel"> 

          <div>
          <Link to={"/user"}>
            <img src={logo} width={250} height={200} alt="Logo" />
          </Link>
          </div>
          
              <h1 className="service">WITHDRAW</h1>

              <div className="center-container-next">
              <div>
                <label>Account #</label>
                <br />
                <input className="typings" type="number"></input>
              </div>

              <div>
                <label>Amount</label>
                <br />
                <input  className="typings" type="number"></input>
              </div>

              </div>

              <div className="center-container-next">
                <Link to="/withdraw/ticket">
                  <button className="nbtns">NEXT</button>
                </Link>
              </div>

          </div>
        

      </UserLayout>
  );
}

export default WithdrawPage;
