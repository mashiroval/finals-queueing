import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";

function AdminPasswordPage() {
  return (
    <div>
      <div>
        <Link to={"/"}>
          <img src={logo} width={100} height={100} alt="Logo" />
        </Link>
      </div>
      <div>
        <label>Password</label>
        <br/>
        <input type="text" ></input>
      </div>
      <div>
        <Link to="/admin/home">
          <button>NEXT</button>
        </Link>
      </div>
    </div>
  );
}

export default AdminPasswordPage;
