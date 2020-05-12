import { Gallery, GalleryImage } from "react-gesture-gallery";
import useWindowDimensions from '../../index.js'
import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

//Includes
import './imageCarousel.css';

import smoothscroll from 'smoothscroll-polyfill';

//Image imports
import imageLoader from './images'
import dreamscapesSnip from './images/dreamscapesSnip.png';

function ImageCarousel(props) {


  smoothscroll.polyfill();
  const topOfProjectsRef = useRef(null);

  const projects = imageLoader();

  var images = [];
  for (var j = projects.length - 1; j >= 0; j--) {
    images = projects[j].images.concat(images);
  } 

  function getProjectFromI(i) {
    var totalLen = 0;
    for (var j = 0; j < projects.length; j++) {
      totalLen += projects[j].images.length;
      if (i <= totalLen - 1) {
        return projects[j];
      }
    }
  }

  function changeImage(i) {
    var project = getProjectFromI(i);
    setIndex(i);
    setColor(project.color);
    setText(project.text);
    window.scrollTo({top: topOfProjectsRef.current.offsetTop, behavior: 'smooth'});
  }

  
  const [index, setIndex] = React.useState(0);
  const [color, setColor] = React.useState(projects[0].color);
  const [text, setText] = React.useState(projects[0].text);

  const { windowHeight, windowWidth } = useWindowDimensions();

  const [height, setHeight] = useState(0)
  const ref = useRef(null)
  var remainingHeight;
  useEffect(() => {
    setHeight(ref.current.clientHeight);
  })
  remainingHeight = windowHeight - height - 50 - 61 - 10;

  return (
    
    <div className='projectsWrapper' id="projectsSection" ref={props.projectsRef}>
      <div className="divider" ref={topOfProjectsRef}>Projects</div>
      <div className='projectsHeader'>
        <Link className="tweetoText" style={{background: "rgba(14,85,183,0.85)", color: "white"}} onClick={() => changeImage(0)}>Tweeto</Link>
        <Link style={{background: "#0d1122", color: "white"}} onClick={() => changeImage(4)}><img alt="dreamscapesButton" className="dreamscapesSnip" src={dreamscapesSnip} /></Link>
        <Link style={{background: "#157766", color: "white", fontSize: '22px', fontWeight: 'normal'}} onClick={() => changeImage(9 )}>NameSayer</Link>
      </div>

      <div ref={ref} className='projectDescription' style={{background: color}}>
        <div className='projectText'>{text}</div>
      </div>
      <Gallery className='projectsGallery'
        onRequestChange={i => {   
          changeImage(i);
      }}
        style={{
          background: color,
          width: "100%",
          paddingBottom: 10,
          height: remainingHeight
        }}
        index={index}
      >
        {images.map(image => (
            <GalleryImage objectFit="contain" key={image} src={image} />
        ))
        
        }
      </Gallery>
    </div>
  );
}


export default ImageCarousel;
