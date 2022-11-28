import { DeleteIcon } from "@chakra-ui/icons";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

interface IModalEditTaskProps {
  isOpenModal: boolean;
}

export function ModalDeleteTask({ isOpenModal }: IModalEditTaskProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  function handleOpenModal() {
    if (isOpenModal) {
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
        <DeleteIcon color="red.500" cursor="pointer" transition="color 0.2s" />
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="gray.700">New Task</ModalHeader>
          <ModalCloseButton color="gray.700" />
          <ModalBody>
            <Text fontSize="xl" fontWeight="bold" color="gray.500">
              Are you sure you want to delete this task?
            </Text>
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
            <Button colorScheme="red">Delete</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
