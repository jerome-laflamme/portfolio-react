import React, { useEffect } from "react";
import CloseIcon from "./CloseIconComponent";

const ContentComponent = ({ toggleCloseContent, pageContent }) => {
  useEffect(() => {
    if (pageContent.images) {
      console.log(pageContent.images);
    }
  }, [pageContent]);

  return (
    <div>
      <CloseIcon toggleCloseContent={toggleCloseContent} />
      {pageContent.title === "About" ? (
        <div className="about-container">
          <div className="about-content">
            <div className="left">
              <img src={pageContent.photo} alt="me" className="me" />
            </div>
            <div className="right">
              <p className="about-title">{pageContent.title}</p>
              <p className="about-text">{pageContent.text[0]}</p>
              <p className="about-text">{pageContent.text[1]}</p>
              {/* <div className="contact-section">
                {pageContent.contact.map((info, index) => (
                  <div className="inline" key={index}>
                    <p className="contact-text">{info.icon}</p>
                    <p className="contact-title">{info.text}</p>
                  </div>
                ))}
              </div> */}
            </div>
          </div>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default ContentComponent;
