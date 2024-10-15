import React from 'react'
import AdminLayout from '../layouts/AdminLayout'
import { Link } from "react-router-dom";
import logo from "../logo.png";
import './pagestyles.css';



function AdminPage() {
  return (
    <AdminLayout>
        <div className="center-container " >
    
    <div className="vlogo">
    <Link to={"/"}>
      <img src={logo} width={250} height={200} alt="Logo" />
    </Link>
    </div>

    <h3 className="select">Select...</h3>

    <div>
      <Link to="/admin/password">
        <button className="fbtn">Admin</button>
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


    </AdminLayout>
  )
}

export default AdminPage
