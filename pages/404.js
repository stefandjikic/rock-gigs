import { Box, Heading, VStack } from "@chakra-ui/react";
import Link from "next/link";
import Layout from "../components/layout/Layout";
import Router, { useRouter } from "next/router";

const NotFoundPage = () => {
  const router = useRouter()
  console.log(router);
  return (
    <Layout>
      <VStack>
        <Box maxW="450" textAlign="center" mt="36">
          <Heading fontSize="9xl" as="h1">
            404
          </Heading>
          <Heading as="h2" mb="4">
            Oops! It seems like you are in the wrong place
          </Heading>
        </Box>
        <Box _hover={{ color: "red.500"}}>
          <Link href="/">Go Home</Link>
        </Box>
      </VStack>
    </Layout>
  );
};

export default NotFoundPage;
