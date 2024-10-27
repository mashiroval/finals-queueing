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

      <iframe 
        style={{
        background: '#21313C',
        border: 'none',
        borderRadius: '2px',
        boxShadow: '0 2px 10px 0 rgba(70, 76, 79, .2)',
        width:'50vw',
        height:'50vh'
      }}
      src="https://charts.mongodb.com/charts-project-0-kdrfole/embed/charts?id=a5ac17e8-a130-4740-933c-e5e49a57c9f5&maxDataAge=3600&theme=dark&autoRefresh=true"      /></div>

     </div>
      

    </div>
  )
}

export default AdminStatsPage
