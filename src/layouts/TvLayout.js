import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../logo.png";

function TVLayout({children}) {
  return (
    <div className="center-container">
      
    <div>{children}</div>

  </div>
  )
}

export default TVLayout
