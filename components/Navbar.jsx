import React from 'react';
import "./Navbar.css"
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className='navbar'>
        <div className="logo">
        <Link to="/">SmartCheck</Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Upload">Upload</Link></li>
          <li><Link to="/Account">Account</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
          <li><Link to="/Payments">Payments</Link></li>
        </ul>
    </div>
  );
}

export default Navbar;
