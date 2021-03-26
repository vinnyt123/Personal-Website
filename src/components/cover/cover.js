import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

//Includes
import './cover.css';
import coverLight from '../../assets/images/cover-light.jpg';
import coverDark from '../../assets/images/cover-dark.jpg';

function Cover(props) {
  const [imgLoaded, setImgLoaded] = useState(0);

  function flip() {
    if(!props.isFlipped) {
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
    props.setFlip(!props.isFlipped);
  }

  function onLoad() {
    setImgLoaded(true);
  }

  return (
    <div className={"coverWrapper"}>
    <ReactCardFlip isFlipped={props.isFlipped} flipDirection="horizontal">
      <div id="lightcover">
        <img alt="cover" src={coverLight} className="backgroundImage saturate" onLoad={onLoad} />
        <button className="flipButton" onClick={flip}>Switch to dark theme</button>
      </div>

      <div id ="darkcover">
        {imgLoaded && <img alt="cover" src={coverDark} className="backgroundImage saturate" />}
        <button className="flipButton" onClick={flip}>Switch to light theme</button>
      </div>

    </ReactCardFlip>
    <h1 className="nameText">Vinny Tunnell</h1>

    </div>
  );
}

export default Cover;