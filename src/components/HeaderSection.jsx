import { motion } from "framer-motion";
import "../assets/main.css";

export default function HeaderSection() {
  return (
    <header>
      <div className="header-title-container">
        <motion.div
          className="header-title"
          animate={{
            x: [600, -1050], // initial state, final state
            rotate: 0,
            scale: 1,
          }}
          transition={{
            duration: 7,
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
            duration: 7,
            delay: 3.5,
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
      </div>
    </header>
  );
}
