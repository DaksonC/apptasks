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
  Text,
  Spinner,
} from "@chakra-ui/react";
import { ReactNode, useEffect, useState } from "react";
import { NavLink as RouterLink, useNavigate } from "react-router-dom";

const Links = ["Dashboard", "Tasks", "Profile", "Users", "Settings"];

interface INavLinkProps {
  children: ReactNode;
}

function NavLink({ children }: INavLinkProps) {
  function NavLinkRoutes() {
    switch (children) {
      case "Dashboard":
        return "/dashboard";
      case "Tasks":
        return "/tasks";
      case "Profile":
        return "/profile";
      case "Users":
        return "/admin/users";
      case "Settings":
        return "/admin/settings";
      default:
        return "/";
    }
  }

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
      to={NavLinkRoutes()}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.600", "gray.700"),
      }}
    >
      {children}
    </Link>
  );
}

export function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    try {
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  function handleClick() {
    setIsLoading(true);
    try {
      navigate("/profile");
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

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
          size="lg"
          icon={
            isOpen ? (
              <CloseIcon color="gray.700" />
            ) : (
              <HamburgerIcon color="gray.700" />
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
              _hover={{
                textDecoration: "none",
              }}
              onClick={() => handleClick()}
            >
              {isLoading ? (
                <Spinner size="md" speed="0.7s" />
              ) : (
                <Flex
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Flex display={{ base: "none", md: "flex" }}>
                    <Text fontSize="2xs" fontWeight="bold" color="blue.500">
                      Dakson Chaves Cruz
                    </Text>
                  </Flex>
                  <Avatar
                    size="sm"
                    ml={4}
                    src="https://avatars.githubusercontent.com/u/81385265?v=4"
                  />
                </Flex>
              )}
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
