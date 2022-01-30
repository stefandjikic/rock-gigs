import { useRouter } from "next/router";
import { Heading } from "@chakra-ui/react";
import Layout from "../../components/layout/Layout";

const SingleGigPage = () => {
  const router = useRouter();
  return (
    <Layout>
      <Heading as="h1">{router.query.slug}</Heading>
    </Layout>
  );
};

export default SingleGigPage;
