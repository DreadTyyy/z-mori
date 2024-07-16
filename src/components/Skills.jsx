import {
  Box,
  Container,
  Heading,
  Grid,
  GridItem,
  Img,
  Text,
} from "@chakra-ui/react";
import { easeTop } from "../utils/scrollAnimations";
import { motion } from "framer-motion";

const items = [
  { name: "HTML5", color: "241, 102, 42" },
  { name: "CSS", color: "51, 169, 220" },
  { name: "Tailwind", color: "0, 216, 255" },
  { name: "Javascript", color: "247, 233, 30" },
  { name: "ReactJS", color: "0, 216, 255" },
  { name: "Bootstrap", color: "117, 17, 247" },
  { name: "PHP", color: "97, 129, 182" },
  { name: "Python", color: "56, 127, 185" },
];

const Skills = () => {
  const toTop = easeTop();
  return (
    <Box id="skills">
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
              SKILLS /&gt;
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
              WHAT CAN I DO?
            </Heading>
          </Box>
        </motion.div>
        <Grid
          gridTemplateColumns={{
            base: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
            lg: "repeat(5, 1fr)",
          }}
          gap={{ base: 4, md: 12 }}
          alignContent="center">
          {items.map(({ name, color }) => (
            <GridItem
              key={name}
              userSelect="none"
              cursor="pointer"
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDir="column"
              gap={2}
              w="100%"
              px="36px"
              py="24px"
              border="1px solid #CAFF30"
              rounded="12px"
              bgColor={`rgba(${color}, 0.2)`}
              boxShadow={{
                base: "0 2px 10px 0 rgba(202, 255, 48, 0.4)",
                md: "0 6px 24px 0 rgba(202, 255, 48, 0.4)",
              }}
              transition="all 0.5s ease-in"
              _hover={{
                bgColor: `rgba(${color}, 0.4)`,
                transform: "translate(0, -8px)",
              }}>
              <Img
                src={`/tech/${name.toLocaleLowerCase()}.webp`}
                alt={`Icon ${name}`}
                width={70}
                height={70}
                objectFit="contain"
              />
              <Text color="whitemori">{name}</Text>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
