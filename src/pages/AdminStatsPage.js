import React from 'react'
import NavBar from '../components/NavBar'
import './pagestyles.css';

function AdminStatsPage() {
  return (
    <div>
      <NavBar/>
      
     <div className='row-stats'>

     <div className='statscalen' id ="columnstats">
      <h2>CUSTOMER COUNT</h2>
      <h3>10,000</h3>
      </div>

      <div className='statssummary' id ="columnstats">
     <h1>SUMMARY</h1>

      </div>

     </div>
      

    </div>
  )
}

export default AdminStatsPage
