import React from 'react'
import "./navbar.css";
import logo from "../logo.png";
import { Link } from "react-router-dom";

export default function NavTV() {

    
    return (
      <header>
        <nav className="tvnav">
        <div>
            <Link to="/">
                <button className="bbtnstv">
                <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
                </span>
                <span className="button-text">Back</span>
                </button>
            </Link>
        </div>
         
              <div className="TVnav"> 
                <img src={logo} width={120} height={95} alt="Logo"></img>
              </div>
        
          
        
      </nav>
      </header>
      
      
    );
  }
  

