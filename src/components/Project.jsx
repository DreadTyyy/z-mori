import {
  Box,
  Container,
  Heading,
  Grid,
  GridItem,
  Spinner,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState, lazy, Suspense } from "react";
import dataProjects from "../utils/dataProjects";
import { easeTop } from "../utils/scrollAnimations";

const ProjectCard = lazy(() => import("./ProjectCard"));

const Project = () => {
  const [projects, setProjects] = useState([]);
  const toTop = easeTop();
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
              <Suspense fallback={<RenderLoad />} key={index}>
                <ProjectCard
                  title={title}
                  slug={slug}
                  cover={cover}
                  description={description}
                  technology={technology}
                  urlSite={urlSite}
                />
              </Suspense>
            )
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default Project;

const RenderLoad = () => {
  return (
    <GridItem
      w="500px"
      h="360px"
      display="flex"
      color="secondary"
      justifyContent="center"
      alignItems="center">
      <Spinner size="xl" />
    </GridItem>
  );
};
