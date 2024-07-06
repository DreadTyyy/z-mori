import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react"; // Assuming you are using Chakra UI for layout

const stairsAnimation = {
  initial: {
    x: "-100%",
  },
  animate: {
    x: ["-100%", "0%", "0%", "100%"],
  },
};

const reverseIndex = (index) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      position="relative"
      height="100vh"
      width="100vw">
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          variants={stairsAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 1.4,
            times: [0, 0.4, 0.7, 1],
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1,
          }}
          style={{
            height: "20%",
            width: `100%`,
            background: "#CAFF30",
            position: "absolute", // Changed from relative to absolute for proper animation
            bottom: `${index * 20}%`, // Adjust position for each stair
          }}
        />
      ))}
    </Box>
  );
};

export default Stairs;
