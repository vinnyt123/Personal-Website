import React from 'react';
import { Button } from '@material-ui/core';
import './project.css'
import ReactPlayer from 'react-player';
import useWindowDimensions from '../../index.js'
import ImageCarousel from '../imageCarousel/imageCarousel'

function Project({backgroundCSSClass, logo, description, buttons, videoURL, images, autoplay, logoText, isFlipped}) {
    const { windowWidth } = useWindowDimensions();
    const logoWidth = windowWidth < 850 ? '100%' : '70%';
    const playerWidth = windowWidth < 850 ? '100%' : '50%';
    const bottomMargin = windowWidth < 850 ? '20px' : '40px';
    let buttonsMargin = windowWidth < 850 || (buttons && buttons.length > 3) ? '0%' : '25%';

    return (
        <div className={backgroundCSSClass}>
            <div style={{textAlign:'center', width: '90%', paddingTop: '20px', paddingBottom: '20px', color: 'var(--color)', paddingLeft:'5%', paddingRight:'5%'}}>
                {logo && <img alt="project logo" src={isFlipped ? logo.light : logo.dark} style={{width: logoWidth}}/>}

                {logoText && <h3 className={"projectHeader"}>{logoText}</h3>}

                <div style={{fontWeight: 'bolder', marginBottom: "20px"}}>
                    {description.map(
                        (line) => {
                            return <p>{line}</p>
                        }
                    )}
                </div>

                <div className={"buttonsWrapper"} style={{"marginLeft": buttonsMargin, "marginRight": buttonsMargin}}>
                    {buttons && buttons.map(
                        (button) => {
                            return <Button variant="contained" className={`tryDemocrify ${button.cssClass}`} onClick={() => window.open(button.link, '_blank')}>{button.text}</Button>
                        }
                    )}
                </div>

                {videoURL &&
                <div style={{width: playerWidth, position: 'relative', margin: 0, display:'inline-block', marginBottom:bottomMargin}}>
                    <div className="aspectRatioWrapper" style={{paddingTop: '56.25%', height: 0}}>
                        <ReactPlayer style={{position: 'absolute', top: 0}} width='100%' height='100%' muted playing={autoplay} controls={true} url={videoURL}/>
                    </ div>
                </div>}

                {images &&
                <div className={"galleryWrapper"} style={{"width": playerWidth}}>
                    <ImageCarousel images={images}/>
                </div>}
            </div>    
        </div>
    );
}

export default Project;