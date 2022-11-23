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
import { useEffect } from "react";

import { Footer } from "../../components/Footer";
import { Sidebar } from "../../components/Sidebar";

export function Tasks() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    document.title = "AppTasks ✔️️ |  Tasks";
  }, []);

  return (
    <>
      <Sidebar />
      <Box
        w="100%"
        h="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgGradient="linear(to-t, gray.900, gray.600)"
      >
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
                  <Th>Time</Th>
                  <Th>Action</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>AppTasks</Td>
                  <Td>cria tela Dashboard</Td>
                  <Td>1h</Td>
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
                <Tr>
                  <Td>Foguete</Td>
                  <Td>CRUD</Td>
                  <Td>12h</Td>
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
                <Tr>
                  <Td>AppTasks</Td>
                  <Td>integração</Td>
                  <Td>6h</Td>
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
              </Tbody>
            </Table>
          </TableContainer>
        </Flex>
      </Box>
      <Footer />
    </>
  );
}
