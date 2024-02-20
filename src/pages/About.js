import React from 'react'
import multiplePizzas from "../assets/multiplePizzas.jpeg";

function About() {
  return (
    <div className="about">
       <div className="aboutTop"
       style={{backgroundImage: `url(${multiplePizzas})` }} > djeweiuqeeqknlw </div>
       <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p> our restuarant serves several kinds of food and we are located in Lilongwe</p>
       </div>
    </div>
  )
}

export default About  