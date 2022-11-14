import { Box, Button, Stack, Text } from "@chakra-ui/react";
import { useEffect } from "react";

import { theme } from "../../styles/theme";

export function NotFound() {
  useEffect(() => {
    document.title = "AppTasks ✔️️ | Not Found";
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
      <Stack direction="column" spacing={2} align="center">
        <Text color={theme.colors.attention} fontSize="7xl" fontWeight="bold">
          404 - Not Found 😩
        </Text>
        <Button
          as="a"
          href="/"
          colorScheme="blue"
          size="lg"
          ml="4"
          _hover={{ filter: "brightness(0.9)" }}
        >
          Voltar
        </Button>
      </Stack>
    </Box>
  );
}
