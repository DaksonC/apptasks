import { DownloadIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Flex,
  FormControl,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Spinner,
  Text,
  useDisclosure,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

export function Profile() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    document.title = "AppTasks ✔️️ |  Profile";
    setIsLoading(false);
  }, []);

  return (
    <>
      <Header />
      <Box
        w="100%"
        h="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgGradient="linear(to-t, gray.900, gray.600)"
      >
        {isLoading ? (
          <Spinner size="xl" speed="0.7s" />
        ) : (
          <Box
            w={["100%", "100%", "100%", "30%"]}
            maxWidth="550px"
            h={["80%"]}
            maxHeight="450px"
            bg="gray.800"
            borderRadius="lg"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Box
              w="100%"
              h="38%"
              backgroundColor="blue.900"
              borderTopEndRadius="lg"
              borderTopStartRadius="lg"
            />
            <Wrap
              w="100%"
              h="100%"
              mt="-150px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              spacing="20px"
              direction={["column"]}
            >
              <WrapItem justifyContent="center">
                <Avatar
                  size="4xl"
                  name="Dani Abrahmov"
                  src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                />
              </WrapItem>
              <WrapItem justifyContent="center">
                <Flex direction="column" alignItems="center">
                  <Text
                    fontSize="2xl"
                    fontWeight="bold"
                    color="gray.100"
                    textAlign="center"
                  >
                    Dani Abrahmov
                  </Text>
                  <Text fontSize="md" color="gray.300" textAlign="center">
                    Front-end Developer
                  </Text>
                </Flex>
              </WrapItem>
              <WrapItem w="100%" justifyContent="center" m={2}>
                <Button colorScheme="facebook" mb={4} onClick={onOpen}>
                  Edit Profile
                </Button>
                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader color="gray.700">
                      <Box
                        w="100%"
                        h="100%"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        flexDirection="column"
                      >
                        <Text fontSize="4xl" color="gray.700" m={4}>
                          Edit Profile
                        </Text>
                        <Avatar
                          size="4xl"
                          name="Dani Abrahmov"
                          mb="20px"
                          src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                        />
                        <Button
                          leftIcon={<DownloadIcon />}
                          color="gray.500"
                          _hover={{ bg: "gray.300", color: "gray.700" }}
                        >
                          Update image
                        </Button>
                      </Box>
                    </ModalHeader>
                    <ModalCloseButton color="gray.700" />
                    <ModalBody>
                      <FormControl mb={4}>
                        <Input
                          placeholder="Name"
                          color="gray.800"
                          fontSize="lg"
                        />
                      </FormControl>
                      <FormControl mb={4}>
                        <Input
                          placeholder="Position"
                          color="gray.800"
                          fontSize="lg"
                        />
                      </FormControl>
                      <FormControl mb={4}>
                        <Select
                          placeholder="Departament"
                          marginBottom={4}
                          color="gray.700"
                        >
                          <option value="option1">Development</option>
                          <option value="option2">AI</option>
                          <option value="option3">RPA</option>
                        </Select>
                      </FormControl>
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        mr={3}
                        variant="ghost"
                        color="gray.500"
                        _hover={{ bg: "gray.300", color: "gray.700" }}
                        onClick={onClose}
                      >
                        Close
                      </Button>
                      <Button colorScheme="facebook">Save</Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </WrapItem>
            </Wrap>
          </Box>
        )}
      </Box>
      <Footer />
    </>
  );
}
