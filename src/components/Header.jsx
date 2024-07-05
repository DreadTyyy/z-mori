import { Box, Container, Heading, Img, Text, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import SocialIcons from "./SocialIcons";
import { ease } from "../utils/scrollAnimations";

const Header = () => {
  const show = ease();
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      variants={show}
      viewport={{ once: true, amount: 0.8 }}>
      <Box
        position="relative"
        minW="100vw"
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        minH="100vh">
        <Container
          h="100%"
          w="100%"
          display="flex"
          alignItems="center"
          gap={24}
          justifyContent="space-between">
          <Box>
            <Heading as="h2" size="4xl" color="whitemori" display="flex">
              HELLO
              <Text ml="4" color="secondary">
                /&gt;
              </Text>
            </Heading>
            <Box
              display="flex"
              flexDir="column"
              gap={0}
              color="whitemori"
              fontSize="24px"
              my={4}>
              <Text>My name is Adib Haidar Zaky</Text>
              <Text>I am a Front End Developer</Text>
            </Box>
            <Text fontSize="24px" color="secondary">
              Welcome to my journey🚀
            </Text>
            <Button
              mt={6}
              as="a"
              href="#contact"
              variant="gradient"
              rounded="999px">
              Let&apos;s Connect
            </Button>
          </Box>
          <Img
            display={{ base: "none", md: "block" }}
            src="/src/assets/profil header.png"></Img>
        </Container>
        <Box
          mt={{ base: 20, md: 6 }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap={8}>
          <SocialIcons />
        </Box>
      </Box>
    </motion.div>
  );
};

export default Header;
