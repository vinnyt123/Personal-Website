import React, { useState, useRef } from 'react'

//Includes
import './assets/app.css';
import {BrowserRouter as Router} from 'react-router-dom';
import getProjectsContent from './getProjectsContent'

//Components
import Cover from './components/cover/cover';
import About from './components/about/about';
import Contact from './components/contact/contact';
import ScrollTo from './components/scrollTo/scrollTo';
import Project from './components/project/project';

function App() {
  const topOfAboutRef = useRef(null);
  const topOfProjectsRef = useRef(null);
  const bottomRef = useRef(null)
  const [isFlipped, setFlip] = useState(0);

  return (
    <Router>
      <div className="App">
        <Cover isFlipped={isFlipped} setFlip={setFlip}/>
        <div className="divider" ref={topOfAboutRef}>Profile</div>
        <About aboutRef={topOfAboutRef}/>
        <div className="divider" ref={topOfProjectsRef}>Projects</div>
        {getProjectsContent().map(
            (projectInfo) => {
              return <Project {...projectInfo} isFlipped={isFlipped}/>
            }
        )}
        <div className="divider">Contact</div>
        <Contact/>
        <ScrollTo aboutRef={topOfAboutRef} projectsRef={topOfProjectsRef} bottomRef={bottomRef}/>
        <div ref={bottomRef} />
      </div>
    </Router>    
  );
}

export default App;
