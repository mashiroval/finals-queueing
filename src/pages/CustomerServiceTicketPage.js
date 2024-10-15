import React from "react";
import TicketLayout from "../layouts/TicketLayout";
import { Link } from "react-router-dom";

function CustomerServiceTicketPage() {
  return (
    <TicketLayout>
      <div className="center-container">

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
