import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
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
import { ModalCreateDepartaments } from "../../../components/ModalCreateDepartaments";
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
          >
            <Box mt={12}>
              <ModalCreateDepartaments isOpenModalDepartament />
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
              <Box w="100%" display="flex" justifyContent="flex-start">
                <SearchBox />
              </Box>
              <Table variant="striped" colorScheme="blackAlpha" maxWidth="100%">
                <TableCaption placement="top">
                  Settings Departaments
                </TableCaption>
                <Thead>
                  <Tr>
                    <Th>Departaments</Th>
                    <Th isNumeric>Action</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {departaments.map((departament) => (
                    <Tr key={departament.id}>
                      <Td>{departament.name}</Td>
                      <Td isNumeric>
                        <Button
                          bgColor="transparent"
                          _hover={{
                            bgColor: "gray.700",
                          }}
                        >
                          <EditIcon
                            color="blue.500"
                            cursor="pointer"
                            transition="color 0.2s"
                          />
                        </Button>
                        <Button
                          bgColor="transparent"
                          _hover={{
                            bgColor: "gray.700",
                          }}
                        >
                          <DeleteIcon
                            color="red.500"
                            cursor="pointer"
                            transition="color 0.2s"
                          />
                        </Button>
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
