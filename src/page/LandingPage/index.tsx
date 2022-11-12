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
import { useNavigate } from "react-router-dom";

import logo from "../../assets/logo.svg";

const animationKeyframes = keyframes`
  49% { transform: scale(1) rotate(360deg);  }
  49% { transform: scale(1) rotate(-360deg); }
`;

const animation = `${animationKeyframes} 11s ease-in-out infinite`;

export function LandingPage() {
  const navigate = useNavigate();

  function handleNavigateToLogin() {
    navigate("/login");
  }

  function handleNavigateToRegister() {
    navigate("/register");
  }

  return (
    <Box
      w="100vw"
      h="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgGradient="linear(to-t, gray.900, gray.600)"
    >
      <Stack
        direction={{ base: "column", lg: "row" }}
        spacing={2}
        align="center"
      >
        <Image
          src={logo}
          alt="logo"
          boxSize={{ base: "240px", md: "340px", lg: "440px" }}
          as={motion.img}
          animation={animation}
        />
        <Box>
          <Box marginBottom={4}>
            <Text fontSize={["4xl", "6xl"]} fontWeight="extrabold">
              AppTasks ✔️️
            </Text>
            <Container maxWidth="2xs" centerContent>
              <Text color="gray.500">
                Salve 💙dataholic, é aqui que vc se cadastra e cadastra suas
                tasks e acompanha o trampo de todos! 🚀💻☕
              </Text>
            </Container>
          </Box>
          <Stack direction="row" spacing={2} align="center">
            <Button
              colorScheme="facebook"
              variant="solid"
              onClick={() => handleNavigateToLogin()}
            >
              Entrar
            </Button>
            <Button
              colorScheme="facebook"
              variant="ghost"
              onClick={() => handleNavigateToRegister()}
            >
              Cadastrar-se
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
