import {
  Container,
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Button,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import SocialIcons from "./SocialIcons";
import ProjectPagination from "./ProjectPagination";
import { HiExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { PropTypes } from "prop-types";

const ProjectItem = ({ projects, currentProject }) => {
  return (
    <>
      <Container
        py={{ base: "20px", md: "48px" }}
        w="100%"
        h="100%"
        display="flex"
        flexDir="column"
        gap="32px"
        alignItems="flex-start"
        bgColor="primary">
        <Flex justifyContent="space-between" alignItems="center" w="100%">
          <Link to="/#projects">
            <Flex
              alignItems="center"
              gap={2}
              color="secondary"
              transition="all 0.4s ease-in-out"
              _hover={{ gap: 8 }}>
              <Text as="span" fontSize="20px">
                <FaArrowLeftLong />
              </Text>
              <Text as="span" fontSize="16px" fontWeight={600}>
                back to home
              </Text>
            </Flex>
          </Link>
          <Box>
            <SocialIcons />
          </Box>
        </Flex>
        <Flex
          flexDir={{ base: "column", md: "row" }}
          justifyContent="space-between"
          w="full"
          gap={6}>
          <Box color="whitemori">
            <Heading
              as="h2"
              size="2xl"
              pb={4}
              borderBottom="1px solid rgb(241, 241, 241)">
              {currentProject.title}
            </Heading>
            <Heading as="h6" size="md" mt={4} color="secondary">
              CATEGORY
            </Heading>
            <Flex flexDir="column" py={4} gap={1}>
              {currentProject.category.map((ctg, index) => {
                return <Text key={index}>{ctg}</Text>;
              })}
            </Flex>
            <Heading as="h6" size="md" color="secondary">
              YEAR
            </Heading>
            <Flex flexDir="column" py={4} gap={1}>
              <Text>{currentProject.date}</Text>
            </Flex>
            <Heading as="h6" size="md" color="secondary">
              DESCRIPTION
            </Heading>
            <Flex flexDir="column" py={4} gap={1}>
              <Text maxW="400px">{currentProject.content}</Text>
            </Flex>
            <Flex alignItems="center" gap={8}>
              <Button
                as="a"
                px="0"
                target="_blank"
                href={currentProject.urlSite}
                variant="morilink"
                display="flex"
                alignItems="center"
                gap={2}
                fontWeight={600}
                transition="all 0.2s ease-in"
                _hover={{
                  textDecoration: "underline",
                  color: "secondary",
                }}>
                Open Project{" "}
                <Text as="span" fontSize="20px">
                  <HiExternalLink />
                </Text>
              </Button>
              {currentProject.github && (
                <Button
                  as="a"
                  px="0"
                  target="_blank"
                  href={currentProject.github}
                  role="group"
                  display="flex"
                  alignItems="center"
                  gap={2}
                  variant="morilink"
                  fontWeight={600}
                  color="secondary"
                  transition="all 0.2s ease-in"
                  _hover={{
                    textDecoration: "none",
                    textShadow: "1px 1px 8px rgba(202, 255, 48, 0.6)",
                  }}>
                  Repository Github{" "}
                  <Text
                    as="span"
                    transition="all 0.2s ease-in"
                    fontSize="20px"
                    _groupHover={{
                      filter:
                        "drop-shadow(1px 1px 8px rgba(202, 255, 48, 0.6))",
                    }}>
                    <FaGithub />
                  </Text>
                </Button>
              )}
            </Flex>
          </Box>
          <Box color="whitemori">
            <Image
              src={`/assets/${currentProject.bigCover}`}
              alt={`header ${currentProject.title}`}
              loading="lazy"
              mb={4}
              border="1px solid rgba(202, 255, 48, 0.4)"
              boxShadow="0 0 8px 0 rgba(241, 241, 241, 0.1)"
            />
            <Heading as="h6" size="md" color="secondary">
              TECH
            </Heading>
            <Flex py={4}>
              <Text>
                {currentProject.technology.map((tech, index) => {
                  if (index === currentProject.technology.length - 1) {
                    return <span key={index}>and {tech}</span>;
                  } else {
                    return <span key={index}>{tech}, </span>;
                  }
                })}
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Container>
      <Container
        py={{ base: "32px", md: "56px" }}
        w="100%"
        h="100%"
        display="flex"
        flexDir="column"
        gap="32px"
        alignItems="flex-start"
        bgColor="whitemori">
        <Grid
          gridTemplateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          gap="64px">
          {currentProject.pictures.map((pict, index) => {
            return (
              <GridItem
                key={index}
                w="100%"
                h="fit-content"
                objectFit="cover"
                boxShadow="2xl">
                <Image src={`/assets/${pict}`} alt={pict} loading="lazy" />
              </GridItem>
            );
          })}
        </Grid>
        <ProjectPagination
          currentProject={currentProject}
          projects={projects}
        />
      </Container>
    </>
  );
};

export default ProjectItem;

ProjectItem.propTypes = {
  projects: PropTypes.array.isRequired,
  currentProject: PropTypes.object.isRequired,
};
