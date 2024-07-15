import { Box, Heading, Container, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { easeTop } from "../utils/scrollAnimations";
import ReactGA from "react-ga4";

const Contact = () => {
  const toTop = easeTop();
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
              Copyright &copy; 2024 by Adib Zaky
            </Text>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
