//DREAMSCAPES
import Dreamscapes1 from './images/Dreamscapes/1.png';
import Dreamscapes2 from './images/Dreamscapes/2.png';
import Dreamscapes3 from './images/Dreamscapes/3.png';
import Dreamscapes6 from './images/Dreamscapes/6.png';
import Dreamscapes7 from './images/Dreamscapes/7.png';

//NameSayer
import NameSayer1 from './images/NameSayer/1.png';
import NameSayer2 from './images/NameSayer/2.png';
import NameSayer3 from './images/NameSayer/3.png';

//Tweeto
import Tweeto1 from './images/Tweeto/1.png';
import Tweeto2 from './images/Tweeto/2.png';
import Tweeto3 from './images/Tweeto/3.png';
import Tweeto4 from './images/Tweeto/4.png';

function imageLoader() {
  
    var dreamscapesImages = [Dreamscapes1, Dreamscapes2, Dreamscapes3, Dreamscapes6, Dreamscapes7];
    var nameSayerImages = [NameSayer1, NameSayer2, NameSayer3];
    var tweetoImages = [Tweeto1, Tweeto2, Tweeto3, Tweeto4];
  
    var tweetoTxt = "Tweeto is a social media application created using the CherryPy web framework for Python3 along with jinja2 for page templating, and PyNacl for encryption of private messages. HTML, CSS, and Javascript/JQuery were also used for creation of the UI and Ajax refreshing. SQLite was used for data management.";
  
    var nameSayerTxt = "Namesayer is a JavaFX application used to practice pronunciation of unfamiliar names. The application loads in audio files of people saying the names, then cleans up the audio using ffmpeg commands called via the bash shell for linux. Features include the ability to combine multiple names into a single name, the creation of playlists and a theme store.";
  
    var dreamscapesTxt = "Dreamscapes is a platformer game developed with JavaFX. CSS was used to style the menus. Open source images and sprite sheets were used to create the maps and characters. Some open source sound effects were also utilized. High scores are serialized into a .ser file and loaded on application start so they are persistent.";
  
    const projects = [
      {
        name: "NameSayer",
        text: nameSayerTxt,
        color: "#157766",
        images: nameSayerImages
      },
      {
        name: "Tweeto",
        text: tweetoTxt,
        color: "rgba(14,85,183,0.85)",
        images: tweetoImages
      },
      {
        name: "Dreamscapes",
        text: dreamscapesTxt,
        color: "#0d1122",
        images: dreamscapesImages
      }
    ]
  
    return projects;
}

export default imageLoader;