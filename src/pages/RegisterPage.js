import React from "react";
import UserLayout from "../layouts/UserLayout";
import { Link } from "react-router-dom";

function RegisterPage() {
  return (
    <UserLayout>
      <div>
        <h1>OPEN AN ACCOUNT</h1>
      </div>
      <div>
        <label>First Name</label>
        <br />
        <input type="text"></input>
      </div>
      <div>
        <label>Last Name</label>
        <br />
        <input type="text"></input>
      </div>
      <div>
        <Link to="/register/ticket">
          <button>NEXT</button>
        </Link>
      </div>
    </UserLayout>
  );
}

export default RegisterPage;
