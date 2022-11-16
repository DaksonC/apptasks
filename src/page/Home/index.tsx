import { Box } from "@chakra-ui/react";

import { Sidebar } from "../../components/Sidebar";

export function Home() {
  return (
    <>
      <Sidebar />
      <Box
        w="100%"
        h="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgGradient="linear(to-t, gray.900, gray.600)"
      >
        Home
      </Box>
    </>
  );
}
