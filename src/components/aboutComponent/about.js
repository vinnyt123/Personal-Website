import React from 'react';
import useWindowDimensions from '../../index.js'

//Includes
import './about.css';

function About() {
  const { windowWidth } = useWindowDimensions();
  var layout = "flexBoi";
  var noMargin = {};
  var bottomPad = {};
  if (windowWidth < 850) {
    layout = "unflexBoi";
    noMargin = {margin: 0};
    bottomPad = {paddingBottom: 15, paddingTop: 15};
  }
  return (
    <div className="wrapper" id="profileSection" >      
      <div className={layout}>
        <div className="aboutMe">
          <h2>About Me</h2>

          <p>A software engineer passionate about building high quality software that makes a difference.
          </p>

          <p>Eager to learn about and work with new technologies and the people who develop them.
          </p>

          <p>I graduated from the University of Auckland at the end of 2020 and am looking for a graduate role for 2022.
          </p>

          <p style = {noMargin}>I am open to working in a wide variety of software related fields.
          </p>
        </div> 
        <div className="aboutMe" style={bottomPad}>
          <h2>Details</h2>
          <h4>Name</h4>
          <p>Vinny Tunnell</p>
          <h4>Tertiary Education</h4>
          <p>Bachelor of Engineering (First Class Honours) in Software Engineering at the University of Auckland </p>
          <h4>Location</h4>
          <p>Living in New Zealand (but also looking for graduate roles in Australia)</p>
          <h4>Work Experience and Skills</h4>
          <a href={process.env.PUBLIC_URL + '/resume.pdf'} target="_blank" className="link" rel="noopener noreferrer">See my CV here</a>
        </div> 
      </div>
    </div> 
  );
}

export default About;