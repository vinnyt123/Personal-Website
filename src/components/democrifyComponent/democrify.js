import democrifyLogo from './democrify.svg';
import React from 'react';

function Democrify() {

    return (
    <a href="https://democrify-party.herokuapp.com/" style={{display:'block'}} target='_blank'>
        <div style={{textAlign:'center', width: '100%', paddingTop: '20px', paddingBottom: '20px'}}>
            <p>Try out a MERN stack Spotify party playlist web app I created in a team of 4 here!</p>
            <img src={democrifyLogo} style={{width: '80%'}}></img>
        </div>
    </a>    
    );
}

export default Democrify;