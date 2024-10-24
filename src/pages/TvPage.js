import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../logo.png";

function TvPage() {
  return (
    <div>
      <div className="vlogoadmin">
      <Link to={"/"}>
        <img src={logo} width={200} height={150} alt="Logo" />
      </Link>
      </div>
      
      <div className='servingbox'>
    <h3 className="admins1">SERVING NOW</h3>
    </div>
    

  <div class="rows">

  <div className='admin-container' id="column">

    <div className='squares1'>
    <h4 className='counter'>Counter 1</h4>
      
    </div>

        <div className='squares2'>
        <h4 className='counter'>Counter 2</h4>
          
        </div>

        <div className='squares3'>
        <h4 className='counter'>Counter 3</h4>
          
        </div>

        <div className='squares4'>
        <h4 className='counter'>Counter 4</h4>
          
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

export default TvPage
