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
} from "@chakra-ui/react";
import { useEffect } from "react";

import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";

export function Users() {
  useEffect(() => {
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
                <Tr>
                  <Td>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      flexDirection="column"
                    >
                      <Avatar
                        name="Segun Adebayo"
                        src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                      />
                      <Text color="gray.500" fontSize="md" mt={1}>
                        Maria da Silva
                      </Text>
                    </Box>
                  </Td>
                  <Td>Development</Td>
                  <Td isNumeric>25</Td>
                  <Td isNumeric>
                    <Button colorScheme="facebook" size="sm">
                      Details
                    </Button>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      flexDirection="column"
                    >
                      <Avatar
                        name="Dan Abrahmov"
                        src="https://bit.ly/dan-abramov"
                      />
                      <Text color="gray.500" fontSize="md" mt={1}>
                        Dan Abrahmov
                      </Text>
                    </Box>
                  </Td>
                  <Td>RPA</Td>
                  <Td isNumeric>30</Td>
                  <Td isNumeric>
                    <Button colorScheme="facebook" size="sm">
                      Details
                    </Button>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      flexDirection="column"
                    >
                      <Avatar
                        name="Segun Adebayo"
                        src="https://bit.ly/sage-adebayo"
                      />
                      <Text color="gray.500" fontSize="md" mt={1}>
                        Segun Adebayo
                      </Text>
                    </Box>
                  </Td>
                  <Td>IA</Td>
                  <Td isNumeric>15</Td>
                  <Td isNumeric>
                    <Button colorScheme="facebook" size="sm">
                      Details
                    </Button>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      flexDirection="column"
                    >
                      <Avatar
                        name="Segun Adebayo"
                        src="https://bit.ly/sage-adebayo"
                      />
                      <Text color="gray.500" fontSize="md" mt={1}>
                        Segun Adebayo
                      </Text>
                    </Box>
                  </Td>
                  <Td>IA</Td>
                  <Td isNumeric>15</Td>
                  <Td isNumeric>
                    <Button colorScheme="facebook" size="sm">
                      Details
                    </Button>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      flexDirection="column"
                    >
                      <Avatar
                        name="Segun Adebayo"
                        src="https://bit.ly/sage-adebayo"
                      />
                      <Text color="gray.500" fontSize="md" mt={1}>
                        Segun Adebayo
                      </Text>
                    </Box>
                  </Td>
                  <Td>IA</Td>
                  <Td isNumeric>15</Td>
                  <Td isNumeric>
                    <Button colorScheme="facebook" size="sm">
                      Details
                    </Button>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      flexDirection="column"
                    >
                      <Avatar
                        name="Segun Adebayo"
                        src="https://bit.ly/sage-adebayo"
                      />
                      <Text color="gray.500" fontSize="md" mt={1}>
                        Segun Adebayo
                      </Text>
                    </Box>
                  </Td>
                  <Td>IA</Td>
                  <Td isNumeric>15</Td>
                  <Td isNumeric>
                    <Button colorScheme="facebook" size="sm">
                      Details
                    </Button>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      flexDirection="column"
                    >
                      <Avatar
                        name="Segun Adebayo"
                        src="https://bit.ly/sage-adebayo"
                      />
                      <Text color="gray.500" fontSize="md" mt={1}>
                        Segun Adebayo
                      </Text>
                    </Box>
                  </Td>
                  <Td>IA</Td>
                  <Td isNumeric>15</Td>
                  <Td isNumeric>
                    <Button colorScheme="facebook" size="sm">
                      Details
                    </Button>
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
