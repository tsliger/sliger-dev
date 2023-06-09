import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const squareVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1.2, delay: 0.5 } },
  hidden: { opacity: 0, transition: { duration: 0.25 }}
};

export function Box({children, className="", id=undefined}) {
  const controls = useAnimation();
  const ref = useRef(null)
  const isInView = useInView(ref)
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } 
  }, [controls, isInView]);

  return <motion.div id={id} animate={controls} initial="hidden" variants={squareVariants} ref={ref} className={className} >
    {children}
  </motion.div>;
}
