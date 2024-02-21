import React from 'react'

 import classes from './projects.module.css'

const projects = () => {
  return (
    <section className={classes.projectSection} id="projects">
<div className={classes.majorProject}>
       <h1>Projects</h1>
              <div className={classes.projectItemRight} style={{marginTop:50}}>
                
                <p><a  href="https://aditya-e-commerce.onrender.com" target="_blank" rel="noreferrer">E-Commerce Website</a></p>
                 
                  <img style={{ borderRadius: "10px",width:"100px", height:"100px" }}
                      
                       
                      alt="e-commerce website"
                      src="/images/eCommerceWebsite.jpg"
                      
                  />
                  
              </div>
              <div className={classes.projectItemLeft}>
              
                <p><a href="https://driving-test-seven.vercel.app/" target="_blank" rel="noreferrer">Driving Test </a></p>
                 <img style={{ borderRadius: "10px" ,width:"100px", height:"100px"}}
                     
                     
                      alt="Chatting app"
                      src="/images/drivingtest.png"
                  />
                 
              </div>
              <div className={classes.projectItemRight}>
              
                <p><a href="https://aditya-chatting-app.onrender.com" target="_blank" rel="noreferrer">Chatting app </a></p>
                 <img style={{ borderRadius: "10px" ,width:"100px", height:"100px"}}
                     
                     
                      alt="Chatting app"
                      src="/images/chatting-app.jpg"
                  />
                 
              </div>
              <div className={classes.projectItemLeft}>
           
                <p><a  href="https://aditya-blogwebsite.onrender.com" target="_blank" rel="noreferrer">Blogging website </a></p>
           
                  <img style={{ borderRadius: "10px",width:"100px", height:"100px" }}
                     
                        alt="Blogging website"
                      src="/images/blogWebsite.jpg"
                  />
                 
              </div>
              <div className={classes.projectItemRight}>
                  <p style={{color:"white",fontSize:"1.5rem",fontFamily: "cursive"}}>Twitter Clone</p>
                  <img style={{ borderRadius: "10px" ,width:"100px", height:"100px"}}
                      
                        alt="Twitter clone"
                      src="/images/image.jpg"
                  />

              </div>
              
</div>
          <div className={classes.minorProject}>
              <p className={classes.minorProjectHeading}>Minor projects</p>
              <div className={classes.minorProjectItem}>
                 
            
                <p><a href="https://aditya-me.netlify.app/assignment-8(wheather%20app)" target="_blank" rel="noreferrer">Weather website </a></p>
                
                  <img style={{ borderRadius: "10px",width:"50px", height:"50px" }}
                      
                        alt="e-commerce website"
                      src="/images/weatherApi.jpg"
                  />

              </div>
              <div className={classes.minorProjectItem}>
             
                <p><a href="https://aditya-me.netlify.app/assignment-6/" target="_blank" rel="noreferrer">Music Player</a></p>
                
                  <img style={{ borderRadius: "10px",width:"50px", height:"50px" }}
                    
                        alt="Music Player"
                      src="/images/musicplayer.jpg"
                  />
              

              </div>
              <div className={classes.minorProjectItem}>

                <p><a  href="https://vercel.com/aaditya2763/aditya-food-app" target="_blank" rel="noreferrer">Food Website</a></p>
                 
        
                  <img style={{ borderRadius: "10px",width:"50px", height:"50px" }}
                     
                        alt="Food website"
                      src="/images/foodapp.jpg"
                  />


              </div>
              <div className={classes.minorProjectItem}>
             
                <p><a href="https://aditya-me.netlify.app/assignment-9(movie%20search-app)" target="_blank" rel="noreferrer">Movies Api Website </a></p>
                    
                            
                  <img style={{ borderRadius: "10px",width:"50px", height:"50px" }}
                      
                        alt="Movies Api Website"
                      src="/images/movieswebsite.jpg"
                  />
                
                  
                  

              </div>
              <p className={classes.minorProjectHeading}>UI projects</p>
              <div className={classes.minorProjectItem}>
                 
            
                <p><a href="https://black-coffer-assignment-eight.vercel.app/" target="_blank" rel="noreferrer">User dashbord </a></p>
                
                  <img style={{ borderRadius: "10px",width:"50px", height:"50px" }}
                      
                        alt="e-commerce website"
                      src="/images/weatherApi.jpg"
                  />

              </div>
              <div className={classes.minorProjectItem}>
             
                <p><a href="https://aditya-me.netlify.app/assignment-6/" target="_blank" rel="noreferrer">Code Editor</a></p>
                
                  <img style={{ borderRadius: "10px",width:"50px", height:"50px" }}
                    
                        alt="Music Player"
                      src="/images/codeeditor.png"
                  />
              

              </div>
              <div className={classes.minorProjectItem}>

                <p><a  href="https://atq-assignment-i0al78s17-aaditya2763.vercel.app/" target="_blank" rel="noreferrer">Blog website Ui</a></p>
                 
        
                  <img style={{ borderRadius: "10px",width:"50px", height:"50px" }}
                     
                        alt="Food website"
                      src="/images/Auth UI.png"
                  />


              </div>
              <div className={classes.minorProjectItem}>
             
                <p><a href="https://atq-3rd-task.vercel.app/" target="_blank" rel="noreferrer">Fetch User profile Api</a></p>
                    
                            
                  <img style={{ borderRadius: "10px",width:"50px", height:"50px" }}
                      
                        alt="Movies Api Website"
                      src="/images/profilefetch.png"
                  />
                
                  
                  

              </div>
          </div>
    </section>
  )
}

export default projects
