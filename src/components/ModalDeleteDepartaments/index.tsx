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
import { useNavigate, useParams } from "react-router-dom";

import { deleteDepartament } from "../../api/departaments";

interface IModalEditDepartamentProps {
  isOpenModalDepartament: boolean;
  departamentId: number;
}

export function ModalDeleteDepartaments({
  departamentId,
  isOpenModalDepartament,
}: IModalEditDepartamentProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigate = useNavigate();

  const { id } = useParams();

  function handleOpenModal() {
    if (isOpenModalDepartament) {
      navigate(`/departaments/${departamentId}`);
      onOpen();
    }
  }

  async function handleClickDelete() {
    const response = await deleteDepartament(String(id));
    navigate("/departaments/");
    window.location.reload();
    onClose();
    console.log(response);
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
          <ModalHeader color="gray.700">Delete Task</ModalHeader>
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
            <Button colorScheme="red" onClick={() => handleClickDelete()}>
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
