import React, { useState } from 'react'
import classes from "./header.module.css"
import { FaBars } from "react-icons/fa";
import SocialLinks from '../sociallinks/SocialLinks';
import {
  EmailShareButton,
  FacebookShareButton,}from "react-share";
import Chats from '../chatnow/chat';
import Codingplatforms from '../codingPlatforms/codingplatforms';
import OpenchatBox from '../chatnow/openChatBox';
import OpenCodingplatforms from '../codingPlatforms/openCodingplatform';

const Header = () => {
  const [toggleMenu, settoggleMenu] = useState(false)
  const [openChat,setOpenChat]=useState(false);
  const [competativePlatformStatus,setCompetativePlatformStatus]=useState(true);

  const toggleMenuHandler = () => {

    settoggleMenu(!toggleMenu)

  }
  function blurHanlder() {
    settoggleMenu(false)
  }
  const openBoxHandler=()=>{
setOpenChat(!openChat);


  }
  const openPlatformBoxHandler=()=>{
  setCompetativePlatformStatus(!competativePlatformStatus);
   
 
      }
  

  return (
    <>
      <section className={classes.headerBox} id='home'>
        <navbar className={classes.navbar}>
          <div>
            <p>Portfolio</p>
          </div>
          <div  >
            <ul className={`${classes.navlinks} ${toggleMenu ? " " : classes.hidenavbar}`} onClick={blurHanlder} >

              <li ><a href="#home">Home</a> </li>
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

        <div className={classes.profileItems}>
          <figure style={{padding:"10px"}}>
            {}
          </figure>

          <ul className={classes.profile}>
            <li style={{ fontSize: "30px", color:"#f68176"}}> Aaditya Singh </li>

            <li style={{color:"white"}}>  A Creative Freelancer & Full Stack Developer</li>
           
          </ul>
          <SocialLinks/>
          <div className={classes.chatboxAndCodingPlatformBox}>
            {/* {competativePlatformStatus ?<OpenCodingplatforms  paltformhandler={openPlatformBoxHandler}/>:<Codingplatforms   paltformhandler={openPlatformBoxHandler} />} */}
           

 {/* {openChat?<OpenchatBox boxHandler={openBoxHandler} />:<Chats boxHandler={openBoxHandler}  />} */}
      
           
          </div>
         
        </div>
        
       

      </section>
    </>
  )
}

export default Header