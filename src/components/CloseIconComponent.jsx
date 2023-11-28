import React from "react";
import { motion } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";

const CloseIconComponent = ({ toggleCloseContent }) => {
  const iconSize = window.innerWidth > 500 ? "large" : "small";
  return (
    <motion.p
      style={{
        position: "absolute",
        top: "5%",
        right: "5%",
        cursor: "pointer",
        zIndex: 1,
      }}
      whileHover={{ rotate: 180, color: "#6ca7ff" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      onClick={toggleCloseContent}
    >
      <CloseIcon fontSize={iconSize} />
    </motion.p>
  );
};

export default CloseIconComponent;
