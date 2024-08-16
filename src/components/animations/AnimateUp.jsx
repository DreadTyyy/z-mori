import { easeInOut, motion } from 'framer-motion';
import PropTypes from 'prop-types';

const animate = {
  offscreen: {
    transform: 'translateY(100%)',
  },
  onscreen: {
    transform: 'translateY(0%)',
  },
}

// eslint-disable-next-line react/prop-types
const AnimateUp = ({ children, delay, duration }) => {
  return (
    <div style={{ position: 'relative', height: '100%', overflow: 'hidden' }}>
        <motion.div
          initial="offscreen"
          animate="onscreen"
          whileInView="onscreen"
          variants={animate}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: duration || 1, delay: delay + 0.5 || 0.5, ease: easeInOut }}
        > 
            {children}
        </motion.div>
    </div>
  )
}

export default AnimateUp;

AnimateUp.propTypes = {
  delay: PropTypes.number,
  duration: PropTypes.number,
}