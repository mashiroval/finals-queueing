import React from "react";
import UserLayout from "../layouts/UserLayout";
import { Link } from "react-router-dom";

function WithdrawPage() {
  return (
      <UserLayout>

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

      </UserLayout>
  );
}

export default WithdrawPage;
