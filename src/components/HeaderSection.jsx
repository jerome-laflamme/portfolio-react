// import { motion } from "framer-motion";
import "../assets/main.css";
// import { useEffect, useState } from "react";
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

  return (
    <header>
      <div className="main-text">
        <h1>Port</h1>
        <h1>folio</h1>
      </div>
      {/* <div className="header-title-container">
        {animatedText ? (
          <>
            <motion.div
              className="header-title"
              animate={{
                x: [600, -1050], // initial state, final state
                rotate: 0,
                scale: 1,
              }}
              transition={{
                duration: 9,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              <h1>JEROME</h1>
              <h1>LAFLAMME</h1>
              <div>
                <svg width="15" height="15" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="50" fill="var(--grey)" />
                </svg>
              </div>
              <h1>portfolio</h1>
            </motion.div>
            <motion.div
              className="header-title-duplicate"
              animate={{
                x: [600, -1050], // initial state, final state
                rotate: 0,
                scale: 1,
              }}
              transition={{
                duration: 9,
                delay: 4.5,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              <h1>JEROME</h1>
              <h1>LAFLAMME</h1>
              <div>
                <svg width="15" height="15" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="50" fill="var(--grey)" />
                </svg>
              </div>
              <h1>portfolio</h1>
            </motion.div>
          </>
        ) : (
          <>
            <div className="stacked">
              <div className="header-title-name">
                <h1>JEROME</h1>
                <h1>LAFLAMME</h1>
              </div>
              <h1>portfolio</h1>
            </div>

          </>
        )}

      </div>
      {showAnmiationToggle && (
        <div className="toggleAnimation-btn-container">
          <button className="toggleAnimation-btn" onClick={toggleAnimation}>Animation</button>
          {animatedText ? <StopCircleIcon fontSize="small" /> : <PlayCircleIcon fontSize="small" />}
        </div>)} */}

    </header>
  );
}
