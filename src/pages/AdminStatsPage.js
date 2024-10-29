import React from 'react'
import NavBar from '../components/NavBar'
import './pagestyles.css';
import box4 from "./boxcounter4.mp4";
function AdminStatsPage() {
  return (
    <div>
      <NavBar/>
      <div className='statsbox'>
        <div className="row-stats">

          <div className='stats-container'>
            <div className='boxtitle1'>
            <h3 className="admins3">OVERVIEW</h3>
            </div>


            <div className='boxtitle2'id='servingtext' >
            <h3 className="admins4">SUMMARY</h3>
            </div>

            <div className='boxcontent1'>
              <iframe 
              style={{
                background: 'transparent',
                border: '5px',
                borderRadius: '20px',
                boxShadow: '0 0 30px rgba(0,0,0,.5)',
                width: '450px',
                height:'500px', bottom:'50px', color: '#000'
              }}
               src="https://charts.mongodb.com/charts-project-0-kdrfole/embed/charts?id=287b0cc6-eb37-462c-9a98-9d25d3670e0e&maxDataAge=3600&theme=light&autoRefresh=true"
              />

            </div>

              
            <div className='boxcontent3'>
                <div className='admin-container' id="column">
                <iframe 
                  style={{
                    background: 'transparent',
                    border: 'none',
                    borderRadius: '20px',
                    boxShadow: '0 2px 10px 0 rgba(70, 76, 79, .2)',
                    width:'50vw',
                    height:'50vh'
                  }}
                src="https://charts.mongodb.com/charts-project-0-kdrfole/embed/charts?id=6179e18e-92f4-4b9b-a285-490721fb25c8&maxDataAge=3600&theme=light&autoRefresh=true"     
                />

            </div>
            </div>

            <div className='boxcontent4'>
                  <video src={box4} width={770}height={110} type="video/mp4" autoplay muted loop>
                  </video>
            </div>

          <div id="column">
          <div className="boxcontent5">
            
          </div>
        </div>

          </div>

        </div>
        
        
      </div>
      


     {/* <div className='row-stats'>

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
       */}

    </div>
  )
}

export default AdminStatsPage
