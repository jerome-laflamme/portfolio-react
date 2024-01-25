import Gallery from "./contentTypes/Gallery";
import About from "./contentTypes/About";
import CloseIcon from "./CloseIconComponent";

const ContentComponent = ({ toggleCloseContent, pageContent }) => {
  console.log(pageContent);
  return (
    <div>
      <CloseIcon toggleCloseContent={toggleCloseContent} />
      
      { pageContent.title === "About" ? (
        <About pageContent={pageContent} />
      ) :  (
        <Gallery pageContent={pageContent} />
      )}
    </div>
  );
};

export default ContentComponent;
