import { Box, Container, Heading, Img, Text, Button } from "@chakra-ui/react";
import AnimateUp from "./animations/AnimateUp";
import OpenUp from "./animations/OpenUp";
import SocialIcons from "./SocialIcons";
import { MdDownload } from "react-icons/md";

const Header = () => {
  return (
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
            <AnimateUp>
              <Heading as="h2" size="4xl" color="whitemori" display="flex">
                HELLO
                <Text ml="4" color="secondary">
                  /&gt;
                </Text>
              </Heading>
            </AnimateUp>
            <Box
              display="flex"
              flexDir="column"
              gap={0}
              color="whitemori"
              fontSize="24px"
              my={4}>
              <AnimateUp delay={0.1}>
                <Text>My name is Adib Haidar Zaky</Text>
                <Text>I am a Front End Developer</Text>
              </AnimateUp>
            </Box>
            <AnimateUp delay={0.1}><Text fontSize="24px" color="secondary">
              Welcome to my journey🚀
            </Text></AnimateUp>
            <AnimateUp delay={0.2}>
              <Box 
                display="flex" 
                flexWrap="wrap"
                gap={4}
                pt={6}
                pb={2}
                pr={2}
              >
                <Button
                  as="a"
                  href="#contact"
                  variant="gradient"
                  rounded="999px">
                  Let&apos;s Connect
                </Button>
                <Button
                  as="a"
                  href="/profile/curriculum_vitae_adib_haidar_zaky.pdf"
                  download="curriculum_vitae_adib_haidar_zaky"
                  display="flex"
                  gap={1}
                  variant="moriborder"
                  rounded="999px">
                  <MdDownload size="20" /> 
                  <Text>Curriculum Vitae</Text>
                </Button>
              </Box>
            </AnimateUp>
          </Box>
          <OpenUp>
            <Img
              display={{ base: "none", md: "block" }}
              src="/assets/profil header.png"
              alt="header profil image"
              loading="eager"
              width={400}
              height={400}
              objectFit="contain"
              pointerEvents="none"
            />
          </OpenUp>
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
  );
};

export default Header;
