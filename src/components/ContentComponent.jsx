import Gallery from "./contentTypes/Gallery";
import About from "./contentTypes/About";
import Films from "./contentTypes/Films";
import FrontEnd from "./contentTypes/WebDesign";
import CloseIcon from "./CloseIconComponent";

const ContentComponent = ({ toggleCloseContent, pageContent }) => {
  console.log(pageContent);
  return (
    <div>
      <CloseIcon toggleCloseContent={toggleCloseContent} />
      
      {pageContent.title === 'Web Design' ? (
        <FrontEnd pageContent={pageContent} />
      ) : pageContent.title === "film" ? (
        <Films pageContent={pageContent} />
      ) : pageContent.title === "About" ? (
        <About pageContent={pageContent} />
      ) : (
        <Gallery pageContent={pageContent} />
      )}
    </div>
  );
};

export default ContentComponent;
