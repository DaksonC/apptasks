import {
  Box,
  Flex,
  Highlight,
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import moment from "moment";
import { useEffect, useState } from "react";

import { getTasks } from "../../api/tasks";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ModalCreateTask } from "../../components/ModalCreateTask";
import { ModalDeleteTask } from "../../components/ModalDeleteTask";
import { ModalEditTask } from "../../components/ModalEditTask";
import SearchBox from "../../components/SearchBox";
import { ITasks } from "../../interfaces";

export function Tasks() {
  const [isLoading, setIsLoading] = useState(false);
  const [tasks, setTasks] = useState<ITasks[]>([]);
  const [search, setSearch] = useState("");

  const searchLowerCase = search.toLowerCase();

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchLowerCase)
  );

  const getAllTasks = async (): Promise<void | Error> => {
    setIsLoading(true);
    try {
      const response = await getTasks();

      setTasks(response);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  function formatDate(date: Date) {
    return moment(date).format("DD/MM/YYYY");
  }

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  useEffect(() => {
    getAllTasks();
    document.title = "AppTasks ✔️️ |  Tasks";
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
        <Flex
          direction="column"
          w="100%"
          h="95%"
          maxW="1120px"
          mx="auto"
          my="auto"
          px="6"
        >
          <Box mt={12}>
            <ModalCreateTask isOpenModal />
            <SearchBox onChange={(e) => handleSearch(e)} value={search} />
          </Box>
          <TableContainer
            bg="gray.800"
            borderRadius="8"
            boxShadow="lg"
            p="4"
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
            <Flex
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Text fontSize="2xl" fontWeight="bold" color="gray.50" mb="12">
                My Tasks
              </Text>
              {isLoading ? (
                <Spinner color="gray.50" size="xl" />
              ) : (
                <Table
                  variant="striped"
                  colorScheme="blackAlpha"
                  maxWidth="100%"
                >
                  <Thead>
                    <Tr>
                      <Th>Project</Th>
                      <Th>Task</Th>
                      <Th>Create Date</Th>
                      <Th>Status</Th>
                      <Th>Action</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {filteredTasks.map((task) => (
                      <Tr key={task.id}>
                        <Td>{task.title}</Td>
                        <Td>{task.description}</Td>
                        <Td>{formatDate(task.updated_at)}</Td>
                        <Td>
                          {task.finished ? (
                            <Highlight
                              query="Completed"
                              styles={{
                                px: "2",
                                py: "1",
                                rounded: "full",
                                bg: "green.500",
                                color: "white",
                              }}
                            >
                              Completed
                            </Highlight>
                          ) : (
                            <Highlight
                              query="In Progress"
                              styles={{
                                px: "2",
                                py: "1",
                                rounded: "full",
                                bg: "yellow.100",
                                color: "yellow.800",
                              }}
                            >
                              In Progress
                            </Highlight>
                          )}
                        </Td>
                        <Td>
                          <ModalEditTask isOpenModal taskId={task.id} />
                          <ModalDeleteTask isOpenModal taskId={task.id} />
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              )}
            </Flex>
          </TableContainer>
        </Flex>
      </Box>
      <Footer />
    </>
  );
}
