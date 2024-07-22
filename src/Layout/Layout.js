import React from 'react'
import {Outlet,Link} from "react-router-dom"
const Layout = () => {
  return (
    <div>
        <>
   <nav>
    <ul>
        <li>
            <Link to="/">Signup</Link>
        </li>
        <li>
            <Link to="/Login">Login</Link>
        </li>
        <li>
            <Link to ="/Home">Home</Link>
        </li>
        
    </ul>
   </nav>
   <Outlet/>
   </>
    </div>
  )
}

export default Layout;