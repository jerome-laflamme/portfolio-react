import React from "react";
import { motion } from "framer-motion";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AnimatedArrow from "./AnimatedArrow";
import Name from "./Name";

const Hero = ({ phraseFontSize, selectionMenuToggle, nameFontSize }) => {
  const text = "portfoliopor tfolioportfo lioportfoliop ortfoliopor tfolioportf olioportfolioportfolio";

  return (
    <div className="hero-container">
      <Name nameFontSize={nameFontSize} nameColor={"black"} />
      <motion.div className="phrase">
        {text.split("").map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.3,
              delay: index * 0.07,
              ease: "easeInOut",
            }}
            style={{
              fontWeight: 100,
              fontSize: phraseFontSize,
              letterSpacing: "0.7em",
              textTransform: "lowercase",
            }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
      <AnimatedArrow
        IconComponent={KeyboardArrowDownIcon}
        onClick={selectionMenuToggle}
        color={"black"}
      />
    </div>
  );
};

export default Hero;
