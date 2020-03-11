import { Gallery, GalleryImage } from "react-gesture-gallery";
import useWindowDimensions from '../../index.js'
import React, { useState, useEffect, useRef } from 'react'

//Includes
import './imageCarousel.css';



//Image imports
import imageLoader from './images'
import dreamscapesSnip from './images/dreamscapesSnip.png';

function ImageCarousel(props) {

  const projects = imageLoader();
  console.log("meosn");

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
  }

  
  const [index, setIndex] = React.useState(0);
  const [color, setColor] = React.useState(projects[0].color);
  const [text, setText] = React.useState(projects[0].text);

  const { windowHeight, windowWidth } = useWindowDimensions();
  console.log(windowHeight);
  console.log(windowWidth);

  const [height, setHeight] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    setHeight(ref.current.clientHeight)
  })

  console.log(height);

  const remainingHeight = windowHeight - height - 50 - 61 - 10;

  return (
    
    <div className='projectsWrapper'>
      
      <div className='projectsHeader'>
        <a className="tweetoText" style={{background: "rgba(14,85,183,0.85)", color: "white"}} onClick={() => changeImage(0)}>Tweeto</a>
        <a style={{background: "#0d1122", color: "white"}} onClick={() => changeImage(4)}><img className="dreamscapesSnip" src={dreamscapesSnip} /></a>
        <a style={{background: "#157766", color: "white", fontSize: '22px', fontWeight: 'normal'}} onClick={() => changeImage(11)}>NameSayer</a>
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
