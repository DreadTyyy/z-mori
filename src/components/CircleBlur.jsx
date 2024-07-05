import { Box } from "@chakra-ui/react";
import PropTypes from "prop-types";

const CircleBlur = ({ top, left }) => {
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
      top={top || "-50%"}
      left={left || "-10%"}
      filter="blur(70px)"></Box>
  );
};

export default CircleBlur;

CircleBlur.propTypes = {
  top: PropTypes.string,
  left: PropTypes.string,
};
