import React from 'react';

//Includes
import './assets/app.css';
import {BrowserRouter as Router} from 'react-router-dom';



//Components
import ImageCarousel from './components/ImageCarousel/imageCarousel';
import Cover from './components/coverComponent/cover';
import About from './components/aboutComponent/about';
import Contact from './components/contactComponent/contact';

function App() {

  return (
    
    <Router>

      <div className="App">
        <Cover/>
        <div className="divider">Profile</div>
        <About/>
        <ImageCarousel isAuthed={true} />
        <div className="divider">Contact</div>
        <Contact/>
        {/* <Route exact path='/projects' render={(projects) => <ImageCarousel projects={projectsData} isAuthed={true} />}/> */}
        

      </div>

    </Router>    
  );
}

export default App;
