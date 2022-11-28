import { EditIcon } from "@chakra-ui/icons";
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
  useDisclosure,
} from "@chakra-ui/react";

export function ModalEditTask() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>
        <EditIcon
          color="blue.500"
          cursor="pointer"
          mr="8"
          transition="color 0.2s"
        />
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
