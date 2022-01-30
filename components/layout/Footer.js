import Link from "next/link";
import { Container, Flex, Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <footer>
      <Box
        py="6"
        bgColor="gray.900"
        color="gray.50"
        mt="6"
      >
        <Container maxW="container.xl">
          <Flex justify="center" align="center" direction="column">
            <Box _hover={{ color: "red.500" }} mb="1">
              <Link href="/about">About</Link>
            </Box>
            <Box fontSize="xs" color="gray.300">
              RockGigs {new Date().getFullYear()}. All rights reserved.
            </Box>
          </Flex>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
