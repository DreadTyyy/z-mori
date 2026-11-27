import { AnimatePresence, motion } from "framer-motion";
import Stairs from "./Stairs";
import { useLocation } from "react-router";

const StairsTransition = () => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        style={{
          zIndex: "999999",
          pointerEvents: "none",
          width: "100vw",
          height: "100vh",
          position: "fixed",
          top: "0",
          right: "0",
          bottom: "0",
          left: "0",
        }}>
        <Stairs />
      </motion.div>
    </AnimatePresence>
  );
};

export default StairsTransition;
