import { Avatar, Badge, Box, Flex, Text } from "@chakra-ui/react";

export function HighlightCard() {
  return (
    <Box
      w="100%"
      h="50%"
      maxWidth="456px"
      maxHeight="250px"
      p="6"
      bgGradient="linear(to-r, blue.500, green.300)"
      borderRadius="8px"
      pb="4"
      pos="relative"
      boxShadow="dark-lg"
    >
      <Flex w="100%" h="150px" p="6">
        <Avatar src="https://bit.ly/sage-adebayo" />
        <Box ml="3">
          <Text fontWeight="bold">Segun Adebayo</Text>
          <Text fontSize="sm">UI Engineer</Text>
          <Box
            w="100%"
            h="100%"
            mt="2"
            p="2"
            borderRadius="8px"
            overflow="hidden"
          >
            <Text
              fontSize={["md", "lg"]}
              fontWeight="bold"
              borderBottom="1px solid white"
            >
              <Badge colorScheme="blue">Projeto:</Badge>
              AppTasks
            </Text>
            <Box>
              <Text fontSize="md" fontWeight="bold">
                <Badge colorScheme="blue">Descrição:</Badge>
                cria Home page
              </Text>
              <Box fontSize="sm">
                <Text>
                  <Badge colorScheme="green">Incio:</Badge>
                  16 de novembro de 2022
                  <Badge colorScheme="red">16:50</Badge>
                </Text>
                <Text>
                  <Badge colorScheme="green">Termino:</Badge>
                  16 de novembro de 2022
                  <Badge colorScheme="red">17:50</Badge>
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
