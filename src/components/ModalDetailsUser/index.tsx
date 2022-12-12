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
import { useNavigate } from "react-router-dom";

interface IModalEditTaskProps {
  isOpenModal: boolean;
  userId: number | undefined;
}

export function ModalDetailsUser({ userId, isOpenModal }: IModalEditTaskProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigate = useNavigate();

  function handleOpenModal() {
    if (isOpenModal) {
      navigate(`/admin/users/${userId}`);
      onOpen();
    }
  }

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
                  <Flex flexDirection="row">
                    <Text fontSize="md" p={2}>
                      Details of the user,
                    </Text>
                    <Text fontSize="md" fontWeight="bold" p={2}>
                      Dakson
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
                    <Td isNumeric>25</Td>
                  </Tr>
                  <Tr color="gray.500">
                    <Td>Completed</Td>
                    <Td isNumeric>20</Td>
                  </Tr>
                  <Tr color="gray.500">
                    <Td>In Progress</Td>
                    <Td isNumeric>2</Td>
                  </Tr>
                  <Tr color="gray.500">
                    <Td>To Do</Td>
                    <Td isNumeric>1</Td>
                  </Tr>
                  <Tr color="gray.500">
                    <Td>Blocked</Td>
                    <Td isNumeric>1</Td>
                  </Tr>
                  <Tr color="gray.500">
                    <Td>Canceled</Td>
                    <Td isNumeric>1</Td>
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
