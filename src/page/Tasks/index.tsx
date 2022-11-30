import {
  Box,
  Flex,
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

import { getTasks } from "../../api/tasks";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ModalCreateTask } from "../../components/ModalCreateTask";
import { ModalDeleteTask } from "../../components/ModalDeleteTask";
import { ModalEditTask } from "../../components/ModalEditTask";
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

  const creatDate = tasks.map((task) => task.created_at);
  const finishedDate = tasks.map((task) => task.finished_at);
  const date = new Date(String(creatDate)).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  const dateDiff =
    new Date(String(finishedDate)).getTime() -
    new Date(String(creatDate)).getTime();
  const hourDiff = Math.floor(dateDiff / (1000 * 60 * 60));

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
        {isLoading ? (
          <Spinner size="xl" speed="0.7s" />
        ) : (
          <Flex direction="column" w="100%" maxW="1120px" mx="auto" px="6">
            <ModalCreateTask isOpenModal />
            <TableContainer bg="gray.800" borderRadius="8" boxShadow="lg" p="4">
              <Table variant="striped" colorScheme="blackAlpha">
                <TableCaption placement="top">My Tasks</TableCaption>
                <Thead>
                  <Tr>
                    <Th>Project</Th>
                    <Th>Task</Th>
                    <Th>Create Date</Th>
                    <Th>Estimated time</Th>
                    <Th>Action</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {tasks.map((task) => (
                    <Tr key={task.user_id}>
                      <Td>{task.title}</Td>
                      <Td>{task.description}</Td>
                      <Td>{date}</Td>
                      {hourDiff > 1 ? (
                        <Td>{hourDiff} hours</Td>
                      ) : (
                        <Td>{hourDiff} hour</Td>
                      )}
                      <Td>
                        <ModalEditTask isOpenModal />
                        <ModalDeleteTask isOpenModal />
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
