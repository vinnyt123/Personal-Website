import democrifyLogo from '././selectext-logo-cropped.png';
import React from 'react';
import { Button } from '@material-ui/core';
import './democrify.css'
import ReactPlayer from 'react-player';
import useWindowDimensions from '../../index.js'

function Democrify({description, buttons, videoURL, imagePaths}) {
    const { windowWidth } = useWindowDimensions();
    const logoWidth = windowWidth < 850 ? '100%' : '70%';
    const playerWidth = windowWidth < 850 ? '100%' : '50%';
    const bottomMargin = windowWidth < 850 ? '20px' : '40px';
    return (
        <div className={"selectextWrapper"}>
            <div style={{textAlign:'center', width: '90%', paddingTop: '20px', paddingBottom: '20px', color: 'var(--color)', paddingLeft:'5%', paddingRight:'5%'}}>
                <img src={democrifyLogo} style={{width: logoWidth}} />
                <p style={{fontWeight: 'bolder', marginBottom: "20px"}}>
                    Chrome/Firefox extension for copying text directly from Youtube videos and UoA lecture recordings. <br />
                    Written in Javascript/JQuery, HTML, CSS. Google Cloud Vision API for text detection. <br /><br />
                    1500+ users on the chrome web store</p>
                <div className={"buttonsWrapper"}>
                    <Button variant="contained" className="tryDemocrify" onClick={() => window.open("https://chrome.google.com/webstore/detail/selectext-copy-text-from/gkkdmjjodidppndkbkhhknakbeflbomf?hl=en", '_blank')}>Get it on Chrome</Button>
                    <Button variant="contained" className="tryDemocrify" onClick={() => window.open("https://addons.mozilla.org/en-US/firefox/addon/selectext", '_blank')}>Get it on Firefox</Button>
                    <Button variant="contained" className="tryDemocrify red" onClick={() => window.open("https://www.reddit.com/r/learnprogramming/comments/m5z3qu/i_made_a_chrome_extension_that_lets_you_copy_text/", '_blank')}>View Q&A on Reddit</Button>
                    <Button variant="contained" className="tryDemocrify red" onClick={() => window.open("https://www.reddit.com/r/ProgrammerHumor/comments/m63zgs/massive_respect_to_this_guy/", '_blank')}>View meme on Reddit</Button>
                </div>
                <div style={{width: playerWidth, position: 'relative', margin: 0, display:'inline-block', marginBottom:bottomMargin}}>
                    <div className="aspectRatioWrapper" style={{paddingTop: '56.25%', height: 0}}>
                        <ReactPlayer style={{position: 'absolute', top: 0}} width='100%' height='100%' muted autoPlay playing={true} controls={true} url="https://youtu.be/82kCYa43KYc"/>
                    </ div>
                </div>
            </div>    
        </div>
    );
}

export default Democrify;