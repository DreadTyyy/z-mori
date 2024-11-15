import { Box } from "@chakra-ui/react";
import InitialLoad from "../components/transition/InitialLoad";
import ProjectItem from "../components/ProjectItem";
import CircleBlur from "../components/CircleBlur";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import dataProjects from "../utils/dataProjects";
import ReactGA from "react-ga4";
import NotFound from "./NotFound";

const ProjectPage = () => {
  const params = useParams();
  const [projects, setProjects] = useState([]);
  const [selectedProjects, setSelectedProjects] = useState("");

  useEffect(() => {
    setProjects(() => dataProjects());
  }, []);

  useEffect(() => {
    if (projects.length > 0) {
      const getProject = projects.find((project) => project.slug === params.id);
      if (getProject) {
        setSelectedProjects(getProject);
        ReactGA.send({
          hitType: "pageview",
          page: `/project/${getProject.slug}`,
          title: getProject.slug,
        });
      } else {
        setSelectedProjects("not_found");
      }
    }
  }, [params.id, projects]);

  if (selectedProjects === "not_found") {
    return <NotFound />
  }

  return (
    <>
      <InitialLoad>
        <Box w="100%" minH="100vh" zIndex="0" overflow="hidden">
          <CircleBlur />
          {selectedProjects && (
            <ProjectItem
              projects={projects}
              currentProject={selectedProjects}
            />
          )}
        </Box>
      </InitialLoad>
    </>
  );
};

export default ProjectPage;
