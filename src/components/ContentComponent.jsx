import CloseIcon from "./CloseIconComponent";
import me from "../assets/img/me.webp";
import resume from "../assets/files/CV_EN.pdf";

const ContentComponent = ({ toggleCloseContent, pageContent }) => {
  return (
    <div>
      <CloseIcon toggleCloseContent={toggleCloseContent} />
      {pageContent.title === "About" ? (
        <div className="about-container">
          <div className="about-content">
            <div className="left">
              <div className="me">
                <img alt="me" src={me} />
              </div>
              <div className="contact-section">
                {Object.entries(pageContent.contact).map(
                  ([key, value], index) => {
                    return (
                      <div className="inline" key={index}>
                        <img
                          src={value.icon}
                          alt={value.icon}
                          className="contact-icon"
                        ></img>
                        <a href={value.url} className="contact-text">
                          {value.text}
                        </a>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
            <div className="right">
              <p className="about-title">{pageContent.title}</p>
              <p className="about-text">{pageContent.text[0]}</p>
              <p className="about-text">{pageContent.text[1]}</p>
              <div className="resume">
                <a href={resume}>Download my resume</a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="content">
          <p className="content-title">{pageContent.title}</p>
          <div className="image-wrapper">
            {pageContent.images.map((image, index) => (
              <div className="image-container" key={index}>
                <img src={image} alt={"image" + index} className="image" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentComponent;
