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
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { createUser } from "../../api/users";
import { SelectDepartaments } from "../../components/SelectDepartaments";
import { IUsers } from "../../interfaces";

export function RegisterPage() {
  const navigate = useNavigate();

  const [user, setUser] = useState<IUsers>({
    id: undefined,
    name: "",
    email: "",
    occupation: "",
    departament: {
      id: 0,
      name: "",
    },
  });

  function updateModal(e: React.ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  function updateDepartament(e: React.ChangeEvent<HTMLSelectElement>) {
    setUser({
      ...user,
      departament: {
        id: Number(e.target.value),
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  }

  async function onSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    const response = await createUser(user);
    console.log(response);
    navigate("/login");
    window.location.reload();
  }

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
      <form onSubmit={onSubmit}>
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
                  name="name"
                  value={user.name}
                  onChange={(e) => updateModal(e)}
                />
                <Input
                  pr="4.5rem"
                  type="email"
                  placeholder="E-mail"
                  marginBottom={4}
                  name="email"
                  value={user.email}
                  onChange={(e) => updateModal(e)}
                />
                <InputGroup size="md">
                  <Input
                    pr="4.5rem"
                    type="text"
                    placeholder="Occupation"
                    marginBottom={4}
                    name="occupation"
                    value={user.occupation}
                    onChange={(e) => updateModal(e)}
                  />
                </InputGroup>
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
                <SelectDepartaments
                  onChange={(e) => updateDepartament(e)}
                  name="departament"
                />
                <Button
                  w="100%"
                  h="50px"
                  bgGradient="linear(to-l, #4028ca, #6e5faf)"
                  color="white"
                  _hover={{
                    bgGradient: "linear(to-l, #4028ca, #6e5faf)",
                    filter: "brightness(0.9)",
                  }}
                  type="submit"
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
      </form>
    </Box>
  );
}
