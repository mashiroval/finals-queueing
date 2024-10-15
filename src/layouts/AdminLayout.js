import React from 'react'
import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom'
import logo from "../logo.png";


function AdminLayout({children}) {
  return (
    
    <div className="center-container">


{/* <div>
    <Link to={"/user"}>
      <img src={logo} width={250} height={200} alt="Logo" />
    </Link>
</div> */}


      <NavBar/>

        <div>{children}</div>
        
    </div>
  )
}

export default AdminLayout


