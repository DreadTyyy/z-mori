import { Box, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import PageTransition from "./PageTransition";
import StairsTransition from "./StairsTransition";

// eslint-disable-next-line react/prop-types
const InitialLoad = ({ children }) => {
  const [initial, setInitial] = useState(false);

  useEffect(() => {
    const data = sessionStorage.getItem("initial");
    if (data === "1") {
      setInitial(false);
    } else {
      setInitial(true);
    }
  }, []);

  useEffect(() => {
    if (initial) {
      const timer = setTimeout(() => {
        sessionStorage.setItem("initial", "1");
        setInitial(false);
      }, 4000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [initial]);

  if (!initial) {
    return (
      <>
        <StairsTransition />
        <PageTransition>{children}</PageTransition>
      </>
    );
  } else {
    return (
      <Flex
        zIndex="99999"
        h="100vh"
        justifyContent="center"
        alignItems="center"
        bgColor="#191426"
        p="0"
        m="0">
        <Box w="fit" h="70px" overflow="hidden">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 80 }}
            transition={{
              ease: "easeIn",
              delay: 3,
              duration: 0.3,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 2,
            }}>
            <Box display="flex" alignItems="center" color="#F1F1F1">
              <Text fontSize={{ base: "48px" }} fontWeight={700}>
                Mor
              </Text>
              <Text
                fontSize={{ base: "48px" }}
                fontWeight={700}
                color="#CAFF30">
                <i>i</i>
              </Text>
              <Text
                fontSize={{ base: "56px" }}
                ml={1}
                fontWeight={700}
                color="#CAFF30">
                /&gt;
              </Text>
            </Box>
          </motion.div>
        </Box>
      </Flex>
    );
  }
};

export default InitialLoad;
