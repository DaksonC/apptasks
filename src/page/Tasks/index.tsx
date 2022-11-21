import {
  Box,
  Flex,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useEffect } from "react";

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
          <Text color="gray.500" fontSize="2xl" fontWeight="bold" mb="8">
            MyTasks
          </Text>
          <TableContainer bg="gray.800" borderRadius="8" boxShadow="lg" p="4">
            <Table variant="striped" colorScheme="blackAlpha">
              <TableCaption placement="top">
                Imperial to metric conversion factors
              </TableCaption>
              <Thead>
                <Tr>
                  <Th>To convert</Th>
                  <Th>into</Th>
                  <Th isNumeric>multiply by</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>inches</Td>
                  <Td>millimetres (mm)</Td>
                  <Td isNumeric>25.4</Td>
                </Tr>
                <Tr>
                  <Td>feet</Td>
                  <Td>centimetres (cm)</Td>
                  <Td isNumeric>30.48</Td>
                </Tr>
                <Tr>
                  <Td>yards</Td>
                  <Td>metres (m)</Td>
                  <Td isNumeric>0.91444</Td>
                </Tr>
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th>To convert</Th>
                  <Th>into</Th>
                  <Th isNumeric>multiply by</Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        </Flex>
      </Box>
    </>
  );
}
