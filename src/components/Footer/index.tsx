import { Box, Text } from "@chakra-ui/react";

export function Footer() {
  return (
    <Box
      w="100%"
      h="100px"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Text
        fontSize="2xs"
        fontWeight="bold"
        color="gray.500"
        textAlign="center"
        w="100%"
      >
        Copyright © 2021-2022 Dataside. All rights reserved.
      </Text>
    </Box>
  );
}
