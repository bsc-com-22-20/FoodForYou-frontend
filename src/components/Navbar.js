// 

import React, { useState, useEffect } from 'react';
import Logo from "../assets/pizzaLogo.png";
import { Link } from 'react-router-dom';
import ReorderIcon from "@mui/icons-material/Reorder";
import { Button } from '@mui/material';
import "../styles/Navbar.css";

function Navbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
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
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        {windowWidth <= 600 ? (
          <Button>
            <ReorderIcon />
          </Button>
        ) : (
          <div>
            {/* <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link> */}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
