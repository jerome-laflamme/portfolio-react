import { motion } from 'framer-motion';

const AnimatedArrow = ({ IconComponent, onClick, color }) => {
   return (
       <motion.p
           style={{
               position: "absolute",
               bottom: 0,
               left: "50%",
               marginBottom: "10px",
               cursor: "pointer",
               zIndex: 1,
               color: color,
           }}
           animate={{
               y: [0, 20, 0],
           }}
           transition={{
               duration: 2,
               repeat: Infinity,
               ease: "easeInOut",
           }}
           onClick={onClick}
       >
           <IconComponent fontSize="large" />
       </motion.p>
   );
};

export default AnimatedArrow;
