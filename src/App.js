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

  var projectsData = setupData();
  console.log(projectsData);
  var isPopoverOpen = true;
  return (
    
    <Router>

      <div className="App">
        <Cover/>
        <div className="divider">Profile</div>
        <About/>
        <div className="divider">Projects</div>
        <ImageCarousel projects={projectsData} isAuthed={true} />
        <div className="divider">Contact</div>
        <Contact/>
        {/* <Route exact path='/projects' render={(projects) => <ImageCarousel projects={projectsData} isAuthed={true} />}/> */}
        

      </div>

    </Router>    
  );
}

function setupData() {
  var dreamscapesPath = './Images/Dreamscapes/';
  var nameSayerPath = './Images/NameSayer/';
  var tweetoPath = './Images/Tweeto/';

  var dreamscapesImages = Array.from(new Array(7),(val,index)=> dreamscapesPath + (index + 1) + ".png" );
  var nameSayerImages = Array.from(new Array(8),(val,index)=> nameSayerPath + (index + 1) + ".jpg" );
  var tweetoImages = Array.from(new Array(4),(val,index)=> tweetoPath + (index + 1) + ".PNG" );;

  var tweetoTxt = "Tweeto is a social media application created using the CherryPy web framework for Python3 along with jinja2 for page \
   templating, and PyNacl for encryption of private messages. MySQL was used for data management. HTML, CSS, and \
   Javascript/JQuery were also used for creation of the UI and Ajax refreshing.";

  var nameSayerTxt = "Namesayer is a JavaFX application used to practice pronunciation of unfamiliar names. \
  The application loads in audio files of people saying the names, then cleans up the audio using ffmpeg commands called via the bash shell for linux. \
  Features include the ability to combine multiple names into a single name,\
  the creation of playlists and a theme store.";

  var dreamscapesTxt = "Dreamscapes is a platformer game made using JavaFX. CSS was used to style the menus. Open source images and sprite\
   sheets were used to create the maps and characters. Some open source sound effects were also utilized. High scores are serialized into\
    a .ser file and loaded on application start so they are persistent.";

  const projects = [
    {
      name: "Tweeto",
      text: tweetoTxt,
      color: "rgba(14,85,183,0.85)",
      images: tweetoImages
    },
    {
      name: "Dreamscapes",
      text: dreamscapesTxt,
      color: "#0d1122",
      images: dreamscapesImages
    },
    {
      name: "NameSayer",
      text: nameSayerTxt,
      color: "#157766",
      images: nameSayerImages
    }
  ]

  return projects;
}

export default App;
