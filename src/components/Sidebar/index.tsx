import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Image,
  Button,
  Menu,
  MenuButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { NavLink as RouterLink } from "react-router-dom";

import SearchBox from "../SearchBox";

const Links = ["Dashboard", "Tasks", "Profile"];

interface INavLinkProps {
  children: ReactNode;
}

function NavLink({ children }: INavLinkProps) {
  return (
    <Link
      as={RouterLink}
      px={2}
      py={1}
      rounded="md"
      _activeLink={{
        color: "white",
        bg: useColorModeValue("gray.600", "gray.700"),
      }}
      to={`/${children}`}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.600", "gray.700"),
      }}
    >
      {children}
    </Link>
  );
}

export function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      w="100%"
      bg={useColorModeValue("gray.800", "gray.900")}
      px={8}
      pos="fixed"
      zIndex={1}
    >
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <IconButton
          backgroundColor="transparent !important"
          size="md"
          icon={
            isOpen ? (
              <CloseIcon color="blue.500" />
            ) : (
              <HamburgerIcon color="blue.500" />
            )
          }
          aria-label="Open Menu"
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems="center">
          <Box>
            <Image src="/logo.svg" alt="Logo" w="70px" />
          </Box>
          <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
            <SearchBox />
          </HStack>
        </HStack>
        <Flex alignItems="center">
          <Menu>
            <MenuButton
              as={Button}
              rounded="full"
              variant="link"
              cursor="pointer"
              minW={0}
            >
              <Avatar
                size="sm"
                src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
              />
            </MenuButton>
          </Menu>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as="nav" spacing={4}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
