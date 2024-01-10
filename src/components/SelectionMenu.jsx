import React, {  useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import ContentData from "../data/ContentData";

import Name from "./Name";
import ContentComponent from "./ContentComponent";

const SelectionMenu = ({ showSelection, selectionFontSize, nameFontSize }) => {
  const selectionOptions = ["Photo", "Drawing", "film", "About"];

  const [showContent, setShowContent] = useState(false);
  const [pageContent, setPageContent] = useState({});

  const showMagic = (e) => {
    switch (e.target.innerText) {
      case "PHOTO":
        setPageContent(ContentData.photoContent);
        setShowContent(true);
        break;
      case "DRAWING":
        setPageContent(ContentData.drawingCOntent);
        setShowContent(true);
        break;
      case "FILM":
        setPageContent(ContentData.videoContent);
        setShowContent(true);
        break;
      case "ABOUT":
        setPageContent(ContentData.aboutContent);
        setShowContent(true);
        break;
      default:
        setPageContent({});
        setShowContent(false);
        break;
    }
  };

  const toggleCloseContent = () => setShowContent(false);

  return (
    <>
      <AnimatePresence>
        {showSelection && (
          <motion.div
            className="selection-container"
            initial={{ y: showSelection ? "0" : "-100vh" }}
            animate={{ y: showSelection ? "-100vh" : "0" }}
            exit={{ y: showSelection ? "0" : "-100vh" }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <Name nameFontSize={nameFontSize} nameColor={"white"} />
            <div className="menu">
              {selectionOptions.map((option, index) => (
                <motion.p
                  key={index}
                  style={{
                    fontSize: selectionFontSize,
                    fontWeight: 100,
                    marginLeft: "10%",
                    width: "min-content",
                  }}
                  onClick={showMagic}
                >
                  {option}
                </motion.p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showContent && (
          <motion.div
            className="content-container"
            initial={{ y: "100vh" }}
            animate={{ y: "5vh" }}
            exit={{ y: "100vh" }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <ContentComponent
              toggleCloseContent={toggleCloseContent}
              pageContent={pageContent}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SelectionMenu;
