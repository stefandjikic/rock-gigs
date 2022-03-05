import Link from "next/link";
import { Container, Flex, Box, useColorMode, HStack } from "@chakra-ui/react";
import { MoonIcon } from "@chakra-ui/icons";
import Search from "../Search";

const Header = ({ search }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      <Box bgColor="gray.900" color="gray.50">
        <Container py={6} maxW="container.xl">
          <Flex justify="space-between">
            <Box>
              <Link href="/" passHref>
                <Box color="red.500" fontWeight="bold" cursor="pointer">
                  RockGigs
                </Box>
              </Link>
            </Box>
            {search && <Search />}
            <Box as="nav">
              <HStack spacing={{ base: 3, md: 6 }}>
                <Box _hover={{ color: "red.500" }}>
                  <Link href="/gigs">All Gigs</Link>
                </Box>
                <Box _hover={{ color: "red.500" }}>
                  <Link href="/gigs/add">Add Gig</Link>
                </Box>
                <MoonIcon
                  _hover={{ cursor: "pointer" }}
                  onClick={toggleColorMode}
                  color={colorMode === "light" ? "gray.700" : "gray.50"}
                />
              </HStack>
            </Box>
          </Flex>
        </Container>
      </Box>
    </header>
  );
};

export default Header;
