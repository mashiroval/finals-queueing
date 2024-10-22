import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../logo.png";

export default function NavBar() {
  return (
    <header>
      <nav className="nav">

        <div class="navdiv">
              <div className="vlogoadmin">
                <Link to={"/"}>
                  <img src={logo} width={120} height={95} alt="Logo" />
                </Link>
                </div>

            <div className="adminnav"> 
              <ul>
                <li>
                  <Link to={"/admin/home"} className="adminnavtext" id = "active">Home<span></span></Link>
                </li>
                <li>
                  <Link to={"/admin/queue"} className="adminnavtext">Queue<span></span></Link>
                </li>
                <li>
                  <Link to={"/admin/stats"} className="adminnavtext">Stats<span></span></Link>
                </li>
                
              </ul>
              <div className="animation start-home"></div>
            </div>
        </div>
        
      
    </nav>
    </header>
    
  );
}
