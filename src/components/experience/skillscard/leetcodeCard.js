import React from 'react'
import classes from './leetcodeCard.module.css'
const LeetcodeCard = () => {
    return (
        <section className={classes.card}>
            <div className={classes.cardHeading} >Leetcode Profile</div>
            <div className={classes.cardInfo} >
                <div className={classes.info}><span>Username:</span>
                    <span>Aditya2763</span></div>
                <div className={classes.info}>
                    <span>Rank:</span>
                    <span>1,092,030</span>
                </div>
                <div className={classes.info}>
                    <span>Question Solved:</span>
                    <span> 50</span>
                </div>
                <div className={classes.info}>
                    <span>Max Streak:</span>
                    <span>4</span>
                </div>
            <button className={classes.button}><a href='https://leetcode.com/Aditya2763/' target='"_blank'> Visit Profile</a></button>
            </div>
        </section >
    )
}

export default LeetcodeCard