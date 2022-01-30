import Link from "next/link";
import { Container, Flex, Box, useColorMode, HStack } from "@chakra-ui/react";
import { MoonIcon } from "@chakra-ui/icons";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      <Box bgColor="gray.900" color="gray.50">
        <Container py={6} maxW="container.xl">
          <Flex justify="space-between">
            <Box>
              <Link href="/">RockGigs</Link>
            </Box>
            <nav>
              <HStack spacing={6}>
                <Box _hover={{ color: "red.500" }}>
                  <Link href="/gigs">All Gigs</Link>
                </Box>
                <MoonIcon
                  _hover={{ cursor: "pointer"}}
                  onClick={toggleColorMode}
                  color={colorMode === "light" ? "gray.700" : "gray.50"}
                />
              </HStack>
            </nav>
          </Flex>
        </Container>
      </Box>
    </header>
  );
};

export default Header;
