import { Box } from "@chakra-ui/react";
import { useEffect } from "react";

import { GraphicCard } from "../../components/GraphicCard";
import { Sidebar } from "../../components/Sidebar";

export function Dashboard() {
  useEffect(() => {
    document.title = "AppTasks ✔️️ |  Dashboard";
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
        <GraphicCard />
      </Box>
    </>
  );
}
