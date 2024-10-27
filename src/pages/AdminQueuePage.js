import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import { Link } from 'react-router-dom';
import './pagestyles.css';
import axios from 'axios';

function AdminQueuePage() {
  const [users, setUsers] = useState([]);
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

  const handleUpdateUser = (id) => {
    axios.put(`http://localhost:8000/api/updateUser/${id}`, editUser)
      .then(() => {
        fetchUsers();
        setEditUser(null);
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

    <div className='servingbox'>
    <h3 className="admins1">SERVING NOW</h3>
    </div>
    

  <div class="rows">

  <div className='admin-container' id="column">

    <div className='squares1'>
    <h4 className='counter'>Counter 1</h4>
      <button className="delete">DELETE</button>
      <button className="next">NEXT</button>
      
    </div>

        <div className='squares2'>
        <h4 className='counter'>Counter 2</h4>
          <button className="delete">DELETE</button>
          <button className="next">NEXT</button>
          
        </div>

        <div className='squares3'>
        <h4 className='counter'>Counter 3</h4>
          <button className="delete">DELETE</button>
          <button className="next">NEXT</button>
          
        </div>

        <div className='squares4'>
        <h4 className='counter'>Counter 4</h4>
          <button className="delete">DELETE</button>
          <button className="next" onClick={() => handleUpdateUser(editUser._id)}>NEXT</button>
          
        </div>

        </div>

        <div id="column">
        <div class="squares5">
        <h3 className="admins2">WAITING</h3>
        </div>

        </div>
    
  </div>
    
    
</div>
  )
}

export default AdminQueuePage
