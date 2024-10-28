import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom'
import axios from 'axios';

import './pagestyles.css';

function AdminHomePage() {
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    axios.get("http://localhost:8000/api/getUsers")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <NavBar/>

      <div className="rows">
        <div className='home-container' id="column">
        <div className='boxtitle1'>
        <h3 className="admins3">OVERVIEW</h3>
        </div>

        <div className='boxtitle2'>
        <h3 className="admins4">SERVING</h3>
      
        </div>

        <div className='boxcontent1'>
          
        </div>

        <div className='boxcontent2'>
        </div>

           

        </div>
        
      </div>

      </div>
    
  )
}

export default AdminHomePage
