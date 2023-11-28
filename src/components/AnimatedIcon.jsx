import { motion } from 'framer-motion';

const AnimatedIcon = ({ IconComponent, onClick, color }) => {

    const margin = IconComponent.type.render.displayName !== 'KeyboardArrowUpIcon' ? "3%" : "50%";
    const bottom = IconComponent.type.render.displayName !== 'KeyboardArrowUpIcon' ? "0" : "0";
   return (
       <motion.p
           style={{
               position: "absolute",
               bottom: bottom,
               left: "50%",
               marginBottom: margin,
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

export default AnimatedIcon;
