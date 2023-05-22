import React from 'react'
import classes from "./myservices.module.css"
import { RiPencilRuler2Line } from "react-icons/ri"
const Myservices = () => {
  return (
    <section className={classes.section} id="services">
        <div className={classes.heading}>
        {/* <p style={{ color: "#f68176",fontSize:"1.5rem", fontFamily: "cursive"}}>What I Do</p> */}
        <p style={{ color: "white", fontSize: "2rem", fontFamily: "cursive" , marginTop:"5px"}}><span style={{ borderBottom:"2px solid #f68176" }}>My</span> Services</p>
        </div>
        <container className={classes.container}>
            <div>
          {/* <span > <RiPencilRuler2Line /></span> */}
          <h5><a href='https://drive.google.com/file/d/1QIjC-8sE1wmi9A-hhkRoMoKBtrg74rCo/view?usp=sharing' target="_blank" rel="noreferrer">UI Designer</a></h5>
          <p>Designed and Developed user-friendly responsive websites  ensuring that all mentioned requirements were met and company procedures fully followed. Developed more than 10 reaponive and user-friendly websites and App</p>
            </div>
       
            <div>
          {/* <span > <RiPencilRuler2Line /></span> */}
          <h5><a href='https://drive.google.com/file/d/1QIjC-8sE1wmi9A-hhkRoMoKBtrg74rCo/view?usp=sharing' target="_blank" rel="noreferrer"> Full-Stack Developer(MERN)</a></h5>
          <p>Dedicated ,Certified and efficient full stack developer with 6 months experience in application layers, presentation layers, and databases. Certified in both frontend and backend technologies.</p>
        </div>
        <div>
          {/* <span> <RiPencilRuler2Line /></span> */}
          <h5><a href='https://drive.google.com/file/d/1QIjC-8sE1wmi9A-hhkRoMoKBtrg74rCo/view?usp=sharing' target="_blank" rel="noreferrer"> Backend Developer</a></h5>
          <p>Dexterous backend developer,skilled at designing APIs,databases and user focused experiences.Worked on databases like MongoDB , DynamoDB and MySQL and Firebase </p>
            </div>
            <div>
          {/* <span> <RiPencilRuler2Line /></span> */}
          <h5><a href='' rel="noreferrer">Amazon Web Services</a></h5>
          <p> Worked and having Good Knowledge of Amazon Web Services like EC2, S3, Elastic BeanStalk, DynamoDB, Amplify, cloudwatch, VPC, IAM, Autoscaling, Multifactor Authentication,code pipeline etc. </p>
            </div>
        <div>
          {/* <span> <RiPencilRuler2Line /></span> */}
          <h5><a  href=''>Teaching Assistant</a></h5>
          <p>Assisted more than 100 coding enthusiast students at coding blocks as a teaching assistant for full stack web development
            course, and Data Structures and Algorithms.
</p>
        </div>
        <div>
        <h5><a > Previous Projects</a></h5>
        <ul>
        <li><a href='https://www.aivara.in/' target="_blank" rel="noreferrer">aivara.in</a></li>
        <li><a href='https://www.dev.aivara.in/' target="_blank" rel="noreferrer">dev.aivara.in</a></li>
        <li><a href='https://www.tech4unme.in/' target="_blank" rel="noreferrer">tech4unme.in</a></li>
        <li><a href='https://www.redpositive.in/' target="_blank" rel="noreferrer">redpositive.in</a></li>
    
</ul>
        </div>
           
        </container>
    </section>
  )
}

export default Myservices