import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function NavBar() {
  return (
    <nav className="nav">
      <Link href="/" className="site-title">
        Valhalla Bank
      </Link>
      <ul>
        <li>
          <Link to={"/admin"}>Admin</Link>
        </li>
        <li>
          <Link to={"/user"}>User</Link>
        </li>
        <li>
          <Link to={"/tv"}>TV</Link>
        </li>
      </ul>
    </nav>
  );
}
