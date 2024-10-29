import React from "react";
import TicketLayout from "../layouts/TicketLayout";
import { Link } from "react-router-dom";
import './pagestyles.css';

function CustomerServiceTicketPage({ customerServiceTicketCounter }) {
  const ticketNumber = `C-${String(customerServiceTicketCounter).padStart(3, '0')}`; // Format ticket number

  return (
    <TicketLayout>
      <div className="center-container">
        <h1 className='tix'>{ticketNumber}</h1>

        <div className='center-container-next'>
          <Link to="/user">
            <button className="dbtns">DONE</button>
          </Link>
        </div>
      </div>
    </TicketLayout>
  );
}

export default CustomerServiceTicketPage;
