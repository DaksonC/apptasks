import { InfoOutlineIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
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
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getTasks } from "../../api/tasks";
import { ITasks } from "../../interfaces";

interface IModalEditTaskProps {
  isOpenModal: boolean;
  userId: number | undefined;
}

export function ModalDetailsUser({ userId, isOpenModal }: IModalEditTaskProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [totalTasks, setTotalTasks] = useState<ITasks[]>([]);

  const navigate = useNavigate();

  function handleOpenModal() {
    if (isOpenModal) {
      navigate(`/admin/users/${userId}`);
      onOpen();
    }
  }

  useEffect(() => {
    (async () => {
      const totalTasks = await getTasks();
      setTotalTasks(totalTasks);
    })();
  }, []);

  const filterTotaTasks = totalTasks.length;

  return (
    <>
      <Button
        onClick={() => handleOpenModal()}
        bgColor="transparent"
        _hover={{
          bgColor: "gray.700",
        }}
      >
        <InfoOutlineIcon
          color="blue.500"
          cursor="pointer"
          transition="color 0.2s"
        />
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton color="gray.700" />
          <ModalBody>
            <TableContainer>
              <Table
                variant="striped"
                colorScheme="blackAlpha"
                backgroundColor="gray.900"
                borderRadius="md"
              >
                <TableCaption placement="top">
                  <Flex
                    flexDirection="row"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Text fontSize="md" mr={2}>
                      Details of the user,
                    </Text>
                    <Text fontSize="xl" fontWeight="bold">
                      Dakson Chaves Cruz.
                    </Text>
                  </Flex>
                </TableCaption>
                <Thead>
                  <Tr>
                    <Th>Status tasks</Th>
                    <Th isNumeric>Amount</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr color="gray.300">
                    <Td>Total</Td>
                    <Td isNumeric>{filterTotaTasks}</Td>
                  </Tr>
                  <Tr color="gray.500">
                    <Td>Completed</Td>
                    <Td isNumeric>1</Td>
                  </Tr>
                  <Tr color="gray.500">
                    <Td>In Progress</Td>
                    <Td isNumeric>1</Td>
                  </Tr>
                  <Tr color="gray.500">
                    <Td>Blocked</Td>
                    <Td isNumeric>1</Td>
                  </Tr>
                  <Tr color="gray.500">
                    <Td>Canceled</Td>
                    <Td isNumeric>-</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
