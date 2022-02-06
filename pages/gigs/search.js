const qs = require("qs");
import { useRouter } from "next/router";
import Link from "next/link";
import { API_URL } from "../../config/index";
import { Box, Heading } from "@chakra-ui/react";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import Layout from "../../components/layout/Layout";
import EventCard from "../../components/EventCard";

export default function SearchPage({ gigs }) {
  const router = useRouter();
  return (
    <Layout search>
      <Box display="flex" alignItems="center" mt={{ base: "4", md: "8" }}>
        <ArrowLeftIcon mr="2" />
        <Link href="/gigs">Go Back</Link>
      </Box>
      <Heading as="h1" fontSize="xl" mt="10" mb="8">
        Rezultat pretrage za &quot;{router.query.term}&quot;
      </Heading>
      {gigs && gigs.length > 0 ? (
        gigs?.map((gig) => <EventCard key={gig.id} data={gig} />)
      ) : (
        <Box>There are no results.</Box>
      )}
    </Layout>
  );
}

export async function getServerSideProps({ query: { term } }) {
  const query = qs.stringify({
    filters: {
      $or: [
        { name: { $contains: term } },
        { bandName: { $contains: term } },
        { venue: { $contains: term } },
        { address: { $contains: term } },
      ],
    },
  });
  const res = await fetch(`${API_URL}/api/events?populate=image&${query}`);
  const gigs = await res.json();

  return {
    props: { gigs: gigs.data },
  };
}
