import React from 'react'
import TicketLayout from '../layouts/TicketLayout'
import { Link } from 'react-router-dom'
import './pagestyles.css';

function RegisterTicketPage({ registerTicketCounter }) { // Accept ticketCounter as prop
  const ticketNumber = `R-${String(registerTicketCounter).padStart(3, '0')}`; // Format the ticket number

  return (
    <TicketLayout>
      <div className="center-container">
        <h1 className='tix'>{ticketNumber}</h1> {/* Display the formatted ticket number */}

        <div className='center-container-next'>
          <Link to="/user">
            <button className="dbtns">DONE</button>
          </Link>
        </div>
      </div>
    </TicketLayout>
  );
}


export default RegisterTicketPage;
