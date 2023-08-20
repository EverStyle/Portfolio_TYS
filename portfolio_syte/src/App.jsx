import React, { useRef } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './screens/About';
import Education from './screens/Education';
import Experience from './screens/Experience';
import Hellow from './screens/Hellow';
import Status from './screens/Status';
import Work from './screens/Work';
import { LeftInfo } from './components/ContactScroll';
import { RightInfo } from './components/ContactScroll';
import './App.css';

function App() {
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const experienceRef = useRef(null);
  const hellowRef = useRef(null);
  const statusRef = useRef(null);
  const workRef = useRef(null);

  const handleAboutClick = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const handleEducationClick = () => {
    educationRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const handleExperienceClick = () => {
    experienceRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const handleHellowClick = () => {
    hellowRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const handleStatusClick = () => {
    statusRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const handleWorkClick = () => {
    workRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <div>
        <header>
          <Header
            handleAboutClick={handleAboutClick}
            handleEducationClick={handleEducationClick}
            handleExperienceClick={handleExperienceClick}
            handleHellowClick={handleHellowClick}
            handleStatusClick={handleStatusClick}
            handleWorkClick={handleWorkClick}
          />
        </header>
        <div className="main-wrapper">
          <div className="left-wrapper">
            <LeftInfo />
          </div>
          <div className="right-wrapper">
            <RightInfo />
          </div>
        </div>
        <main className="main-content">
          <div ref={hellowRef}>
            <Hellow />
          </div>
          <div ref={aboutRef}>
            <About />
          </div>
          <div ref={educationRef}>
            <Education />
          </div>
          <div ref={experienceRef}>
            <Experience />
          </div>
          <div ref={workRef}>
            <Work />
          </div>
          {/* <div ref={statusRef}>
            <Status />
          </div> */}
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;