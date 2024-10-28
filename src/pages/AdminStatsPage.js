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
      <iframe 
        style={{
        background: '#f8f7f5',
        border: 'none',
        borderRadius: '2px',
        boxShadow: '0 2px 10px 0 rgba(70, 76, 79, .2)',
        width:'50vw',
        height:'40vh'
      }}
      src="https://charts.mongodb.com/charts-project-0-kdrfole/embed/charts?id=287b0cc6-eb37-462c-9a98-9d25d3670e0e&maxDataAge=3600&theme=light&autoRefresh=true"
      /></div>

      <div className='statssummary' id ="columnstats">
      <h1>SUMMARY</h1>

      <iframe 
        style={{
        background: '#f8f7f5',
        border: 'none',
        borderRadius: '2px',
        boxShadow: '0 2px 10px 0 rgba(70, 76, 79, .2)',
        width:'50vw',
        height:'50vh'
      }}
      src="https://charts.mongodb.com/charts-project-0-kdrfole/embed/charts?id=6179e18e-92f4-4b9b-a285-490721fb25c8&maxDataAge=3600&theme=light&autoRefresh=true"     
      /></div>
     </div>
      

    </div>
  )
}

export default AdminStatsPage
