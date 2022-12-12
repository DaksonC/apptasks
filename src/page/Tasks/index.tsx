import {
  Box,
  Flex,
  Highlight,
  Spinner,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { getTasks, getTasksSearch } from "../../api/tasks";
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

  useEffect(() => {
    getAllTasks();
    document.title = "AppTasks ✔️️ |  Tasks";
  }, []);

  const dateAtual = new Date().toLocaleDateString();
  // console.log(dateAtual);

  async function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    const filteredTasks = await getTasksSearch(value);
    setTasks(filteredTasks);
    console.log(filteredTasks);
  }

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
            <Box mt={12}>
              <ModalCreateTask isOpenModal />
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
              <SearchBox onChange={(e) => handleInputChange(e)} />
              <Table variant="striped" colorScheme="blackAlpha" maxWidth="100%">
                <TableCaption placement="top">My Tasks</TableCaption>
                <Thead>
                  <Tr>
                    <Th>Project</Th>
                    <Th>Task</Th>
                    <Th>Create Date</Th>
                    <Th>Estimated time</Th>
                    <Th>Status</Th>
                    <Th>Action</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {tasks.map((task) => (
                    <Tr key={task.id}>
                      <Td>{task.title}</Td>
                      <Td>{task.description}</Td>
                      <Td>{dateAtual}</Td>
                      <Td>- hours</Td>
                      <Td>
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
                      </Td>
                      <Td>
                        <ModalEditTask isOpenModal taskId={task.id} />
                        <ModalDeleteTask isOpenModal taskId={task.id} />
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
