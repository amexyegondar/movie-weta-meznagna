import React from 'react'
import Navbar from './Navbar'
import Router from '../routes/Router'


function Layout() {
  return (
    <div style={{display:'flex', flexDirection:'column', gap:70 }}>
      <div>
        <Navbar />
      </div>
      <div>
        <Router/>
      </div>

    </div>
  )
}

export default Layout
