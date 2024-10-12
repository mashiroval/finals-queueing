import React from "react";
import UserLayout from "../layouts/UserLayout";
import { Link } from "react-router-dom";

function WithdrawPage() {
  return (
    <div>
      <UserLayout>
        <div>
          <h1>WITHDRAW</h1>
        </div>
        <div>
          <label>Account #</label>
          <br />
          <input type="number"></input>
        </div>
        <div>
          <label>Amount</label>
          <br />
          <input type="number"></input>
        </div>
        <div>
          <Link to="/service/ticket">
            <button>NEXT</button>
          </Link>
        </div>
      </UserLayout>
    </div>
  );
}

export default WithdrawPage;
