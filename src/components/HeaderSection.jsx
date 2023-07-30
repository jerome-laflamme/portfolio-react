import { motion } from "framer-motion";
import "../assets/main.css";
import { useEffect, useState } from "react";
// import StopCircleIcon from '@mui/icons-material/StopCircle';
// import PlayCircleIcon from '@mui/icons-material/PlayCircle';


export default function HeaderSection() {
  // const [animatedText, setAnimatedText] = useState(true);
  // const toggleAnimation = () => {
  //   setAnimatedText(!animatedText);
  // };

  // const [showAnmiationToggle, setShowAnimationToggle] = useState(false);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const isScrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - window.innerHeight;
  //     setShowAnimationToggle(isScrolledToBottom);
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <div className="main-text">
        {/* HIDDEN ON TOP */}
        <motion.h1
          animate={{
            y: scrollY * 0.5
          }}
          id="top-decal">
          Port
        </motion.h1>
        <motion.h1
          animate={{
            y: scrollY * 0.8,
          }}
          id="bottom-decal">
          folio
        </motion.h1>
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
