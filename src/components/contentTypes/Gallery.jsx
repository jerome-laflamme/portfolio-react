import React, { useState } from "react";
import Spline from '@splinetool/react-spline';

const Gallery = ({ pageContent }) => {
  const [isEnlarged, setIsEnlarged] = useState(false);
  const [enlargedContent, setenlargedContent] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const enlargeContent = (e) => {
    setIsEnlarged(true);
    setenlargedContent(e.target.src);
    setCurrentIndex(parseInt(e.target.alt.substring(5, 7)));
  };

  const closeEnlargeImage = () => {
    setIsEnlarged(false);
  };

  const goToPreviousContent = () => {
    if (currentIndex === 0) {
      setenlargedContent(pageContent.images[pageContent.images.length - 1]);
      setCurrentIndex(pageContent.images.length - 1);
      return;
    }
    setenlargedContent(pageContent.images[currentIndex - 1]);
    setCurrentIndex(currentIndex - 1);
  };

  const goToNextContent = () => {
    if (currentIndex === pageContent.images.length - 1) {
      setenlargedContent(pageContent.images[0]);
      setCurrentIndex(0);
      return;
    }
    setenlargedContent(pageContent.images[currentIndex + 1]);
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="gallery">
      <p className="gallery-title">{pageContent.title}</p>
      <div className="image-wrapper">
        {pageContent.content.map((content, index) => (
          <div className="image-container" key={index} onClick={enlargeContent}>
            {
              pageContent.title === "Web Design" ? (
                <img src={content.thumbnail} alt={"project" + index} className="image" />
              ) : (
                <img src={content} alt={"image" + index} className="image" />
              )
            }
            
          </div>
        ))}
        {isEnlarged && (
          <>
            {pageContent.title === "Web Design" ? (
             <div className="image-enlarged" onClick={closeEnlargeImage}>
             <Spline src={pageContent.content} />
           </div>
            ) : (
              <>
              <button className="arrow-left" onClick={goToPreviousContent}>
                &lt;
              </button>
              <div className="image-enlarged" onClick={closeEnlargeImage}>
                <img src={enlargedContent} alt="enlarged" />
                <p className="instruction">click the image to close it</p>
              </div>
              <button className="arrow-right" onClick={goToNextContent}>
                &gt;
              </button>
              </>
              
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Gallery;
