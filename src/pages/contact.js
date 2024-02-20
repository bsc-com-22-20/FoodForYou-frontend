import React from 'react'
import Vegan  from "../assets/vegan.jpg";
import "../styles/contact.css"
function contact() {
  return (
    <div className="contact">
        <div className="leftside"
         style={{backgroundImage: `url(${Vegan})` }}></div>
        <div className="rightside">
            <h1> Contact us</h1>
            <form id="contact-form" method="POST">
                <label htmlFor="name">Full Name</label>
                <input name="name" placeholder="Enter full name..." type="text"/>
                <label htmlFor="email">Email</label>
                <input name="email" placeholder="Enter email..." type="email"/> 
                <label htmlFor="message">Message</label>
                <textarea rows="6" placeholder="Enter message..."  name="message" required>

                 </textarea>
                 <button type="submit"> Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default contact