import democrifyLogo from './democrify.svg';
import whiteDemocrifyLogo from './democrify_white.svg';
import React from 'react';
import { Button } from '@material-ui/core';
import './democrify.css'
import ReactPlayer from 'react-player';
import useWindowDimensions from '../../index.js'

function Democrify(props) {
    const { windowWidth } = useWindowDimensions();
    const logoWidth = windowWidth < 850 ? '100%' : '70%';
    const playerWidth = windowWidth < 850 ? '100%' : '50%'
    return (
        <div>
            <div style={{textAlign:'center', width: '90%', paddingTop: '20px', paddingBottom: '20px', color: 'var(--color)', paddingLeft:'5%', paddingRight:'5%'}}>
                {props.isFlipped ? <img src={whiteDemocrifyLogo} style={{width: logoWidth}}></img> : <img src={democrifyLogo} style={{width: logoWidth}}></img>}
                <p style={{fontWeight: 'bolder', marginBottom: "20px"}}>A party playlist web app built using a MERN stack (MongoDB, Express, React, Redux, NodeJS) and the Spotify API, that I developed in a team of 4</p>
                <Button variant="contained" className="tryDemocrify" onClick={() => window.open("https://democrify-party.herokuapp.com/", '_blank')}>Try it in the browser!</Button>
                <div style={{fontWeight: 'bold', fontSize: 50, marginBottom: 20}}>OR</div>
                <p style={{fontWeight: 'bold', marginBottom: "10px"}}>Watch a demo video of Democrify</p>
                <div style={{width: playerWidth, position: 'relative', margin: 0, display:'inline-block'}}>
                    <div className="aspectRatioWrapper" style={{paddingTop: '56.25%', height: 0}}>
                        <ReactPlayer style={{position: 'absolute', top: 0}} width='100%' height='100%' url="https://www.youtube.com/watch?v=Pa5Bcv-t9_c"/>
                    </div>
                </div>
            </div>    
        </div>
    );
}

export default Democrify;