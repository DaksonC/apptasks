import { EditIcon } from "@chakra-ui/icons";
import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  Input,
  ModalFooter,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getDepartamentById, updateDepartament } from "../../api/departaments";
import { IDepartaments } from "../../interfaces";

interface IModalEditTaskProps {
  isOpenModalDepartament: boolean;
  departamentId: number;
}

export function ModalEditDepartaments({
  isOpenModalDepartament,
  departamentId,
}: IModalEditTaskProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [departament, setDepartament] = useState<IDepartaments>({
    id: 0,
    name: "",
  });

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      if (id !== undefined) {
        const response = await getDepartamentById(String(id));
        setDepartament({
          id: response.id,
          name: response.name,
        });
        // console.log(response);
      }
    })();
  }, [id]);

  function handleOpenModal() {
    if (isOpenModalDepartament) {
      navigate(`/departaments/${departamentId}`);
      onOpen();
    }
  }

  async function handleClickSave() {
    if (id !== undefined) {
      await updateDepartament(String(id), departament);
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
          <ModalHeader color="gray.700">Edit Departament</ModalHeader>
          <ModalCloseButton color="gray.700" />
          <ModalBody>
            <FormControl mb={4}>
              <Input
                placeholder="Departament"
                color="gray.800"
                name="name"
                value={departament.name}
                onChange={(e) =>
                  setDepartament({ ...departament, name: e.target.value })
                }
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
            <Button colorScheme="facebook" onClick={() => handleClickSave()}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
