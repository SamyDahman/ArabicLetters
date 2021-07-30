import React from "react";
import "./Nav.css";

const Nav = () => {
    return(
        <nav className = "Nav">
            <div className= "title"> 
            <h1 style={{"color": "white"}} >Recognizing the Arabic Alphabet with Machine Learning</h1> 
            <p1 style={{"color": "white"}}>Author: Samy Dahman</p1>
            </div>
        </nav>
    )
}

export default Nav;