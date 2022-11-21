import { Box, Text } from "@chakra-ui/react";
import { useEffect } from "react";

import { Sidebar } from "../../components/Sidebar";

export function Profile() {
  useEffect(() => {
    document.title = "AppTasks ✔️️ |  Profile";
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
        <Text color="gray.500">Profile</Text>
      </Box>
    </>
  );
}
