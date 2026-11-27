import { Box } from "@chakra-ui/react";

const CircleBlur = ({ 
  top = "-50%", 
  left = "-10%"
}: {
  top?: string;
  left?: string;
}) => {
  return (
    <Box
      zIndex="0"
      pointerEvents="none"
      w="120vw"
      h="100vh"
      bgColor="whitemori"
      mixBlendMode="overlay"
      position="fixed"
      rounded="100%"
      top={top}
      left={left}
      filter="blur(70px)"></Box>
  );
};

export default CircleBlur;
