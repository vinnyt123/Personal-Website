import democrifyLogo from './democrify.svg';
import whiteDemocrifyLogo from './democrify_white.svg';
import React from 'react';

function Democrify(props) {
    
    return (
    <a href="https://democrify-party.herokuapp.com/" style={{display:'block'}} target='_blank'>
        <div style={{textAlign:'center', width: '100%', paddingTop: '20px', paddingBottom: '20px', color: 'var(--color)'}}>
            <p>Try out a MERN (MongoDB, Express, React, Redux, NodeJS) stack Spotify party playlist web app I created in a team of 4 here!</p>
            {props.isFlipped ? <img src={whiteDemocrifyLogo} style={{width: '80%'}}></img> : <img src={democrifyLogo} style={{width: '80%'}}></img>}
        </div>
    </a>    
    );
}

export default Democrify;