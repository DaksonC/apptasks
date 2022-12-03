import { Box } from "@chakra-ui/react";
import { useEffect } from "react";

import { Footer } from "../../components/Footer";
import { GraphicCard } from "../../components/GraphicCard";
import { Header } from "../../components/Header";

export function Dashboard() {
  useEffect(() => {
    document.title = "AppTasks ✔️️ |  Dashboard - Admin";
  }, []);

  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
}
