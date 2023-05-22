import React from 'react'
import {FaDownload} from 'react-icons/fa'
import classes from "./skillInfo.module.css"
const residenceAndSkillsInfo = () => {
    return (
        <section className={classes.infoBox}>
            <div className={classes.residenceBox}>
                <div className={classes.residenceinfo}>
                    <p> Residence:</p>
                    <p>India</p>
                </div>
                <div className={classes.residenceinfo}>
                    <p>City:</p>
                    <p>Delhi</p>
                </div>
                <div className={classes.residenceinfo}>
                    <p> Age:</p>
                    <p>20</p>
                </div>
            </div>
            <div className={classes.skillsBox}>
                <div className={classes.residenceinfo}>
                    <p>HTML</p>
                    <p style={{ color: 'white' }}>90%</p>
                </div>
                <div>
                    <input className={classes.skilsInput} />
                </div>
                <div className={classes.residenceinfo}>
                    <p> CSS</p>
                    <p style={{ color: 'white' }}>90%</p>
                </div>
                <div>
                    <input className={classes.skilsInput} />
                </div>
                <div className={classes.residenceinfo}>
                    <p> Javascript</p>
                    <p style={{ color: 'white' }}>90%</p>
                </div>
                <div>
                    <input className={classes.skilsInput} />
                </div>
                <div className={classes.residenceinfo}>
                    <p>React</p>
                    <p style={{ color: 'white' }}>90%</p>
                </div>
                <div>
                    <input className={classes.skilsInput} />
                </div>
                <div className={classes.residenceinfo}>
                    <p>MongoBD</p>
                    <p style={{ color: 'white' }}>90%</p>
                </div>
                <div>
                    <input className={classes.skilsInput} />
                </div>
                <div className={classes.residenceinfo}>
                    <p>Node.js</p>
                    <p style={{ color: 'white' }}>90%</p>
                </div>
                <div>
                    <input className={classes.skilsInput} />
                </div>
                <div className={classes.residenceinfo}>
                    <p>Express</p>
                    <p style={{ color: 'white' }}>90%</p>
                </div>
                <div>
                    <input className={classes.skilsInput} />
                </div>
                <div className={classes.residenceinfo}>
                    <p>Aws</p>
                    <p style={{ color: 'white' }}>90%</p>
                </div>
                <div>
                    <input className={classes.skilsInput} />
                </div>

            </div>
            <div className={classes.cvBox}>
            <a href='https://drive.google.com/file/d/1CRAwYFirnl9UG8_B5LtH99fu9rxkyp3k/view?usp=sharing' target="_blank" rel="noreferrer">Download CV <FaDownload/> </a>
           
            </div>
            
        </section>
    )
}

export default residenceAndSkillsInfo