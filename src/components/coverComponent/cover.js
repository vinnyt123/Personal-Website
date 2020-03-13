import React from 'react';

//Includes
import './cover.css';
import cover from './cover.jpg';

function Cover() {
  return (
    <div>
    <img alt="cover" src={cover} className="backgroundImage"></img>
    <h1 className="nameText">Vinny Tunnell</h1>
    </div>
  );
}

export default Cover;