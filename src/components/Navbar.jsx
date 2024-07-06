import {
  Box,
  Flex,
  Text,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  useDisclosure,
  // DrawerOverlay,
  // DrawerHeader,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { PropTypes } from "prop-types";
import { ease } from "../utils/scrollAnimations";

const Navbar = ({ isTop }) => {
  const drawer = useDisclosure();
  const show = ease();

  return (
    <motion.div
      style={{
        width: "100%",
        height: "100%",
      }}
      initial="offscreen"
      whileInView="onscreen"
      variants={show}
      viewport={{ once: true, amount: 0.8 }}>
      <Flex
        position="fixed"
        zIndex="9999"
        bgColor={isTop ? "rgba(255, 255, 255, 0)" : "#2E2641"}
        borderBottom={isTop ? "none" : "1px solid #CAFF30"}
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        px={{ base: "5%", md: "64px" }}
        py="12px"
        transition="all 0.2s ease-in-out">
        <Box display="flex" alignItems="center" color="whitemori">
          <Text fontSize={{ base: "24px" }} fontWeight={700}>
            Mor
          </Text>
          <Text fontSize={{ base: "24px" }} fontWeight={700} color="secondary">
            <i>i</i>
          </Text>
          <Text
            fontSize={{ base: "28px" }}
            ml={1}
            fontWeight={700}
            color="secondary">
            /&gt;
          </Text>
        </Box>
        <Box display={{ base: "none", lg: "flex" }} gap={4}>
          <Button as="a" href="#" variant="morilink" fontSize="16px">
            Home
          </Button>
          <Button as="a" href="#about-me" variant="morilink" fontSize="16px">
            About Me
          </Button>
          <Button as="a" href="#projects" variant="morilink" fontSize="16px">
            Projects
          </Button>
          <Button as="a" href="#skills" variant="morilink" fontSize="16px">
            Skills
          </Button>
          <Button as="a" href="#contact" variant="morilink" fontSize="16px">
            Contact
          </Button>
        </Box>
        <Box
          as="button"
          display={{ base: "flex", lg: "none" }}
          variant="morilink"
          flexDir="column"
          gap={2}
          onClick={drawer.isOpen ? drawer.onClose : drawer.onOpen}>
          <Text
            as="span"
            className="hamburger-line"
            w="16px"
            h="2px"
            bgColor="secondary"
            transition="all 0.2s ease-in-out"
            transformOrigin="bottom"
            transform={
              drawer.isOpen && "rotate(45deg) translate(5px, 2px)"
            }></Text>
          <Text
            as="span"
            className="hamburger-line"
            w="32px"
            h="2px"
            bgColor="secondary"
            transition="all 0.4s ease-in-out"
            transform={drawer.isOpen && "rotate(315deg)"}></Text>
          <Text
            as="span"
            className="hamburger-line"
            w="16px"
            alignSelf="end"
            h="2px"
            bgColor="secondary"
            transition="all 0.2s ease-in-out"
            transformOrigin="bottom"
            transform={
              drawer.isOpen && "rotate(45deg) translate(-5px, -1px)"
            }></Text>
        </Box>
        <Drawer
          placement="left"
          onClose={drawer.onClose}
          isOpen={drawer.isOpen}
          minH="100vh"
          zIndex="-1"
          minW="100vw"
          size="full">
          {/* <DrawerOverlay /> */}
          <DrawerContent bg="rgba(25, 20, 38, 1)" mt="66px">
            {/* <DrawerHeader
              color="#fff">
              <Box w="100%" h="32px"></Box>
            </DrawerHeader> */}
            <DrawerBody
              display="flex"
              pt={8}
              borderTopWidth="1px"
              borderTopColor="secondary"
              flexDir="column"
              gap={4}
              alignItems="center">
              <Button
                as="a"
                href="#"
                variant="morilink"
                fontSize="24px"
                onClick={drawer.onClose}>
                Home
              </Button>
              <Button
                as="a"
                href="#about-me"
                variant="morilink"
                fontSize="24px"
                onClick={drawer.onClose}>
                About Me
              </Button>
              <Button
                as="a"
                href="#projects"
                variant="morilink"
                fontSize="24px"
                onClick={drawer.onClose}>
                Projects
              </Button>
              <Button
                as="a"
                href="#skills"
                variant="morilink"
                fontSize="24px"
                onClick={drawer.onClose}>
                Skills
              </Button>
              <Button
                as="a"
                href="#contact"
                variant="morilink"
                fontSize="24px"
                onClick={drawer.onClose}>
                Contact
              </Button>
            </DrawerBody>
            <DrawerFooter transform="translateY(-68px)">
              <Text as="span" fontSize="16px" color="blackmori.350">
                Made with love by Mor
              </Text>
              <Text as="span" fontSize="16px" color="secondary">
                i /&gt; Z
              </Text>
              <Text as="span" fontSize="16px" color="blackmori.350">
                aky
              </Text>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Flex>
    </motion.div>
  );
};

export default Navbar;

Navbar.propTypes = {
  isTop: PropTypes.bool,
};
