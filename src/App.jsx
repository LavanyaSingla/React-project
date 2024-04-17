import React from 'react'
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Education from './components/Education/Education.jsx';
import Projects from './components/Projects/Projects.jsx';
import Experience from './components/Experience/Experience.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <Experience /> */}
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App