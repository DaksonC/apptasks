import { Box, Text } from "@chakra-ui/react";
import { useEffect } from "react";

import { Sidebar } from "../../components/Sidebar";

export function Tasks() {
  useEffect(() => {
    document.title = "AppTasks ✔️️ |  My Tasks";
  }, []);

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
        <Text color="gray.500">MyTasks</Text>
      </Box>
    </>
  );
}
