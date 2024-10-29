import React from 'react';
import TicketLayout from '../layouts/TicketLayout';
import { Link } from 'react-router-dom';
import './pagestyles.css';

function DepositTicketPage({ depositTicketCounter }) { // Accept the deposit ticket counter as a prop
  const ticketNumber = `D-${String(depositTicketCounter).padStart(3, '0')}`; // Format the ticket number

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

export default DepositTicketPage;
