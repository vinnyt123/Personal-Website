import React from 'react';
import useWindowDimensions from '../../index.js'


//Includes
import './contact.css';
import MdMail from 'react-ionicons/lib/MdMail'
import LogoGithub from 'react-ionicons/lib/LogoGithub'
import LogoLinkedin from 'react-ionicons/lib/LogoLinkedin'
import IosDocument from 'react-ionicons/lib/IosDocument'
import CVpdf from './Vinny Tunnell CV Maxtel.pdf'

function Contact() {
    const { windowHeight, windowWidth } = useWindowDimensions();

    if (windowWidth > 680) {
        return (
            <div className="contactWrapper">
                <p className="italicsBoi">Reach out to get more info, talk business, or just chat.</p>

                <div style={{marginTop: 15}}className="iconsWrapper">
                    <div className="textAndIcon">
                        <p>Download my CV</p>
                    </div>
                    <div className="textAndIcon">
                        <p>View my projects</p>
                    </div>
                    <div className="textAndIcon">
                        <p>Send me an email</p>
                    </div>  
                    <div className="textAndIcon">
                        <p>Connect on LinkedIn</p>
                    </div>
                </div>

                <div className="iconsWrapper" style={{marginBottom: 15}}>
                    <a href={CVpdf} target="_blank">
                        <div className="textAndIcon">
                            <IosDocument fontSize="120px" color="rgba(14,85,183,1)" />
                        </div>
                    </a>
                    <a href="https://github.com/vinnyt123" target="_blank">
                        <div className="textAndIcon">
                            <LogoGithub fontSize="120px" color="rgba(14,85,183,1)"/>
                        </div>
                    </a>
                    <a href="mailto:vinny.tunnell@gmail.com">
                        <div className="textAndIcon">
                            <MdMail fontSize="120px" color="rgba(14,85,183,1)"/>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/vincent-tunnell-14aa34162/" target="_blank">
                        <div className="textAndIcon">
                            <LogoLinkedin fontSize="120px" color="rgba(14,85,183,1)" />
                        </div>   
                    </a> 
                </div>
            </div>
            
        );
    } else {
        return (
            <div className="contactWrapper">
                <p className="italicsBoi">Reach out to get more info, talk business, or just chat.</p>

                <div style={{marginTop: 15}}className="iconsWrapper">
                    <div className="textAndIcon">
                        <p>Download my CV</p>
                    </div>
                    <div className="textAndIcon">
                        <p>View my projects</p>
                    </div>
                </div>

                <div className="iconsWrapper">
                    <a href="https://github.com/vinnyt123" target="_blank">
                        <div className="textAndIcon">
                            <IosDocument fontSize="120px" color="rgba(14,85,183,1)" />
                        </div>
                    </a>
                    <a href="https://github.com/vinnyt123" target="_blank">
                        <div className="textAndIcon">
                            <LogoGithub fontSize="120px" color="rgba(14,85,183,1)"/>
                        </div>
                    </a>
                </div>

                <div className="iconsWrapper" style={{marginTop: 15}}>
                    <div className="textAndIcon">
                            <p>Send me an email</p>
                        </div>  
                    <div className="textAndIcon">
                        <p>Connect on LinkedIn</p>
                    </div>
                </div>
                
                <div className="iconsWrapper" style={{marginBottom: 15}}>
                    <a href="mailto:vinny.tunnell@gmail.com">
                        <div className="textAndIcon">
                            <MdMail fontSize="120px" color="rgba(14,85,183,1)"/>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/vincent-tunnell-14aa34162/" target="_blank">
                        <div className="textAndIcon">
                            <LogoLinkedin fontSize="120px" color="rgba(14,85,183,1)" />
                        </div>   
                    </a>
                </div>
            </div>
            
        );
    }
}

export default Contact;
