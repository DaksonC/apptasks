import { SearchIcon } from "@chakra-ui/icons";
import { Flex, Icon, Input } from "@chakra-ui/react";

interface ISearchBoxProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchBox({ onChange }: ISearchBoxProps) {
  return (
    <Flex
      as="label"
      flex="1"
      w="100%"
      py="3"
      px="12"
      mb="4"
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
        onChange={onChange}
      />
      <Icon as={SearchIcon} fontSize="20" />
    </Flex>
  );
}
