import React from 'react'
import classes from "./BoxWithbackground.module.css"
import { FaDownload } from 'react-icons/fa'
const BoxWithbackgroundImg = () => {
  return (
    <section className={classes.backgroundImgBox}>
      <div className={classes.exploreBox}>
        <div  className={classes.headingSection}>
<p className={classes.heading}>Discover my amazing art Space!</p>
<button className={classes.button}><a href='https://drive.google.com/file/d/1CRAwYFirnl9UG8_B5LtH99fu9rxkyp3k/view?usp=sharing' target="_blank" rel="noreferrer"> <FaDownload/> Download CV </a></button>

        </div>
        <div className={classes.img}>

        </div>
        {/* <img src='https://www.iventra.com/assets/images/bg/back-end-developer.gif' className={classes.img} /> */}
      </div>
    </section>
  )
}

export default BoxWithbackgroundImg