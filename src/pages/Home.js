import React from 'react'
import { Link } from 'react-router-dom';
import BannerImage from '../assets/pizza.jpeg'
import '../styles/Home.css';

function Home() {
  return (
  <div className="home">
     <div className="headerContainer" style={{backgroundImage: `url(${BannerImage})` }}>
        <h1>FoodForYou</h1>  
        <p> FOOD TO FIT ANY TASTE</p>
         <Link to="/menu">
         <button> ORDER NOW </button>
         </Link>
        
     </div>
  </div>
  );
    
  
}

export default Home