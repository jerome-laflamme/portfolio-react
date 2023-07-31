import { motion } from "framer-motion";
import "../assets/main.css";
import { useEffect, useState } from "react";
import PlayMe from "../assets/img/play-me.png";


export default function HeaderSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollY(window.scrollY);
    });
  }, []);

  return (
    <header>
      <div className="play-btn">
          <motion.button
            className="play-btn"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "300px",
              height: "300px",
              transform: "rotate(0deg)",
              transformOrigin: "center",
            }}
            animate={{
              translateX: scrollY * 0.5,
            }}
          >
            <motion.img
              src={PlayMe}
              alt="play"
              style={{
                width: "100%",
                height: "100%",
              }}
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
            />
          </motion.button>
      </div>
      <div className="main-animation-text">
        {/* HIDDEN ON TOP */}
        <motion.h1
          animate={{
            y: scrollY * 0.5,
          }}
          id="top-decal"
        >
          Port
        </motion.h1>
        <motion.h1
          animate={{
            y: scrollY * 0.4,
          }}
          id="bottom-decal">
          folio
        </motion.h1>
        {/* VIEWED IN WINDOW */}
        <motion.h1
          animate={{
            y: scrollY * 0.5
          }}
          id="top">
          Port
        </motion.h1>
        <motion.h1
          animate={{
            y: scrollY * 0.5,
          }}
          id="bottom">
          folio
        </motion.h1>
        <motion.h1
          animate={{
            y: scrollY * 0.3,
          }}
          id="top"
        >
          Port
        </motion.h1>
        <motion.h1
          animate={{
            y: scrollY * 0.3,
          }}
          id="bottom">
          folio
        </motion.h1>
      </div>
    </header>
  );
}
