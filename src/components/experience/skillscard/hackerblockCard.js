import React from 'react'
import { BiUpArrow ,BiDownArrow} from 'react-icons/bi'
import classes from './hackerblockCard.module.css'

const HackerblockCard = () => {
    return (
        <section className={classes.card}>
            <h1 style={{textAlign:'center',textDecoration:'underline'}}>Hacker Block Profile</h1>
            <div>
                <p style={{color:'#5C5D61',marginLeft:'40px'}}>Current Rank</p>
                <div className={classes.rank}>
                    <span style={{fontSize:'20px'}}>1061</span>
                    <span style={{color:'#8DBF75'}}><BiUpArrow />31 ranks</span>
                </div>
            </div>
            <div>
                <p style={{color:'#5C5D61',marginLeft:'40px'}}>Monthly Performance</p>
                <div className={classes.rank}>
                    <span  style={{fontSize:'20px'}}>3000</span>
                    <span style={{color:'#D85858'}}><BiDownArrow />400 points</span>
                    
                </div>
            </div>
            <button className={classes.visitButton}><a href='https://hack.codingblocks.com/app/users/269279' target="_blank" rel="noreferrer">  Visit profile </a></button>
        </section>
    )
}

export default HackerblockCard