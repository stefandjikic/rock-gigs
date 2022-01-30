import { API_URL } from "../config/index";
import Link from "next/link";
import { Box, Button, Heading } from "@chakra-ui/react";
import Layout from "../components/layout/Layout";
import EventCard from "../components/EventCard";

export default function Home({ gigs }) {
  return (
    <Layout>
      <Heading as="h1" mb="8">Upcoming Gigs</Heading>
      {gigs && gigs.length > 0 ? (
        gigs?.map((gig) => (
          <EventCard key={gig.id} data={gig} />
        ))
      ): (
        <Box>There are no gigs at the moment.</Box>
      )}
      {gigs && gigs.length > 0 && (
        <Button mb="6" variant="outline">
          <Link href="/gigs">Show All Gigs</Link>
        </Button>
      )}
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/gigs`);
  const gigs = await res.json();

  return {
    props: { gigs: gigs.slice(0, 4) },
  };
}
