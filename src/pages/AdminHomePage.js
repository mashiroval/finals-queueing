import React from 'react'
import { Link } from "react-router-dom";
import logo from "../logo.png";
import './pagestyles.css';
import NavBar from '../components/NavBar';

function AdminHomePage() {
  return (
    <div>
        <NavBar/>
      <div className="vlogoadmin">
      <Link to={"/"}>
        <img src={logo} width={250} height={200} alt="Logo" />
      </Link>
      </div>

        <div className='box1'>
        <h3 className="admins3">OVERVIEW</h3>
        </div>

        <div className='box2'>
        <h3 className="admins4">SERVING</h3>
        </div>

    </div>
  )
}

export default AdminHomePage
