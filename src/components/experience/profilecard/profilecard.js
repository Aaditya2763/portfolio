import React from 'react'
// import {Image} from "react" 
import profileImg from "../../../assets/images/adityaImg.jpg"
import classes from './profilecard.module.css'
import SocialLinks from '../../sociallinks/SocialLinks'
// import profileImage from "../../../assets/images/adityaImg.jpg"
const profilecard = () => {
  return (
 
    <div className={classes.cardBox}>
  <img src={profileImg} className={classes.profileImg}/>
  <ul className={classes.profileinfo}>
    <li>Aaditya Singh</li>
    <li style={{color:"orange"}}>Fullstack Developer</li>
  </ul>
<SocialLinks/>
    </div>
   
  )
}

export default profilecard