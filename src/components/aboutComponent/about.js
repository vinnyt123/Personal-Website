import React from 'react';
import useWindowDimensions from '../../index.js'

//Includes
import './about.css';

function About() {
  const { windowHeight, windowWidth } = useWindowDimensions();
  var layout = "flexBoi";
  var noMargin = {};
  var bottomPad = {};
  if (windowWidth < 850) {
    layout = "unflexBoi";
    noMargin = {margin: 0};
    bottomPad = {paddingBottom: 15, paddingTop: 15};
  }
  return (
    <div className="wrapper">

      <p className="italicsBoi">I'm a young software engineer</p>
      
      <div className={layout}>
        <div className="aboutMe">
          <h2>About Me</h2>

          <p>An aspiring software engineer currently pursuing a BE (Hons) in Software
          Engineering at the University of Auckland.
          </p>

          <p>Eager to learn about and work with new technologies and the people who develop them.
          </p>

          <p>I am in my fourth and final year of my degree, and am looking for a graduate role for 2021. I would also be interested in part time
            work throughout 2020.
          </p>

          <p style = {noMargin}>I am open to working in a wide variety of software related fields.
          </p>
        </div> 
        <div className="aboutMe" style={bottomPad}>
          <h2>Details</h2>
          <h4>Name</h4>
          <p>Vincent (Vinny) Tunnell</p>
          <h4>Tertiary Education</h4>
          <p>Bachelor of Engineering (Honours) in Software Engineering at the University of Auckland </p>
          <h4>Location</h4>
          <p>Living in New Zealand (but also looking for graduate roles in Australia)</p>
          <h4>Work Experience and Skills</h4>
          <p className="link">See my CV here</p>
        </div> 
      </div>
    </div> 
  );
}

export default About;