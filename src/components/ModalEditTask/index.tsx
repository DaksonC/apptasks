import { EditIcon } from "@chakra-ui/icons";
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
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { finishedTask, getTaskById, updateTask } from "../../api/tasks";

interface IModalEditTaskProps {
  isOpenModal: boolean;
  taskId: number;
}

interface ITask {
  title: string;
  description: string;
}

export function ModalEditTask({ isOpenModal, taskId }: IModalEditTaskProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [task, setTask] = useState<ITask>({
    title: "",
    description: "",
  });

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      if (id !== undefined) {
        const response = await getTaskById(String(id));
        setTask({
          title: response.title,
          description: response.description,
        });
        // console.log(response);
      }
    })();
  }, [id]);

  function handleOpenModal() {
    if (isOpenModal) {
      navigate(`/tasks/${taskId}`);
      onOpen();
    }
  }

  async function handleCompletedTask() {
    if (id !== undefined) {
      await finishedTask(String(id));
      window.location.reload();
      onClose();
    }
  }

  async function handleClickSave() {
    if (id !== undefined) {
      await updateTask(String(id), task);
      window.location.reload();
      onClose();
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
        <EditIcon color="blue.500" cursor="pointer" transition="color 0.2s" />
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="gray.700">Edit Task</ModalHeader>
          <ModalCloseButton color="gray.700" />

          <ModalBody>
            <FormControl mb={4}>
              <Input
                placeholder="Project name"
                color="gray.800"
                name="title"
                value={task.title}
                onChange={(e) => setTask({ ...task, title: e.target.value })}
              />
            </FormControl>
            <FormControl mb={4}>
              <Input
                as="textarea"
                rows={4}
                placeholder="Description task"
                color="gray.800"
                name="description"
                value={task.description}
                onChange={(e) =>
                  setTask({ ...task, description: e.target.value })
                }
              />
              <Button
                mt={4}
                variant="ghost"
                bg="green.500"
                color="white"
                _hover={{ bg: "green.100", color: "gray.500" }}
                onClick={() => handleCompletedTask()}
              >
                Complete task
              </Button>
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
            <Button colorScheme="facebook" onClick={() => handleClickSave()}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
