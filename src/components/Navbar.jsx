import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/Logo-fav.png';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="container d-flex justify-content-between w-100" style={{ position: "relative", zIndex: "100", width: "100%", height:"10vh",}}>
      <img src={logo} alt="logo" width="60px" />
      <header>
        <nav className="desktop-menu">
          <NavLink className="links" activeClassName="active" exact to="/">Home</NavLink>
          <NavLink className="links" activeClassName="active" to="/aboutUs">AboutUs</NavLink>
          <NavLink className="links" activeClassName="active" to="/learn">Learn & Grow</NavLink>
          <NavLink className="links" activeClassName="active" to="/service">Services</NavLink>
          <NavLink className="links" activeClassName="active" to="/blog">Knowledge Hub</NavLink>
        </nav>
        <div className="mobile-menu-icon d-flex justify-content-end" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes size={30} className="mobile-menu-icon " /> : <FaBars size={30} className="mobile-menu-icon " />}
        </div>
        {isMobileMenuOpen && (
          <nav className="mobile-menu">
            <NavLink className="links" activeClassName="active" exact to="/" onClick={toggleMobileMenu}>Home</NavLink>
            <NavLink className="links" activeClassName="active" to="/aboutUs" onClick={toggleMobileMenu}>AboutUs</NavLink>
            <NavLink className="links" activeClassName="active" to="/learn" onClick={toggleMobileMenu}>Learn & Grow</NavLink>
            <NavLink className="links" activeClassName="active" to="/service" onClick={toggleMobileMenu}>Services</NavLink>
            <NavLink className="links" activeClassName="active" to="/blog" onClick={toggleMobileMenu}>Knowledge Hub</NavLink>
          </nav>
        )}
      </header>
    </div>
  );
}
