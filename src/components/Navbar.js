import React from 'react'
import Logo from "../assets/pizzaLogo.png"; 
import { Link } from 'react-router-dom';
import ReorderIcon from "@mui/icons-material/Reorder";
import "../styles/Navbar.css";
import { Button } from '@mui/material';


function Navbar() {
  return (
    <div className="navbar"> 
    <div className="leftside">
        <img src={Logo} />
    </div>
    <div className="rightside">
        <Link to="/"> Home </Link>
        <Link to="/menu"> Menu </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> contact </Link>
        <Button>
          <ReorderIcon/>
        </Button>
    </div>


    </div>
  )
} 

export default Navbar