// 

import React, { useState, useEffect } from 'react';
import Logo from "../assets/pizzaLogo.png";
import { Link } from 'react-router-dom';
import ReorderIcon from "@mui/icons-material/Reorder";
import { Button } from '@mui/material';
import "../styles/Navbar.css";

function Navbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showLinks, setShowLinks] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      // Show links by default if window width is greater than 600px
      if (window.innerWidth > 600) {
        setShowLinks(true);
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array to ensure effect only runs once on mount

  return (
    <div className="navbar">
      <div className="leftside">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="rightside">
        {showLinks && (
          <>
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </>
        )}
        {windowWidth <= 600 && (
          <Button onClick={() => setShowLinks(!showLinks)}>
            <ReorderIcon />
          </Button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
