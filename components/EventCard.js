import Image from "next/image";
import { Flex, Box, Heading, Text, Button } from "@chakra-ui/react";
import { InfoOutlineIcon, TimeIcon } from "@chakra-ui/icons";
import defaultImg from "../public/images/israel-palacio.jpg";
import Link from "next/link";

const EventCard = ({ data }) => {
  return (
    <Flex
      flexDirection={{ base: "column", md: "row" }}
      mb="6"
      mt="3"
      height={{ base: "auto", md: "180px" }}
    >
      <Box w="200px" mr="6">
        <Image
          src={data.image || defaultImg}
          alt="band image"
          width={180}
          height={180}
        />
      </Box>
      <Box
        height={{ base: "auto", md: "180px" }}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Heading as="h2" mb="6">
          {data.name || "/"}
        </Heading>
        <Box display="flex" alignItems="center" mb="1">
          <InfoOutlineIcon mr="2" />
          <Text size="sm">
            {data.venue || "n/a"}, {data.address || "n/a"}
          </Text>
        </Box>
        <Box display="flex" alignItems="center" mb="2">
          <TimeIcon mr="2" />
          <Text size="sm">{data.date || "n/a"}</Text>
        </Box>
        <Link href={`/gigs/${data.slug}`} passHref>
          <Button width="150px">Details</Button>
        </Link>
      </Box>
    </Flex>
  );
};

export default EventCard;
