import { Box, Text } from "@chakra-ui/react";

const NotFound = () => {
  document.title = "404: Page not found";
  return (
    <Box
      w="100%"
      h="100vh"
      bg="primary"
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      color="blackmori.150"
      fontSize="16px">
      <Text fontSize={160} letterSpacing={6} fontWeight={700} color="whitemori">
        404
      </Text>
      <Text>Sorry, this page could not be found</Text>
    </Box>
  );
};

export default NotFound;
