import selectextLogo from './assets/images/selectext-logo-cropped.png'
import democrifyLogoDark from './assets/images/democrify.svg'
import democrifyLogoLight from './assets/images/democrify_white.svg'
import namesayer1 from './assets/images/namesayer1.png'
import namesayer2 from './assets/images/namesayer2.png'
import namesayer3 from './assets/images/namesayer3.png'

export default function getProjectsContent() {
    return [selectext(), democrify(), VRArtTherapy(), nameSayer()]
}

function selectext() {
    const description = [
        "Chrome/Firefox extension for copying text directly from Youtube videos and UoA lecture recordings",
        "Written in Javascript/JQuery, HTML, CSS. Google Cloud Vision API for text detection",
        "1500+ users on the chrome web store"
    ]

    const buttons = [
        {
            "text": "Get it on Chrome",
            "link": "https://chrome.google.com/webstore/detail/selectext-copy-text-from/gkkdmjjodidppndkbkhhknakbeflbomf?hl=en",
            "cssClass": "selectextGreen"
        },
        {
            "text": "Get it on Firefox",
            "link": "https://addons.mozilla.org/en-US/firefox/addon/selectext",
            "cssClass": "selectextGreen"
        },
        {
            "text": "View code on GitFront",
            "link": "https://gitfront.io/r/user-1609342/e8cf63274b5dfe7d2c862f892d508dcccc9b5f23/selectext/",
            "cssClass": "githubBlack"
        },
        {
            "text": "View Q&A on Reddit",
            "link": "https://www.reddit.com/r/learnprogramming/comments/m5z3qu/i_made_a_chrome_extension_that_lets_you_copy_text/",
            "cssClass": "redditRed"
        },
        {
            "text": "View meme on Reddit",
            "link": "https://www.reddit.com/r/ProgrammerHumor/comments/m63zgs/massive_respect_to_this_guy/",
            "cssClass": "redditRed"
        }
    ]

    const videoURL = "https://youtu.be/82kCYa43KYc"

    const logo = selectextLogo

    const backgroundCSSClass = "selectextWrapper"

    return {
        description: description,
        buttons: buttons,
        videoURL: videoURL,
        logo: {
            light: logo,
            dark: logo
        },
        backgroundCSSClass: backgroundCSSClass,
        autoplay: true
    }
}

function VRArtTherapy() {
    const description = [
        "Virtual reality painting tool for use in dementia therapy",
        "Paint animals with an HTC Vive controller as a paintbrush",
        "Literature review, implementation in Unity with C#, and research report for final year engineering project"
    ]

    const videoURL = "https://youtu.be/73gQYYsp4mI"

    const backgroundCSSClass = "VRArtTherapyWrapper"

    const logoText = "VR Art Therapy"

    return {
        description: description,
        videoURL: videoURL,
        backgroundCSSClass: backgroundCSSClass,
        logoText: logoText
    }

}

function democrify() {
    const description = [
        "Party playlist web app built using a MERN stack (MongoDB, Express, React, Redux, NodeJS), and the Spotify Web API",
        "Share a 4 digit code with friends that lets them access the playlist and add songs",
        "Hosted using MongoDB Atlas and Heroku"
    ]

    const videoURL = "https://youtu.be/01gNYk85Wt8";

    const logoLight = democrifyLogoLight;
    const logoDark = democrifyLogoDark;

    const buttons =
        [{
            "text": "Try it in the browser",
            "link": "https://democrify-party.herokuapp.com/",
            "cssClass": "democrifyPurple"
        },
        {
            "text": "View code on Github",
            "link": "https://github.com/vinnyt123/Democrify",
            "cssClass": "githubBlack"
        }]

    const backgroundCSSClass = "democrifyWrapper";


    return {
        description: description,
        videoURL: videoURL,
        logo: {
            light: logoLight,
            dark: logoDark
        },
        buttons: buttons,
        backgroundCSSClass: backgroundCSSClass
    }
}

function nameSayer() {
    const description = [
        "JavaFX application used to practice pronunciation of unfamiliar names",
        "The application loads in audio files of people saying the names, then cleans up the audio using ffmpeg commands called via the bash shell for linux",
        "Features include the ability to combine multiple names into a single name, the creation of playlists and a theme store"
    ]

    const images = [
        namesayer1,
        namesayer2,
        namesayer3
    ];

    const buttons =
        [{
            "text": "View code on Github",
            "link": "https://github.com/andrewh318/namesayer",
            "cssClass": "githubBlack"
        }]

    const backgroundCSSClass = "namesayerWrapper";

    const logoText = "NameSayer"

    return {
        description: description,
        buttons: buttons,
        backgroundCSSClass: backgroundCSSClass,
        images: images,
        logoText: logoText
    }
}