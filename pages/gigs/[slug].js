import Image from "next/image";
import { Heading, Text, Grid } from "@chakra-ui/react";
import Layout from "../../components/layout/Layout";
import { API_URL } from "../../config";
import YoutubeEmbed from "../../components/YouTubeEmbed";

const SingleGigPage = ({ gig }) => {
  const {
    attributes: { name = "", bandName = "", content = "", youtubeUrl = "" },
  } = gig;

  const url = new URL(youtubeUrl);
  const ytId = url.searchParams.get("v") || null;

  return (
    <Layout
      title={name}
      singleGig={gig}
    >
      <Heading as="h2" fontSize="3xl" mt={{ base: "6", md: "10" }} mb="10">
        About {bandName}
      </Heading>
      <Grid templateColumns={{ base: "1fr", md: "2fr 1fr" }} gap={8}>
        <Text>{content}</Text>
        <YoutubeEmbed ytId={ytId} bandName={bandName} />
      </Grid>
    </Layout>
  );
};

export default SingleGigPage;

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/api/events?populate=image&filters[slug][$eq]=${slug}`);
  const gigs = await res.json();
  return {
    props: { gig: gigs.data[0] },
  };
}
