import React from 'react';
import TicketLayout from '../layouts/TicketLayout';
import { Link } from 'react-router-dom';
import './pagestyles.css';

function WithdrawTicketPage({ withdrawTicketCounter }) {
  // Format the ticket number correctly
  
  const ticketNumber = `W-${String(withdrawTicketCounter).padStart(3, '0')}`;


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

export default WithdrawTicketPage;
