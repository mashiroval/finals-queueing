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
        <button>
          <Link to={"/register"}>OPEN AN ACCOUNT</Link>
        </button>
      </div>
      <div>
        <button>
          <Link to={"/withdraw"}>WITHDRAW</Link>
        </button>
      </div>
      <div>
        <button>
          <Link to={"/deposit"}>DEPOSIT</Link>
        </button>
      </div>
      <div>
        <button>
          <Link to={"/service"}>CUSTOMER SERVICE</Link>
        </button>
      </div>
    </div>
  );
}

export default UserPage;
