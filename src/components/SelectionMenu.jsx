import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import AnimatedIcon from "./AnimatedIcon";
import Name from "./Name";

const SelectionMenu = ({
  showSelection,
  selectionFontSize,
  nameFontSize,
  selectionMenuToggle,
}) => {
  const selectionOptions = ["Photo", "Drawing", "About"];

  useEffect(() => {
    console.log(showSelection);
  }, [showSelection]);

  return (
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
              >
                {option}
              </motion.p>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
  );
};

export default SelectionMenu;
