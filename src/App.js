import React from 'react';

//Includes
import './assets/app.css';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
//import pic from './assets/Images/Dreamscapes/1.png';
//HeaderImages
//import dreamscapesHeader from "./assets/Images/Dreamscapes";
//import '..\\public\\Images\\Tweeto\\1.PNG';


//Components
import Header from './components/headerComponent/header';
import ImageCarousel from './components/ImageCarousel/imageCarousel';
import Cover from './components/coverComponent/cover';
import Divider from './components/dividerComponent/divider';
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
