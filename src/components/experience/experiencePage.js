import React from 'react'
import classes from "./experience.module.css"
import ProfileCard from "./profilecard/profilecard"
import ResidenceAndSkillsInfo from './skillscard/residenceAndSkillsInfo'
import GithubCard from './skillscard/githubCard'
import BoxWithbackgroundImg from './experienceIntroBox/BoxWithbackgroundImg'
import HackerblockCard from './skillscard/hackerblockCard'
import LeetcodeCard from './skillscard/leetcodeCard'
import Myservices from '../services/myservices'
const experiencePage = () => {
  return (
    <section className={classes.expPage} id="experience">
<div className={classes.profileSection}>
<ProfileCard/>
<ResidenceAndSkillsInfo/>
</div>
<div className={classes.workSection}>
<BoxWithbackgroundImg/>
<Myservices/>
</div>
<div className={classes.profileSection}>
<GithubCard/>
<HackerblockCard/>
<LeetcodeCard/>

</div>
    </section>
  )
}

export default experiencePage