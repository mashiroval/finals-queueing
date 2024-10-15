import React from "react";
import logo from "../logo.png";
import { Link } from "react-router-dom";


function UserLayout({ children }) {
  return (
    <div  className="center-container" >
      <div>
        <Link to={"/user"}>
          <img src={logo} width={250} height={200} alt="Logo" />
        </Link>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default UserLayout;
