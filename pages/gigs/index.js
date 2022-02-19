import { API_URL, PER_PAGE } from "../../config/index";
import { Box, Heading } from "@chakra-ui/react";
import Layout from "../../components/layout/Layout";
import EventCard from "../../components/EventCard";
import Pagination from "../../components/Pagination";

export default function GigsPage({ gigs, page, total }) {
  return (
    <Layout search>
      <Heading as="h1" mt="10" mb="8">
        All Gigs
      </Heading>
      {gigs && gigs.length > 0 ? (
        <>
          {gigs?.map((gig) => (
            <EventCard key={gig.id} data={gig} />
          ))}
          <Pagination page={page} total={total} />
        </>
      ) : (
        <Box>There are no gigs at the moment.</Box>
      )}
    </Layout>
  );
}

export async function getServerSideProps({ query: { page = 1 } }) {
  const start = +page === 1 ? 0 : (+page - 1) * PER_PAGE;
  const res = await fetch(
    `${API_URL}/api/events?populate=image&sort=date:asc&pagination[start]=${start}&pagination[limit]=${PER_PAGE}`
  );
  const gigs = await res.json();
  const {
    meta: {
      pagination: { total },
    },
  } = gigs;

  return {
    props: { gigs: gigs.data, page: +page, total },
  };
}
