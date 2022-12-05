import {
  Avatar,
  Box,
  Button,
  Table,
  TableCaption,
  TableContainer,
  Text,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Flex,
  Spinner,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { getUsers } from "../../../api/users";
import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import SearchBox from "../../../components/SearchBox";
import { IUsers } from "../../../interfaces";

export function Users() {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState<IUsers[]>([]);

  const getAllUsers = async (): Promise<void | Error> => {
    setIsLoading(true);
    try {
      const response = await getUsers();
      setUsers(response);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUsers();
    document.title = "AppTasks ✔️️ |  Users - Admin";
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
        {isLoading ? (
          <Spinner size="xl" speed="0.7s" />
        ) : (
          <Flex
            direction="column"
            w="100%"
            h="95%"
            maxW="1120px"
            mx="auto"
            my="auto"
            px="6"
          >
            <TableContainer
              bg="gray.800"
              borderRadius="8"
              boxShadow="lg"
              p="4"
              mt={24}
              overflowY="scroll"
              sx={{
                "::-webkit-scrollbar": {
                  width: "8px",
                  height: "8px",
                  backgroundColor: "gray.800",
                  borderRadius: "20px",
                },
                "::-webkit-scrollbar-thumb": {
                  backgroundColor: "gray.500",
                  borderRadius: "20px",
                },
                "::-webkit-scrollbar-corner": {
                  backgroundColor: "gray.800",
                  borderRadius: "20px",
                },
              }}
            >
              <SearchBox />
              <Table variant="striped" colorScheme="blackAlpha" maxWidth="100%">
                <TableCaption placement="top">User list</TableCaption>
                <Thead>
                  <Tr>
                    <Th>User</Th>
                    <Th>Departament</Th>
                    <Th isNumeric>Total tasks</Th>
                    <Th isNumeric>Action</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {users.map((user) => (
                    <Tr key={user.id}>
                      <Td>
                        <Box
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          flexDirection="column"
                        >
                          <Avatar
                            // name={user.name}
                            // src={user.avatar_url}
                            bg="gray.700"
                          />
                          <Text color="gray.500" fontSize="md" mt={1}>
                            {user.name}
                          </Text>
                        </Box>
                      </Td>
                      <Td>{user.departament.options}</Td>
                      <Td isNumeric>25</Td>
                      <Td isNumeric>
                        <Button colorScheme="facebook" size="sm">
                          Details
                        </Button>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </Flex>
        )}
      </Box>
      <Footer />
    </>
  );
}
