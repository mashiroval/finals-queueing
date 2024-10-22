import React from 'react'
import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom'

import './pagestyles.css';

function AdminHomePage() {
  return (
    <div>
      <div>
        <NavBar/>

<div className='cardcontainer'>
        <div className='box1'>
        <h3 className="admins3">OVERVIEW</h3>
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
