import Image from "next/image";
import { Heading, Text, Grid } from "@chakra-ui/react";
import Layout from "../../components/layout/Layout";
import { API_URL } from "../../config";
import YoutubeEmbed from "../../components/YouTubeEmbed";

const SingleGigPage = ({ gig }) => {
  const { name = "", bandName = "", content = "", ytId = "", image = "" } = gig;
  return (
    <Layout title={name} singleGig={gig}>
      <Heading as="h2" fontSize="3xl" mt={{ base: "6", md: "10" }} mb="10">
        About {bandName}
      </Heading>
      <Grid templateColumns={{ base: "1fr", md: "2fr 1fr" }} gap={6}>
        <Text>{content}</Text>
        <YoutubeEmbed ytId={ytId} bandName={bandName} />
      </Grid>
    </Layout>
  );
};

export default SingleGigPage;

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/api/gigs/${slug}`);
  const gigs = await res.json();
  return {
    props: { gig: gigs[0] },
  };
}
