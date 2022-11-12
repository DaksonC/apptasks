import { Box, Text } from "@chakra-ui/react";

export function NotFound() {
  return (
    <Box
      w="100vw"
      h="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgGradient="linear(to-t, gray.900, gray.600)"
    >
      <Text>404 - Not Found!</Text>
    </Box>
  );
}
