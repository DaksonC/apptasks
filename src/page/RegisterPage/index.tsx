import { Box, Text } from "@chakra-ui/react";
import { useEffect } from "react";

export function RegisterPage() {
  useEffect(() => {
    document.title = "AppTasks ✔️️ | Cadastrar-se";
  }, []);

  return (
    <Box
      w="100vw"
      h="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgGradient="linear(to-t, gray.900, gray.600)"
    >
      <Text>Register Page</Text>
    </Box>
  );
}
