import { AddIcon } from "@chakra-ui/icons";
import {
  Button,
  FormControl,
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
import { useState } from "react";

// import api from "../../api";
import { createTask } from "../../api/tasks";

interface IModalCreateTaskProps {
  isOpenModal: boolean;
}

export interface ITask {
  title: string;
  description: string;
}

export function ModalCreateTask({ isOpenModal }: IModalCreateTaskProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [model, setModal] = useState<ITask>({
    title: "",
    description: "",
  });

  function handleOpenModal() {
    if (isOpenModal) {
      onOpen();
    }
  }

  function updateModal(e: React.ChangeEvent<HTMLInputElement>) {
    setModal({
      ...model,
      [e.target.name]: e.target.value,
    });
  }

  async function onSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    const response = await createTask(model);
    console.log(response);
    window.location.reload();
    onClose();
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
          <form onSubmit={onSubmit}>
            <ModalHeader color="gray.700">New Task</ModalHeader>
            <ModalCloseButton color="gray.700" />
            <ModalBody>
              <FormControl mb={4}>
                <Input
                  placeholder="Project name"
                  color="gray.800"
                  type="text"
                  name="title"
                  onChange={(e) => updateModal(e)}
                />
              </FormControl>
              <FormControl mb={4}>
                <Input
                  as="textarea"
                  rows={4}
                  placeholder="Description task"
                  color="gray.800"
                  type="text"
                  name="description"
                  onChange={(e) => updateModal(e)}
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
              <Button colorScheme="facebook" type="submit">
                Save
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}
