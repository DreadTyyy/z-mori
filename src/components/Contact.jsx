import {
  Box,
  Heading,
  Container,
  Text,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { easeTop } from "../utils/scrollAnimations";
import ReactGA from "react-ga4";
import { FaInstagram, FaGithub } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { SlSocialLinkedin } from "react-icons/sl";

const socialMedia = [
  {
    name: "Instagram",
    username: "@adib.zky",
    url: "https://www.instagram.com/adib.zaky_/",
    icon: FaInstagram,
  },
  {
    name: "LinkedIn",
    username: "Adib Zaky",
    url: "https://www.linkedin.com/in/adib-zaky-b1817a248/",
    icon: SlSocialLinkedin,
  },
  {
    name: "Github",
    username: "DreadTyyy",
    url: "https://github.com/DreadTyyy/",
    icon: FaGithub,
  },
];

const Contact = () => {
  const toTop = easeTop();
  const handleClickButton = (item) => {
    ReactGA.event({ category: "social media", action: "click", label: item });
    console.log(`Event click: ${item}`);
  };
  return (
    <Box id="contact">
      <Container
        pt="72px"
        pb="32px"
        h="100%"
        w="100%"
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        gap={{ base: 8, md: 16 }}>
        <motion.div
          style={{
            width: "100%",
          }}
          initial="offscreen"
          whileInView="onscreen"
          variants={toTop}
          viewport={{ once: true, amount: 0.8 }}>
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
              CONTACT /&gt;
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
              LET’S GET CONNECTED👌
            </Heading>
          </Box>
        </motion.div>
        <Box w="100%" textAlign="center" color="whitemori">
          <Text
            fontSize={{ base: "16px", md: "20px" }}
            fontWeight={400}
            color="blackmori.150">
            If you&apos;re interested in hiring me or collaborating, feel free
            to reach out to me
          </Text>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontSize="28px"
            gap={{ base: 2, md: 4 }}
            fontWeight={400}
            py={4}
            transition="all 0.3s ease-in"
            _hover={{
              color: "secondary",
            }}>
            <MdEmail />{" "}
            <Text
              as="a"
              href="mailto:adibhaidarzaky@gmail.com"
              onClick={() =>
                ReactGA.event({
                  category: "mailto",
                  action: "submit",
                  label: "mailto",
                })
              }
              fontSize={{ base: "16px", md: "20px" }}
              _hover={{ textDecoration: "underline" }}>
              adibhaidarzaky@gmail.com
            </Text>{" "}
          </Box>
          <Grid
            my={4}
            templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
            rowGap={8}
            justifyItems="center"
            columnGap={{ base: 4, md: 16, lg: 32 }}>
            {socialMedia.map((item) => (
              <GridItem
                key={item.name}
                as="a"
                target="_blank"
                href={item.url}
                onClick={() => handleClickButton(item.name.toLowerCase())}
                display="flex"
                w="fit-content"
                alignItems="center"
                gap={4}
                cursor="pointer"
                role="group">
                <Box
                  color="primary"
                  bgColor="blackmori.150"
                  p={3}
                  rounded="8px"
                  transition="all 0.3s ease-in"
                  _groupHover={{
                    bgColor: "secondary",
                  }}>
                  <item.icon fontSize="24px" />
                </Box>
                <Box
                  className="text-color-change"
                  color="secondary"
                  fontSize={{ base: "16px", md: "18px" }}>
                  <Box h="28px" overflow="hidden" textAlign="left">
                    <Text
                      transition="all 0.2s linear"
                      _groupHover={{ transform: "translate(0, -28px)" }}>
                      {item.name}
                    </Text>
                    <Text
                      transition="all 0.2s linear"
                      _groupHover={{ transform: "translate(0, -28px)" }}>
                      {item.username}
                    </Text>
                  </Box>
                  <Text
                    transform="rotate(-45deg)"
                    w="fit-content"
                    transition="all 0.3s linear"
                    _groupHover={{
                      transform: "rotate(0deg)",
                    }}>
                    <FaArrowRightLong />
                  </Text>
                </Box>
              </GridItem>
            ))}
          </Grid>
          <Box mt={16}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              color="whitemori"
              opacity={0.8}>
              <Text fontSize={{ base: "24px" }} fontWeight={600}>
                Mor
              </Text>
              <Text
                fontSize={{ base: "24px" }}
                fontWeight={600}
                color="secondary">
                <i>i</i>
              </Text>
              <Text
                fontSize={{ base: "28px" }}
                ml={1}
                fontWeight={600}
                color="secondary">
                /&gt;
              </Text>
            </Box>
            <Text fontSize="14px" color="blackmori.500">
              Made with love
            </Text>
            <Text fontSize="14px" color="blackmori.500">
              {/* Copyright &copy; */}
              by Adib Zaky 2024
            </Text>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
