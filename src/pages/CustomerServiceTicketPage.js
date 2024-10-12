import React from "react";
import TicketLayout from "../layouts/TicketLayout";
import { Link } from "react-router-dom";

function CustomerServiceTicketPage() {
  return (
    <TicketLayout>
      <div>
        <div>
            <Link to="/">
            <button>DONE</button>
            </Link>
        </div>
      </div>
    </TicketLayout>
  );
}

export default CustomerServiceTicketPage;
