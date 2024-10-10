import React from "react";
import logo from '../logo.png';
import { Link } from "react-router-dom";

function UserLayout({ children }) {
  return (
    <div>
      <div>
      <Link to={"/user"}>
        <img src={logo} width={100} height={100} alt="Logo" />
      </Link>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default UserLayout;
