import {
  Box,
  Text,
  Image,
  Stack,
  Button,
  Container,
  keyframes,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

import logo from "../../assets/logo.svg";

const animationKeyframes = keyframes`
  49% { transform: scale(1) rotate(360deg);  }
  49% { transform: scale(1) rotate(-360deg); }
`;

const animation = `${animationKeyframes} 9s ease-in-out infinite`;

export function LandingPage() {
  return (
    <Box
      w="100%"
      h="100vh"
      bgGradient="linear(to-t, gray.900, gray.600)"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Image
        src={logo}
        alt="logo"
        boxSize="450px"
        as={motion.img}
        animation={animation}
      />
      <Box>
        <Box marginBottom={4}>
          <Text fontSize={["4xl", "6xl"]} fontWeight="extrabold">
            AppTasks
          </Text>
          <Container maxWidth="2xs" centerContent>
            <Text color="gray.500">
              Salve #dataholic! É aqui que vc cadastra suas #tasks e acompanha o
              trampo de todos! 🚀💻☕💙
            </Text>
          </Container>
        </Box>
        <Stack direction="row" spacing={2} align="center">
          <Button colorScheme="facebook" variant="solid">
            Entrar
          </Button>
          <Button colorScheme="facebook" variant="ghost">
            Casastrar-se
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
