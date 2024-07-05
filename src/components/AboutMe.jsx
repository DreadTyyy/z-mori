import { Box, Container, Img, Heading, Text } from "@chakra-ui/react";
import SocialIcons from "./SocialIcons";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { easeTop, easeLeft } from "../utils/scrollAnimations";

const AboutMe = () => {
  const toTop = easeTop();
  const toLeft = easeLeft();
  const cardX = useMotionValue(0);
  const cardY = useMotionValue(0);
  const rotateX = useTransform(cardY, [-600, 600], [10, -10]);
  const rotateY = useTransform(cardX, [-600, 600], [-10, 10]);

  const handleMouseMove = (event) => {
    const offsetX = event.clientX - window.innerWidth / 2;
    const offsetY = event.clientY - window.innerHeight / 2;

    cardX.set(offsetX);
    cardY.set(offsetY);
  };

  const handleMouseLeave = () => {
    cardX.set(0);
    cardY.set(0);
  };

  return (
    <Box id="about-me">
      <Container
        py={{ base: "72px", md: "100px" }}
        h="100%"
        w="100%"
        display="flex"
        flexDir={{ base: "column-reverse", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
        gap={{ base: 10, md: 24 }}>
        <motion.div
          style={{
            padding: "32px 0",
            perspective: 800,
            width: "100%",
            height: "100%",
            maxWidth: "450px",
            cursor: "pointer",
            userSelect: "none",
            // background: '#ffffff'
          }}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}>
          <motion.div
            style={{
              perspective: 800,
              transformStyle: "preserve-3d",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              rotateX,
              rotateY,
            }}
            variants={toTop}
            transition={{ velocity: 0 }}>
            <Img
              src="./src/assets/profil about.png"
              maxH="400px"
              boxShadow="4px 4px 24px rgba(202, 255, 48, 0.6)"
              border="1px solid rgba(202, 255, 48, 0.6)"
              transition="all 0.5s ease-in-out"
              _hover={{
                transform: "translate(0, -4px)",
                filter: "brightness(1.2) contrast(1.1)",
                boxShadow: "4px 4px 24px rgba(202, 255, 48, 1)",
                border: "1px solid rgba(202, 255, 48, 1)",
              }}
            />
          </motion.div>
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={toLeft}>
          <Box
            display="flex"
            flexDir="column"
            justifyContent="center"
            alignItems="start"
            gap={8}>
            <Box position="relative" w="100%" textAlign="center">
              <Heading
                as="h1"
                size={{ base: "3xl", md: "4xl" }}
                opacity={0.6}
                w="100%"
                sx={{
                  WebkitTextStroke: "1px #CAFF30",
                  WebkitTextFillColor: "transparent",
                }}>
                ABOUT ME /&gt;
              </Heading>
              <Heading
                as="h2"
                size="lg"
                position="absolute"
                top={{ base: "55%", md: "60%" }}
                left={{ base: "50%", md: "50%" }}
                transform="translate(-50%, -50%)"
                color="secondary"
                w="100%"
                letterSpacing={12}
                textShadow="0 0 24px #CAFF30"
                textStyle="uppercase">
                WHO AM I ?
              </Heading>
            </Box>
            <Text
              as="p"
              fontSize={{ base: "16px", md: "18px" }}
              color="whitemori"
              textAlign={{ base: "justify", md: "left" }}
              maxW="560px">
              Hi, I am Adib Haidar Zaky, a student with an interest in front-end
              web development and UI/UX. I have a passion for technology and
              hope to bring positive energy through technological advancements
              for a better future. I am currently completing my studies as an
              undergraduate Mathematics student at Universitas Sebelas Maret.
            </Text>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap={8}>
              <SocialIcons />
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default AboutMe;
