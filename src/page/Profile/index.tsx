import {
  Avatar,
  Box,
  Button,
  Flex,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useEffect } from "react";

import { Footer } from "../../components/Footer";
import { Sidebar } from "../../components/Sidebar";

export function Profile() {
  useEffect(() => {
    document.title = "AppTasks ✔️️ |  Profile";
  }, []);

  return (
    <>
      <Sidebar />
      <Box
        w="100%"
        h="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgGradient="linear(to-t, gray.900, gray.600)"
      >
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
              <Button colorScheme="facebook" mb={4}>
                Edit Profile
              </Button>
            </WrapItem>
          </Wrap>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
