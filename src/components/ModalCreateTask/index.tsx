import { AddIcon } from "@chakra-ui/icons";
import {
  Button,
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
  Text,
  useDisclosure,
} from "@chakra-ui/react";

interface IModalCreateTaskProps {
  isOpenModal: boolean;
}

export function ModalCreateTask({ isOpenModal }: IModalCreateTaskProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  function handleOpenModal() {
    if (isOpenModal) {
      onOpen();
    }
  }

  return (
    <>
      <Button
        w={["sm", "9rem"]}
        colorScheme="facebook"
        size="lg"
        mt="6"
        mb="8"
        leftIcon={<AddIcon />}
        onClick={() => handleOpenModal()}
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
    </>
  );
}
