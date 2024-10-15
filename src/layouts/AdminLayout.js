import React from 'react'
import NavBar from '../components/NavBar'


function AdminLayout({children}) {
  return (
    
    <div>
      
      <NavBar/>
        <div>{children}</div>
    </div>
  )
}

export default AdminLayout
