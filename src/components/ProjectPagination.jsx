import { Box, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { PropTypes } from "prop-types";

const ProjectPagination = ({ currentProject, projects }) => {
  const [nextProject, setNextProject] = useState("");
  const [prevProject, setPrevProject] = useState("");

  const getNextProject = () => {
    let nextId = currentProject.id + 1;
    if (nextId > projects.length) {
      nextId = 1;
    }
    const project = projects.find((project) => project.id === nextId);
    return project;
  };

  const getPrevProject = () => {
    let prevId = currentProject.id - 1;
    if (prevId < 1) {
      prevId = projects.length;
    }
    const project = projects.find((project) => project.id === prevId);
    return project;
  };

  useEffect(() => {
    if (currentProject && projects.length > 0) {
      const next = getNextProject();
      const prev = getPrevProject();

      setNextProject(next.slug);
      setPrevProject(prev.slug);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentProject, projects]);
  return (
    <Flex w="100%" justifyContent="space-between" mt={8} alignItems="center">
      <Link to={`/project/${prevProject}`}>
        <Box
          color="blackmori.900"
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap={4}
          filter="drop-shadow(0 0 5px rgba(0, 0, 0, 0.5))"
          _hover={{
            color: "primary",
          }}>
          <Text as="span" fontSize="24px">
            <FaArrowLeftLong />
          </Text>
          <Text as="span" fontSize="20px" fontWeight={600}>
            PREV
          </Text>
        </Box>
      </Link>
      <Link to={`/project/${nextProject}`}>
        <Box
          color="blackmori.900"
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap={4}
          filter="drop-shadow(0 0 5px rgba(0, 0, 0, 0.5))"
          _hover={{
            color: "primary",
          }}>
          <Text as="span" fontSize="20px" fontWeight={600}>
            NEXT
          </Text>
          <Text as="span" fontSize="24px">
            <FaArrowRightLong />
          </Text>
        </Box>
      </Link>
    </Flex>
  );
};

export default ProjectPagination;

ProjectPagination.propTypes = {
  projects: PropTypes.array.isRequired,
  currentProject: PropTypes.object.isRequired,
};
