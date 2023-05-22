import Header from "./components/header/Header"
import Footer from "./components/footer/footer"
import Aboutme from "./components/aboutme/aboutme"
import Services from "./components/services/myservices"
import Projects from "./components/Projects/projects"
import Chats from "./components/chatnow/chat"
import Navbar from "./components/navbar/navbar"
import Profilecard from "./components/experience/profilecard/profilecard"
// import Particles from "react-tsparticles"
// import HomeBackground from "./components/particles/homeBackGround"
import Experience from "./pages/experience"

function App() {
  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */

  return (
    <div  >
     {/* <Profilecard/> */}
     <Header />
  <Experience />
      
     <Aboutme /> 
     {/* <Services /> */}
     <Projects />
  <Footer />

    </div>
  );
}

export default App;
