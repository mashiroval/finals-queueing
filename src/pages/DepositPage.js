import React from "react";
import UserLayout from "../layouts/UserLayout";
import { Link } from "react-router-dom";

function DepositPage() {
  return (
    <UserLayout>
      <div>
        <h1>DEPOSIT</h1>
      </div>
      <div className="deposit-type">
        <label>
          <input type="radio" name="deposit-type" value="cash"/>
          Cash
        </label>
        <label>
          <input type="radio" name="deposit-type" value="check"/>
          Check
        </label>
      </div>
      <div>
        <label>Account #</label>
        <br/>
        <input type="number" ></input>
      </div>
      <div>
        <label>Amount</label>
        <br/>
        <input type="text" ></input>
      </div>
      <div>
        <Link to="/deposit/ticket">
          <button>NEXT</button>
        </Link>
      </div>
      
    </UserLayout>
  );
}

export default DepositPage;
