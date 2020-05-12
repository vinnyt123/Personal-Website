import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import Link from 'react-router-dom';

//Includes
import './cover.css';
import coverLight from './cover-light.jpg';
import coverDark from './cover-dark.jpg';

function Cover() {

  
  const [isFlipped, setFlip] = useState(0);

  function flip() {
    if(!isFlipped) {
      document.body.style.setProperty('--background-color', '#0f141a');
      document.body.style.setProperty('--divider-background', 'black');
      document.body.style.setProperty('--divider-text', 'white');
      document.body.style.setProperty('--color', 'white');
      document.body.style.setProperty('--divider-border', 'black');
    } else {
      document.body.style.setProperty('--background-color', '#fafafa');
      document.body.style.setProperty('--divider-background', 'white');
      document.body.style.setProperty('--divider-text', 'black');
      document.body.style.setProperty('--color', 'black');
      document.body.style.setProperty('--divider-border', 'rgb(219,219,219)');
    }
    setFlip(!isFlipped);
  }

  return (
    <div>
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div id="lightcover">
        <img alt="cover" src={coverLight} className="backgroundImage" ></img>
        <button className="flipButton" onClick={flip}>Switch to dark theme</button>
      </div>

      <div>
        <img alt="cover" src={coverDark} className="backgroundImage saturate"></img>
        <button className="flipButton" onClick={flip}>Switch to light theme</button>
      </div>
    </ReactCardFlip>
    <h1 className="nameText">Vinny Tunnell</h1>
    </div>
  );
}

export default Cover;