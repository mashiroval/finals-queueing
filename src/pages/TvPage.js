import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../logo.png";

function TvPage() {
  return (
    <div>
      <div className="vlogoadmin">
      <Link to={"/"}>
        <img src={logo} width={250} height={200} alt="Logo" />
      </Link>
      </div>
      
      <h3 className="admins1">SERVING NOW</h3>
      <h3 className="admins2">WAITING</h3>

      <div className='admin-container'>

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
      
    </div>
  )
}

export default TvPage
