import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom'
import axios from 'axios';

import './pagestyles.css';

function AdminHomePage() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({});
  const [editUser, setEditUser] = useState(null);

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
      <div>
        <NavBar/>

<div className='cardcontainer'>
        <div className='box1'>
          <h3 className="admins3">OVERVIEW</h3>
            <iframe 
              style={{
              background: '#FFFFFF',
              border: 'none',
              borderRadius: '2px',
              boxShadow: '0 2px 10px 0 rgba(70, 76, 79, .2)',
              width:'50vw',
              height:'50vh'
              }}
            src="https://charts.mongodb.com/charts-project-0-kdrfole/embed/charts?id=8bd7ae8d-79c6-4386-b2a9-7fa824a5f3a3&maxDataAge=3600&theme=light&autoRefresh=true"/>
            {users.map(user => (
                <p key={user._id}>
                    {user.ticketnum} - {user.showed} - {user.settled}
                </p>
              ))}
        </div>

        <div className='box2'>
        <h3 className="admins4">SERVING</h3>
        </div>
</div>
        

    </div>
    </div>
  )
}

export default AdminHomePage
