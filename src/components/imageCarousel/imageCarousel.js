import { Gallery, GalleryImage } from "react-gesture-gallery";
import React, { useEffect } from 'react'

//Includes
import './imageCarousel.css';

function ImageCarousel({images}) {

  const [index, setIndex] = React.useState(0);

  // Auto change image every 7 seconds
  useEffect(() => {
    const interval = setInterval(nextImage,7000);
    return () => clearInterval(interval)
  })

  function nextImage() {
    setIndex((index + 1) % images.length);
  }

  return (
    
    <div>
      <Gallery className='projectsGallery'
        onRequestChange={i => {   
          setIndex(i);
      }}
        index={index}
      >
        {images.map(image => (
            <GalleryImage objectFit="contain" key={image} src={image} />
        ))}
      </Gallery>
    </div>
  );
}


export default ImageCarousel;
