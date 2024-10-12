import React from "react";
import UserLayout from "../layouts/UserLayout";
import { Link } from "react-router-dom";

function CustomerServicePage() {
  return (
    <UserLayout>
      <div>
        <h1>CUSTOMER SERVICE</h1>
      </div>
      <div>
        <label>Account #</label>
        <br />
        <input type="number" />
      </div>
      <div>
        <Link to="/service/ticket">
          <button>NEXT</button>
        </Link>
      </div>
    </UserLayout>
  );
}

export default CustomerServicePage;
