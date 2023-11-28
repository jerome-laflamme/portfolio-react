import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CloseIcon from "./CloseIconComponent";

const ContentComponent = ({ toggleCloseContent, pageContent }) => {
  useEffect(() => {
    console.log(pageContent);
  }, [pageContent]);

  return (
    <div>
      <CloseIcon toggleCloseContent={toggleCloseContent} />

      <h3>{pageContent.title}</h3>
    </div>
  );
};

export default ContentComponent;
