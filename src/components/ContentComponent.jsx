import CloseIcon from "./CloseIconComponent";
import me from "../assets/img/me.jpg";

const ContentComponent = ({ toggleCloseContent, pageContent }) => {
  return (
    <div>
      <CloseIcon toggleCloseContent={toggleCloseContent} />
      {pageContent.title === "About" ? (
        <div className="about-container">
          <div className="about-content">
            <div className="left">
              <div className="me">
                <img alt="me" src={me}/>
              </div>
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
          <div className="image-wrapper">
            {pageContent.images.map((image, index) => (
              <div className="image-container"  key={index}>
                <img
                  src={image}
                  alt={"image" + index}
                  className="image"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentComponent;
