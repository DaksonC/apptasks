import { Flex, Input } from "@chakra-ui/react";

interface ISearchBoxProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export default function SearchBox({ onChange, value }: ISearchBoxProps) {
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
        value={value}
      />
    </Flex>
  );
}
