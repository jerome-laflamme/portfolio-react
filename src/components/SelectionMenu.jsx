import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import AnimatedIcon from "./AnimatedIcon";
import Name from "./Name";
import GalleryComponent from "./GalleryComponent";
import AboutInfo from "./AboutInfo";

const SelectionMenu = ({
  showSelection,
  selectionFontSize,
  nameFontSize,
  selectionMenuToggle,
}) => {
  const selectionOptions = ["Photo", "Drawing", "About"];

  const [showGallery, setShowGallery] = useState(false);
  const [galleryContent, setGalleryContent] = useState([]); // [images, videos, gifs
  const [showAbout, setShowAbout] = useState(false);

  const showMagic = (e) => {
    switch (e.target.innerText) {
      case "PHOTO":
        setGalleryContent("PHOTO");
        setShowGallery(true);
        break;
      case "DRAWING":
        setGalleryContent("DRAWING");
        setShowGallery(true);
        break;
      case "ABOUT":
        setShowAbout(true);
        break;
      default:
        break;
    }
  };

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
          <AnimatedIcon
            IconComponent={KeyboardArrowUpIcon}
            onClick={selectionMenuToggle}
            color={"white"}
          />

          {selectionOptions.map((option, index) => (
            <motion.p
              key={index}
              style={{
                fontSize: selectionFontSize,
                fontWeight: 100,
                cursor: "pointer",
                padding: "0.5rem",
                marginLeft: "10%",
                width: "min-content",
                letterSpacing: "0.3em",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={showMagic}
            >
              {option}
            </motion.p>
          ))}
        </motion.div>
      )}
      
    </AnimatePresence>
    <AnimatePresence>
        {showGallery && (
            <motion.div
            className="gallery-container"
            initial={{ y: showGallery ? "100vh" : "0" }}
            animate={{ y: showGallery ? "0" : "100vh" }}
            exit={{ y: showGallery ? "100vh" : "0" }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            >
            <GalleryComponent
                galleryContent={galleryContent}
                setShowGallery={setShowGallery}
            />
            </motion.div>
        )}
        </AnimatePresence>
        <AnimatePresence>
        {showAbout && (
            <motion.div
            className="about-container"
            initial={{ y: showAbout ? "100vh" : "0" }}
            animate={{ y: showAbout ? "0" : "100vh" }}
            exit={{ y: showAbout ? "100vh" : "0" }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            >
            <AboutInfo />
            </motion.div>
        )}
        </AnimatePresence>
    </>
  );
};

export default SelectionMenu;
