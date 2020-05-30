import React, { useState, useEffect, useRef } from 'react'

//Includes
import './assets/app.css';
import {BrowserRouter as Router} from 'react-router-dom';



//Components
import ImageCarousel from './components/ImageCarousel/imageCarousel';
import Cover from './components/coverComponent/cover';
import About from './components/aboutComponent/about';
import Contact from './components/contactComponent/contact';
import ScrollTo from './components/scrollToComponent/scrollTo';
import Democrify from './components/democrifyComponent/democrify';

function App() {

  const topOfAboutRef = useRef(null);
  const topOfProjectsRef = useRef(null);
  const [isFlipped, setFlip] = useState(0);

  return (
    
    <Router>

      <div className="App">
        <Cover isFlipped={isFlipped} setFlip={setFlip}/>
        <div className="divider" ref={topOfAboutRef}>Profile</div>
        <About aboutRef={topOfAboutRef}/>
        <div className="divider" ref={topOfProjectsRef}>Projects</div>
        <Democrify isFlipped={isFlipped}/>
        <ImageCarousel isAuthed={true}/>
        <div className="divider">Contact</div>
        <Contact/>
        <ScrollTo aboutRef={topOfAboutRef} projectsRef={topOfProjectsRef}/>
      </div>

    </Router>    
  );
}

export default App;
