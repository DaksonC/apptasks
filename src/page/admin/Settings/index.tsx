import {
  Box,
  Button,
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

import { getDepartaments } from "../../../api/departaments";
import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import SearchBox from "../../../components/SearchBox";
import { IDepartaments } from "../../../interfaces";

export function Settings() {
  const [isLoading, setIsLoading] = useState(false);
  const [departaments, setDepartaments] = useState<IDepartaments[]>([]);

  const getAllDepartaments = async (): Promise<void | Error> => {
    setIsLoading(true);
    try {
      const response = await getDepartaments();
      setDepartaments(response);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllDepartaments();
    document.title = "AppTasks ✔️️ |  Settings - Admin";
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
            maxW="720px"
            mx="auto"
            my="auto"
            px="6"
            mt={12}
          >
            <Box mt={12}>{/* <ModalCreateTask isOpenModal /> */}</Box>
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
              <SearchBox />
              <Table variant="striped" colorScheme="blackAlpha" maxWidth="100%">
                <TableCaption placement="top">
                  Settings Departaments
                </TableCaption>
                <Thead>
                  <Tr>
                    <Th>Departaments</Th>
                    <Th>Action</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {departaments.map((departament) => (
                    <Tr key={departament.id}>
                      <Td>{departament.name}</Td>
                      <Td>
                        <Button type="button" colorScheme="facebook">
                          Edit
                        </Button>
                        <Button type="button" colorScheme="red">
                          Delete
                        </Button>
                      </Td>
                      <Td>
                        {/* <ModalEditTask isOpenModal taskId={task.id} />
                        <ModalDeleteTask isOpenModal taskId={task.id} /> */}
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
