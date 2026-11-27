import { easeOut, motion } from "framer-motion";

const animate = {
  offscreen: {
    transform: "translateY(100%)",
  },
  onscreen: {
    transform: "translateY(0%)",
  },
}

const AnimateUp = ({ 
  children, 
  delay = 0, 
  duration = 1
}: {
  children: React.ReactNode,
  delay?: number;
  duration?: number;
}) => {
  return (
    <div style={{ position: "relative", height: "100%", overflow: "hidden" }}>
        <motion.div
          initial="offscreen"
          animate="onscreen"
          whileInView="onscreen"
          variants={animate}
          viewport={{ once: true, amount: "some" }}
          transition={{ duration: duration, delay: delay + 0.5, ease: easeOut }}
        > 
            {children}
        </motion.div>
    </div>
  )
}

export default AnimateUp;
