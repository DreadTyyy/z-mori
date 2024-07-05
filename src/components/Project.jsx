import {
  Box,
  Container,
  Text,
  Flex,
  Heading,
  Grid,
  GridItem,
  Img,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiExternalLink } from "react-icons/hi";
import { FaArrowRightLong } from "react-icons/fa6";
import TechIcons from "./TechIcons";
import { useEffect, useState } from "react";
import dataProjects from "../utils/dataProjects";
import { easeBottom, easeTop } from "../utils/scrollAnimations";

const Project = () => {
  const [projects, setProjects] = useState([]);
  const toTop = easeTop();
  const toBottom = easeBottom();
  useEffect(() => {
    setProjects(() => dataProjects());
  }, []);
  return (
    <Box id="projects">
      <Container
        py="72px"
        h="100%"
        w="100%"
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        gap={{ base: 20, md: 24 }}>
        <motion.div
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
              PROJECTS /&gt;
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
              MY PORTOFOLIO
            </Heading>
          </Box>
        </motion.div>
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          gap="64px">
          {projects.map(
            (
              { title, slug, cover, description, technology, urlSite },
              index
            ) => (
              <GridItem
                key={index}
                w="100%"
                cursor="pointer"
                rounded="8px 8px 0 0">
                <motion.div
                  style={{
                    perspective: 800,
                    width: "100%",
                    height: "100%",
                  }}
                  initial="offscreen"
                  whileInView="onscreen"
                  variants={toBottom}
                  viewport={{ once: true, amount: 0.8 }}>
                  <motion.div
                    style={{
                      perspective: 800,
                      transformStyle: "preserve-3d",
                      width: "100%",
                      height: "100%",
                    }}
                    transition={{
                      delay: 0.1,
                      duration: 0.5,
                    }}
                    whileHover={{
                      transform: "rotateX(20deg) rotateY(0) rotateZ(0)",
                      boxShadow: "0 16px 24px 0 rgba(0, 0, 0, 0.5)",
                    }}>
                    <Box
                      position="relative"
                      w="100%"
                      h={{ base: "160px", md: "280px" }}
                      bgColor="primary"
                      overflow="hidden">
                      <Box
                        position="absolute"
                        top="0%"
                        left="-10%"
                        rounded="100%"
                        w="200px"
                        h="200px"
                        filter="blur(64px)"
                        opacity="0.6"
                        bgColor="#210D55"
                        mixBlendMode="screen"></Box>
                      <Box
                        position="absolute"
                        top="-20%"
                        left="50%"
                        rounded="100%"
                        w="200px"
                        h="200px"
                        filter="blur(64px)"
                        opacity="0.6"
                        bgColor="#210D55"
                        mixBlendMode="screen"></Box>
                      <Box
                        position="absolute"
                        Top="-40%"
                        right="-10%"
                        rounded="100%"
                        w="200px"
                        h="200px"
                        filter="blur(64px)"
                        opacity="0.6"
                        bgColor="#210D55"
                        mixBlendMode="screen"></Box>
                      <motion.div
                        transition={{ delay: 0.2 }}
                        whileHover={{
                          transform: "rotate(-2deg) translate(0, -24px)",
                        }}>
                        <Box transform="translate(5%, 16%)" w="100%" h="100%">
                          <Link to={`project/${slug}`}>
                            <Img
                              src={`/assets/${cover}`}
                              objectFit="contain"
                              w="90%"
                              h="90%"
                              transform="rotate(2deg)"
                              transition="all 500ms ease-in"
                              _hover={{
                                boxShadow:
                                  "0 0 6px 2px rgba(202, 255, 48, 0.6)",
                                border: "1px solid rgba(202, 255, 48, 0.8)",
                              }}
                            />
                          </Link>
                        </Box>
                      </motion.div>
                    </Box>
                    <Box px={4} py={2} w="100%" color="whitemori">
                      <Flex
                        w="100%"
                        justifyContent="space-between"
                        alignItems="center">
                        <Heading as="h3" fontSize="24px">
                          {title}
                        </Heading>
                        <Link to={`project/${slug}`}>
                          <Flex
                            alignItems="center"
                            justifyContent="center"
                            gap={2}
                            fontSize="14px"
                            transition="all 0.2s ease-in-out"
                            _hover={{
                              gap: 4,
                              color: "secondary",
                            }}>
                            detail <FaArrowRightLong />
                          </Flex>
                        </Link>
                      </Flex>
                      <Text
                        as="p"
                        py={2}
                        my={1}
                        fontWeight={400}
                        fontStyle="16px">
                        {description}
                      </Text>
                      <Flex
                        w="100%"
                        gap={4}
                        flexDir={{ base: "column", md: "row" }}
                        justifyContent="space-between"
                        alignItems={{ base: "start", md: "center" }}>
                        <Flex
                          alignItems="center"
                          justifyContent="center"
                          flexWrap="wrap"
                          gap={2}
                          fontSize="18px">
                          <Text
                            as="p"
                            fontSize="14px"
                            color="black.750"
                            opacity="0.8">
                            build with{" "}
                          </Text>
                          {technology.map((tech) => (
                            <TechIcons key={tech} icon={tech} />
                          ))}
                        </Flex>
                        <Link to={urlSite} target="_blank">
                          <Box
                            display="flex"
                            alignItems="center"
                            gap={2}
                            p={4}
                            zIndex="999"
                            fontSize="16px"
                            color="secondary"
                            _hover={{
                              textDecoration: "underline",
                            }}>
                            Check Live Site
                            <HiExternalLink />
                          </Box>
                        </Link>
                      </Flex>
                    </Box>
                  </motion.div>
                </motion.div>
              </GridItem>
            )
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default Project;
