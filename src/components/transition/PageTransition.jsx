import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

// eslint-disable-next-line react/prop-types
const PageTransition = ({ children }) => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const location = useLocation();
  // eslint-disable-next-line no-unused-vars
  const { hash, pathname } = location;

  useEffect(() => {
    setAnimationComplete(false);
    setShowContent(false);

    const timer = setTimeout(() => {
      setShowContent(true);
    }, 200);

    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    if (animationComplete && hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [animationComplete, hash]);
  return (
    <AnimatePresence>
      {!animationComplete && (
        <motion.div
          key={pathname}
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
          onAnimationComplete={() => setAnimationComplete(true)}
          style={{
            zIndex: "99999",
            width: "100vw",
            height: "100vh",
            position: "fixed",
            top: "0",
            left: "0",
            background: "#191426",
          }}
        />
      )}
      {showContent && children}
    </AnimatePresence>
  );
};

export default PageTransition;
