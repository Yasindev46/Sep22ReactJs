import React from "react"
import "./Navbar.css"


export const Navbar=()=>{
    return(
       <nav className="navdiv">
        <img src="logo192.png" alt=""  />
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Services</a>
            <a href="">Contact Us</a>
       </nav> 
    )
}
