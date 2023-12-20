import React, {useState} from 'react';

const Gallery = ({pageContent}) => {

    const [isEnlarged, setIsEnlarged] = useState(false);
    const [enlargedImage, setEnlargedImage] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const enlargeImage = (e) => {
      setIsEnlarged(e.target.src);
      setEnlargedImage(e.target.src);
      setCurrentIndex(e.target.parentNode.getAttribute("index"));
    };
  
    const closeEnlargeImage = () => {
      setIsEnlarged(false);
    };
  
    const goToPreviousImage = () => {
      if (currentIndex === 0) {
        setEnlargedImage(pageContent.images[pageContent.images.length - 1]);
        setCurrentIndex(pageContent.images.length - 1);
      } else {
        setEnlargedImage(pageContent.images[currentIndex - 1]);
        setCurrentIndex(currentIndex - 1);
      }
    }
  
    const goToNextImage = () => {
      if (currentIndex === pageContent.images.length - 1) {
        setEnlargedImage(pageContent.images[0]);
        setCurrentIndex(0);
      } else {
        setEnlargedImage(pageContent.images[currentIndex + 1]);
        setCurrentIndex(currentIndex + 1);
      }
    }

    
    return (
        <div className="gallery">
          <p className="gallery-title">{pageContent.title}</p>
          <div className="image-wrapper">
            {pageContent.images.map((image, index) => (
              <div
                className="image-container"
                key={index}
                onClick={enlargeImage}
              >
                <img src={image} alt={"image" + index} className="image" />
              </div>
            ))}
            {isEnlarged && (
              <>
                <button className="arrow-left" onClick={goToPreviousImage}>
                  &lt;
                </button>
                <div className="image-enlarged" onClick={closeEnlargeImage}>
                  <img src={enlargedImage} alt="enlarged" />
                  <p className="instruction">click the image to close it</p>
                </div>
                <button className="arrow-right" onClick={goToNextImage}>
                  &gt;
                </button>
              </>
            )}
          </div>
        </div>
    );
};

export default Gallery;
