import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollBar () {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return <motion.div className="fixed left-0 top-0 bg-[#FF6000] z-[500]  h-1 w-full origin-left" style={{ scaleX }} />
}