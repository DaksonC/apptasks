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

import { createDepartament } from "../../api/departaments";
import { IDepartaments } from "../../interfaces";

interface IModalCreateDepartamentsProps {
  isOpenModalDepartament: boolean;
}

export function ModalCreateDepartaments({
  isOpenModalDepartament,
}: IModalCreateDepartamentsProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [model, setModal] = useState<IDepartaments>({
    id: 0,
    name: "",
  });

  function handleOpenModal() {
    if (isOpenModalDepartament) {
      onOpen();
    }
  }

  function updateModalDepartament(e: React.ChangeEvent<HTMLInputElement>) {
    setModal({
      ...model,
      [e.target.name]: e.target.value,
    });
  }

  async function onSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    const response = await createDepartament(model);
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
        <Text fontSize="md" fontWeight="bold">
          Departament
        </Text>
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={onSubmit}>
            <ModalHeader color="gray.700">New Departament</ModalHeader>
            <ModalCloseButton color="gray.700" />
            <ModalBody>
              <FormControl mb={4}>
                <Input
                  placeholder="Departament"
                  color="gray.800"
                  type="text"
                  name="name"
                  onChange={(e) => updateModalDepartament(e)}
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
