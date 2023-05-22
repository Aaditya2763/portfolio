import React, { useState } from 'react'
import classes from "./navbar.module.css"
import { FaBars } from "react-icons/fa";

const Navbar=()=>{
    const [toggleMenu, settoggleMenu] = useState(false);
    const toggleMenuHandler = () => {

        settoggleMenu(!toggleMenu)
    
      }
      function blurHanlder() {
        settoggleMenu(false)
      }
    return(
        <navbar className={classes.navbar}>
          <div>
            <p>Portfolio</p>
          </div>
          <div  >
            <ul className={`${classes.navlinks} ${toggleMenu ? " " : classes.hidenavbar}`} onClick={blurHanlder} >

              <li ><a href="/">Home</a> </li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li> <a href="https://drive.google.com/file/d/1CRAwYFirnl9UG8_B5LtH99fu9rxkyp3k/view?usp=share_link" target="_blank" rel="noreferrer"> Resume </a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#contactme">Contact me</a></li>

            </ul>
            <button onClick={toggleMenuHandler} className={classes.menubar} style={{ fontSize: "25px", color: "#ec655f" }}>
              <FaBars />
            </button>

          </div>

        </navbar>
    )
}
export default Navbar;