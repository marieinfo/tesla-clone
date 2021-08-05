import React, { useState} from 'react'
import { BsJustify , BsX} from "react-icons/bs";
import './Header.css'
import logo from './../images/logo.svg'

function Header() {  
   
    function clikou(){
        document.getElementById("close").style.display = "flex";
    }
    function close(){
        document.getElementById("close").style.display = "none";
    }
    return (
        <div className="header">
            <div className="logo"><a><img src={logo}/></a></div>
            <div className="menu">
            <a href="#">Model S</a>
            <a href="#">Model 3</a>
            <a href="#">Model X</a>
              <a href="#">Model Y</a>

            </div>
            <div className="menu-right">
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <div className="menuicon"  onClick={clikou}><BsJustify/></div>
                
            </div>
            
            <div className="burgernav" id="close" >
                <div className="icon"  onClick={close}><BsX/></div>
                <li><a href="#">Model S</a></li>
                {/* */}
                <li><a href="#">Model 3</a></li>
                <li><a href="#">Model Y</a></li>
                <li><a href="#">Model X</a></li>
                <li><a href="#">Exesting Inventory</a></li>
                <li><a href="#">Use Inventory</a></li>
                <li><a href="#">Trade-in</a></li>
                <li><a href="#">CyberTruck</a></li>
                <li><a href="#">Roadaster</a></li>
               
            </div>
        </div>
    )
}

export default Header
