import React, { useEffect } from "react";
import CloseIcon from "./CloseIconComponent";

const ContentComponent = ({ toggleCloseContent, pageContent }) => {
  useEffect(() => {
    console.log(pageContent);
  }, [pageContent]);

  return (
    <div>
      <CloseIcon toggleCloseContent={toggleCloseContent} />
      {pageContent.title === "About" ? (
        <div className="about-container">
          <div className="about-content">
            <img src={pageContent.photo} alt="me" className="me"/>
            <p className="about-title">{pageContent.title}</p>
            <p className="about-text">{pageContent.text[0]}</p>
            <p className="about-text">{pageContent.text[1]}</p>
          </div>
        </div>
      ) : (
        <div className="image-container">
          <div className="content">
            <p className="content-title">{pageContent.title}</p>
            <div className="content-images">
              {pageContent.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={"content-image" + index}
                  className="content-image"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentComponent;
