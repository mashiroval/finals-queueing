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
          <Link to={"/admin/home"}>Home</Link>
        </li>
        <li>
          <Link to={"/admin/queue"}>Queue</Link>
        </li>
        <li>
          <Link to={"/admin/stats"}>Stats</Link>
        </li>
      </ul>
    </nav>
  );
}
