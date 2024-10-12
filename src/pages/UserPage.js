import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";

function UserPage() {
  return (
    <div>
      <Link to={"/"}>
        <img src={logo} width={100} height={100} alt="Logo" />
      </Link>

      <div>
        <Link to="/register">
          <button>OPEN AN ACCOUNT</button>
        </Link>
      </div>
      <div>
        <Link to="/withdraw">
          <button>WITHDRAW</button>
        </Link>
      </div>
      <div>
        <Link to="/deposit">
          <button>DEPOSIT</button>
        </Link>
      </div>
      <div>
        <Link to="/service">
          <button>CUSTOMER SERVICE</button>
        </Link>
      </div>
    </div>
  );
}

export default UserPage;
