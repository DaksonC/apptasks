import { AddIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useEffect } from "react";

import { Footer } from "../../components/Footer";
import { Sidebar } from "../../components/Sidebar";

export function Tasks() {
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
            as="a"
            w={["sm", "9rem"]}
            colorScheme="facebook"
            size="lg"
            mt="6"
            mb="8"
            leftIcon={<AddIcon />}
            href="/tasks/create"
          >
            <Text fontSize="xl" fontWeight="bold">
              New Task
            </Text>
          </Button>
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
