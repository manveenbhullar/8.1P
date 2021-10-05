import React from "react";
import './Header.css'

const Header = () => {
    return(
        <div className="container">

        <div className = "header">
            <img 
            src = {require('./images/header.jpg').default} 
            alt="header" 
            width= "100%"
            />
        <h1> Featured Experts</h1>
        </div>
        </div>
    )
}
export default Header;