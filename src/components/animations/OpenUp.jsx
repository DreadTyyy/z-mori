import { easeIn, motion } from 'framer-motion';

const animate = {
    offscreen: {
      height: '0px',
    },
    onscreen: {
      height: ['2px', 'fit-content'],
    },
  }

// eslint-disable-next-line react/prop-types
const OpenUp = ({ children }) => {
  return (
    <div style={{ position: 'relative', height: 'fit-content', minHeight: '400px' }}>
      <motion.div
        style={{ overflow: 'hidden' }}
        initial="offscreen"
        // animate="onscreen"
        whileInView="onscreen"
        variants={animate}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ 
          duration: 1, 
          times: [0, 1], 
          delay: 0.5, 
          ease: easeIn 
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default OpenUp;