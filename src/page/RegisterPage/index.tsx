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
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

import { createUser } from "../../api/users";
import { IUsers } from "../../interfaces";

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required().length(6),
  confirmPassword: yup
    .string()
    .required()
    .length(6)
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export function RegisterPage() {
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUsers>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IUsers> = (user) => {
    createUser(user);
    navigate("/login");
    window.location.reload();
  };

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          w="100%"
          h="100%"
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
                letterSpacing="tight"
                mb={2}
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
                  marginBottom={2}
                  {...register("name")}
                />
                <Text color="red.300" fontSize="sm" fontWeight="100" mb={4}>
                  {errors.name?.message}
                </Text>
                <Input
                  pr="4.5rem"
                  type="email"
                  placeholder="E-mail"
                  marginBottom={2}
                  {...register("email")}
                />
                <Text color="red.300" fontSize="sm" fontWeight="100" mb={4}>
                  {errors.email?.message}
                </Text>
                <InputGroup size="md">
                  <Input
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    placeholder="Password"
                    marginBottom={2}
                    {...register("password")}
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
                <Text color="red.300" fontSize="sm" fontWeight="100" mb={4}>
                  {errors.password?.message}
                </Text>
                <InputGroup size="md">
                  <Input
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    placeholder="Confirm Password"
                    marginBottom={2}
                    {...register("confirmPassword")}
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
                <Text color="red.300" fontSize="sm" fontWeight="100" mb={4}>
                  {errors.confirmPassword?.message}
                </Text>
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
