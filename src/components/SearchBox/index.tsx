import { SearchIcon } from "@chakra-ui/icons";
import { Flex, Icon, Input } from "@chakra-ui/react";

export default function SearchBox() {
  return (
    <Flex
      as="label"
      flex="1"
      py="4"
      px="12"
      ml="12"
      maxWidth={400}
      alignSelf="center"
      color="gray.200"
      position="relative"
      bg="gray.700"
      borderRadius="full"
    >
      <Input
        color="gray.50"
        variant="unstyled"
        px="4"
        mr="4"
        placeholder="Search"
        _placeholder={{ color: "gray.400" }}
      />
      <Icon as={SearchIcon} fontSize="20" />
    </Flex>
  );
}
