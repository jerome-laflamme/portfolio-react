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
            <p className="about-title">{pageContent.title}</p>
            <p className="about-description">{pageContent.description}</p>
          </div>
        </div>
      ) : (
        <div className="content-container">
          <div className="content">
            <p className="content-title">{pageContent.title}</p>
            <div className="content-images">
              {pageContent.images.map((image, index) => (
                // eslint-disable-next-line jsx-a11y/img-redundant-alt
                <img
                  key={index}
                  src={image}
                  alt="content-image"
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
