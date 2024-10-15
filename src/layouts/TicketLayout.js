import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../logo.png";

function TicketLayout({children}) {
  return (
    <div className="center-container">

    <div>
    <Link to={"/user"}>
      <img src={logo} width={250} height={200} alt="Logo" />
    </Link>
    </div>

    <div>
        <h1>TICKET: </h1>
    </div>

    <div>{children}</div>

  </div>
  )
}

export default TicketLayout
