
import React from 'react';
import { Outlet, NavLink } from "react-router-dom";
  
function Header (){
    return ( 
    <>
       
        <nav className="navbar navbar-expand-lg navbar-light bg-dark text-light">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item mx-3 p-3 ">
                <NavLink   to="/">Home</NavLink>
            </li>
            {/* <li className="nav-item mx-3 p-3">
                <NavLink  to="/about">About Us</NavLink>
            </li> */}
           
    </ul>
        </nav>
  
        <Outlet />
        </>
    );
    
    
}
  
export default Header;
