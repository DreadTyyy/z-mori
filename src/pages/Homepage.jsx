import { useState, lazy, Suspense } from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import CircleBlur from "../components/CircleBlur";
import InitialLoad from "../components/transition/InitialLoad";
import { CiDesktopMouse2 } from "react-icons/ci";
import ReactGA from "react-ga4";

const Navbar = lazy(() => import("../components/Navbar"));
const Header = lazy(() => import("../components/Header"));
const AboutMe = lazy(() => import("../components/AboutMe"));
const Project = lazy(() => import("../components/Project"));
const Skills = lazy(() => import("../components/Skills"));
const Contact = lazy(() => import("../components/Contact"));

const Homepage = () => {
  ReactGA.send({
    hitType: "pageview",
    page: "/",
    title: "home",
  });
  const [isTop, setIsTop] = useState(true);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
      setIsTop(false);
    } else {
      setIsTop(true);
    }
  });
  return (
    <>
      <InitialLoad>
        <Box
          position="relative"
          w="100%"
          h="100%"
          zIndex="0"
          overflow="hidden"
          bgColor="primary">
          <CircleBlur />
          <Suspense
            fallback={
              <div
                className="initialLoading"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100vh",
                  color: "#ffffff",
                  fontSize: "32px",
                }}>
                Loading<span className="dots"></span>
              </div>
            }>
            <Navbar isTop={isTop} />
            <Header />
            <AboutMe />
            <Project />
            <Skills />
            <Contact />
          </Suspense>
          <Button
            as="a"
            href="#"
            px="2px"
            mr={{ base: "8px", md: "0" }}
            variant="morilink"
            position="fixed"
            zIndex="9999"
            display="flex"
            flexDir="column"
            gap={1}
            bottom={isTop ? "-100%" : "16px"}
            right={{ base: "0%", md: "2%" }}
            fontSize="24px"
            bgColor={{
              base: "rgba(255, 255, 255, 0.3)",
              md: "transparent",
            }}
            transition="all 0.5s ease-in-out"
            _hover={{
              textDecoration: "none",
            }}>
            <Text>
              <CiDesktopMouse2 />
            </Text>
            <Box
              display="flex"
              flexDir="column"
              gap={1}
              bottom={isTop ? "-100%" : "16px"}
              right={{ base: "0%", md: "2%" }}
              fontSize="24px"
              transition="all 0.5s ease-in-out"
              _hover={{
                textDecoration: "none",
              }}>
              <Box display="flex" textAlign="right" gap={{ base: 0, md: 1 }}>
                <Text
                  display={{ base: "none", md: "hidden" }}
                  fontSize="10px"
                  color="blackmori.150"
                  letterSpacing={1}>
                  Scroll
                </Text>
                <Text fontSize="10px" color="blackmori.150" letterSpacing={1}>
                  Top
                </Text>
              </Box>
            </Box>
          </Button>
        </Box>
      </InitialLoad>
    </>
  );
};

export default Homepage;
