// import React from 'react'
// import Logo from "../assets/pizzaLogo.png"; 
// import { Link } from 'react-router-dom';
// import ReorderIcon from "@mui/icons-material/Reorder";
// import "../styles/Navbar.css";
// import { Button } from '@mui/material';


// function Navbar() {
//   return (
//     <div className="navbar"> 
//     <div className="leftside">
//         <img src={Logo} />
//     </div>
//     <div className="rightside">
//         <Link to="/"> Home </Link>
//         <Link to="/menu"> Menu </Link>
//         <Link to="/about"> About </Link>
//         <Link to="/contact"> contact </Link>
//         <Button>
//           <ReorderIcon/>
//         </Button>
//     </div>


//     </div>
//   )
// } 

// export default Navbar


import React, { useState, useEffect } from 'react';
import Logo from "../assets/pizzaLogo.png";
import { Link } from 'react-router-dom';
import ReorderIcon from "@mui/icons-material/Reorder";
import { Button } from '@mui/material';
import "../styles/Navbar.css";

function Navbar() {

  const [openLinks, setOpenLinks] = useState(false)

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showLinks, setShowLinks] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // Show links by default if window width is greater than 600px
    setShowLinks(windowWidth > 600);
  }, [windowWidth]);

  return (
    <div className="navbar">
      <div className="leftside" id={openLinks ? "open" : "close"}>
        <img src={Logo} alt="Logo" />
        <div className="hiddenLinks"> </div>
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