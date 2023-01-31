import {
  Avatar,
  Box,
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

import { getTasks } from "../../../api/tasks";
import { getUsers } from "../../../api/users";
import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { ModalDetailsUser } from "../../../components/ModalDetailsUser";
import SearchBox from "../../../components/SearchBox";
import { ITasks, IUsers } from "../../../interfaces";

export function Users() {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState<IUsers[]>([]);
  const [totalTasks, setTotalTasks] = useState<ITasks[]>([]);
  const [search, setSearch] = useState("");

  const searchLowerCase = search.toLowerCase();

  const filteredUser = users.filter((user) =>
    user.name.toLowerCase().includes(searchLowerCase)
  );

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

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

  async function handleTotalTasks() {
    const totalTasks = await getTasks();
    setTotalTasks(totalTasks);
  }

  useEffect(() => {
    getAllUsers();
    handleTotalTasks();
    document.title = "AppTasks ✔️️ |  Users - Admin";
  }, []);

  const filterTotaTasks = totalTasks.length;

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
              <SearchBox onChange={(e) => handleSearch(e)} value={search} />
              <Table variant="striped" colorScheme="blackAlpha" maxWidth="100%">
                <TableCaption placement="top">Users list</TableCaption>
                <Thead>
                  <Tr>
                    <Th>Users</Th>
                    <Th>Departament</Th>
                    <Th isNumeric>Total tasks</Th>
                    <Th isNumeric>Action</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {filteredUser.map((user) => (
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
                            src="https://avatars.githubusercontent.com/u/81385265?v=4"
                            bg="gray.700"
                          />
                          <Text color="gray.500" fontSize="md" mt={1}>
                            {user.name}
                          </Text>
                          <Text color="gray.700" fontSize="sm" mt={1}>
                            {user.occupation}
                          </Text>
                        </Box>
                      </Td>
                      <Td>Development</Td>
                      <Td isNumeric>{filterTotaTasks}</Td>
                      <Td isNumeric>
                        <ModalDetailsUser
                          isOpenModal
                          userId={user.id}
                          name={user.name}
                        />
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
