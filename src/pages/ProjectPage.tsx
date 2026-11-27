import { useEffect, useMemo } from "react";
import { useParams } from "react-router";
import ReactGA from "react-ga4";
import { Box } from "@chakra-ui/react";
import InitialLoad from "@/components/transition/InitialLoad";
import ProjectItem from "@/components/ProjectItem";
import CircleBlur from "@/components/CircleBlur";
import dataProjects, { type ProjectType } from "@/utils/dataProjects";
import NotFound from "./NotFound";

const ProjectPage = () => {
  const params = useParams();
  const projects: ProjectType[] = dataProjects();
  const selectedProject: ProjectType | undefined = useMemo(() => {
    return projects.find((project) => project.slug === params.id);
  }, [params.id]);

  useEffect(() => {
    if (selectedProject) {
      ReactGA.send({
        hitType: "pageview",
        page: `/project/${selectedProject.slug}`,
        title: selectedProject.slug,
      });
    }
  }, [selectedProject]);

  if (!selectedProject) {
    return <NotFound />
  }

  return (
    <>
      <InitialLoad>
        <Box w="100%" minH="100vh" zIndex="0" overflow="hidden">
          <CircleBlur />
          {selectedProject && (
            <ProjectItem
              projects={projects}
              currentProject={selectedProject}
            />
          )}
        </Box>
      </InitialLoad>
    </>
  );
};

export default ProjectPage;
