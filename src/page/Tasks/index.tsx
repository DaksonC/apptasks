import { AddIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import api from "../../api";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ITasks } from "../../interfaces";

export function Tasks() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);
  const [tasks, setTasks] = useState<ITasks[]>([]);

  const getAllTasks = async (): Promise<void | Error> => {
    setIsLoading(true);
    try {
      const response = await api.get("/tasks");
      setTasks(response.data);
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
            <Button
              w={["sm", "9rem"]}
              colorScheme="facebook"
              size="lg"
              mt="6"
              mb="8"
              leftIcon={<AddIcon />}
              onClick={onOpen}
            >
              <Text fontSize="xl" fontWeight="bold">
                New Task
              </Text>
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader color="gray.700">New Task</ModalHeader>
                <ModalCloseButton color="gray.700" />
                <ModalBody>
                  <FormControl mb={4}>
                    <Input placeholder="Project" color="gray.800" />
                  </FormControl>
                  <FormControl mb={4}>
                    <Input placeholder="Task" color="gray.800" />
                  </FormControl>
                  <FormControl>
                    <FormLabel color="gray.700">Estimated time</FormLabel>
                    <Input
                      htmlSize={8}
                      placeholder="start"
                      width="auto"
                      mr={8}
                      color="gray.800"
                    />
                    <Input
                      htmlSize={8}
                      placeholder="final"
                      width="auto"
                      color="gray.800"
                    />
                  </FormControl>
                </ModalBody>
                <ModalFooter>
                  <Button
                    mr={3}
                    variant="ghost"
                    color="gray.700"
                    _hover={{ bg: "gray.300", color: "gray.700" }}
                    onClick={onClose}
                  >
                    Close
                  </Button>
                  <Button colorScheme="facebook">Save</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>

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
                        <EditIcon
                          color="blue.500"
                          cursor="pointer"
                          mr="8"
                          transition="color 0.2s"
                        />
                        <DeleteIcon
                          color="red.500"
                          cursor="pointer"
                          transition="all 0.2s"
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
