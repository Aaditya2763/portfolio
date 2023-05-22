import React from 'react'
import classes from "./githubcard.module.css"
import {BsGithub}from 'react-icons/bs'
const githubCard = () => {
  return (
    <section className={classes.cardBox}>
      <h1 style={{ color: 'orange', textDecoration: "underline", }}><BsGithub style={{color:'white',fontSize:'1.5rem'}}></BsGithub>Github Profile</h1>
      <div className={classes.githubBox}>
        <div className={classes.githubImg}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJbcOaYiR3F79EU0S0Ew95QUv9tVFoF4YZdA&usqp=CAU" className={classes.avatar} />
          <span className={classes.username} >Aditya2763</span>
        </div>
        <div className={classes.githubInfo}>

          <span>Name: Aaditya Singh</span>
          <span>Followers: 4</span>
          <span>Following: 3</span>
          <span>Repository: 26</span>
          <button   className={classes.githubButton} ><a href='https://github.com/Aaditya2763/' target="_blank" rel="noreferrer">Visit Profile </a></button>
        </div>

      </div>

    
    </section>
  )
}

export default githubCard