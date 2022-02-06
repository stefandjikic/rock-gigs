import { API_URL } from "../../config/index";
import { Box, Heading } from "@chakra-ui/react";
import Layout from "../../components/layout/Layout";
import EventCard from "../../components/EventCard";

export default function GigsPage({ gigs }) {
  return (
    <Layout search>
      <Heading as="h1" mt="10" mb="8">
        All Gigs
      </Heading>
      {gigs && gigs.length > 0 ? (
        gigs?.map((gig) => <EventCard key={gig.id} data={gig} />)
      ) : (
        <Box>There are no gigs at the moment.</Box>
      )}
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/events?populate=image&sort=date:asc`);
  const gigs = await res.json();

  return {
    props: { gigs: gigs.data },
  };
}
