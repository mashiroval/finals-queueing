import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import './pagestyles.css';

// Functions

function Frame1() {
  return (
    <body>
      <div className="center-container " >
     
        <div class="middlepanel"> 
          <div className="vlogo">
              <img src={logo} width={250} height={200} alt="Logo" />
            </div>

            <h3 className="select">Select</h3>

            <div>
              <Link to="/admin/password">
                <button className="fbtn" >Admin</button>
              </Link>
            </div>
            
            <div>
              <Link to="/user">
                <button className="fbtn">User</button>
              </Link>
            </div>

            <div>
              <Link to="/tv">
                <button className="fbtn">TV</button>
              </Link>
            </div>
        </div>
          

      </div>
      
      
    </body>
    
  );
}

export default Frame1;
