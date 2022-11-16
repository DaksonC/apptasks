import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Box,
  Grid,
  GridItem,
  Image,
  Text,
  Input,
  InputGroup,
  Button,
  InputRightElement,
  Icon,
  Link,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { theme } from "../../styles/theme";

export function LoginPage() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  useEffect(() => {
    document.title = "AppTasks ✔️️ | Conecte-se";
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
      <Box
        w="100%"
        h={{ "80%": "80%", "100%": "100%" }}
        maxW="460px"
        bg="gray.100"
        p="8"
        borderRadius="8"
        boxShadow={["none", "none", "lg"]}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          templateAreas={`
            "header header"
            "main main"
            "footer footer"`}
          gridTemplateRows="50px 1fr 30px"
          gridTemplateColumns="150px 1fr"
          w="100%"
          h="100%"
          gap="1"
          color="blackAlpha.700"
          fontWeight="bold"
        >
          <GridItem pl="2" area="header">
            <Box
              w="100%"
              h="100%"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Image src="/logo.svg" alt="Logo" w="70px" />
            </Box>
          </GridItem>
          <GridItem area="main" textAlign="center">
            <Text
              m="12"
              bgGradient="linear(to-l, #4028ca, #6e5faf)"
              bgClip="text"
              fontSize={["7xl", "2xl"]}
              fontWeight="extrabold"
            >
              Conecte-se
            </Text>
            <Box
              w="100%"
              h="100%"
              display="flex"
              alignItems="center"
              flexDirection="column"
            >
              <Box w="100%" textAlign="right">
                <Text
                  color={theme.colors.attention}
                  fontWeight="light"
                  fontSize="sm"
                >
                  <Link href="/register">Não sou cadastrado</Link>
                </Text>
              </Box>
              <Input
                pr="4.5rem"
                type="email"
                placeholder="E-mail"
                marginBottom={4}
              />
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Password"
                  marginBottom={4}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? (
                      <Icon as={ViewIcon} boxSize="1.5em" />
                    ) : (
                      <Icon as={ViewOffIcon} boxSize="1.5em" />
                    )}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <Button
                w="100%"
                h="50px"
                bgGradient="linear(to-l, #4028ca, #6e5faf)"
                color="white"
                _hover={{
                  bgGradient: "linear(to-l, #4028ca, #6e5faf)",
                  filter: "brightness(0.9)",
                }}
              >
                Entrar
              </Button>
            </Box>
          </GridItem>
          <GridItem area="footer" textAlign="center">
            <Text fontSize="md" fontWeight="extrabold">
              AppTasks ✔️️
            </Text>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}
