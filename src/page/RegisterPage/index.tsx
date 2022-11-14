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
  Select,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export function RegisterPage() {
  useEffect(() => {
    document.title = "AppTasks ✔️️ | Cadastrar-se";
  }, []);

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

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
              bgGradient="linear(to-l, #4028ca, #6e5faf)"
              bgClip="text"
              fontSize={["7xl", "2xl"]}
              fontWeight="extrabold"
            >
              Cadastrar-se
            </Text>
            <Box
              w="100%"
              h="100%"
              display="flex"
              alignItems="center"
              flexDirection="column"
            >
              <Input
                pr="4.5rem"
                type="text"
                placeholder="Nome de usuário"
                marginBottom={4}
              />
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
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Confirmar password"
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
              <Select placeholder="Departamento" marginBottom={4}>
                <option value="option1">Development</option>
                <option value="option2">AI</option>
                <option value="option3">RPA</option>
              </Select>
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
                Cadastrar
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
