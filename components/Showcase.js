import Image from "next/image";
import {
  Container,
  Box,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { AtSignIcon, CalendarIcon } from "@chakra-ui/icons";

const Showcase = ({ gig }) => {
  const headingColor = useColorModeValue("gray.50");
  return gig ? (
    <>
      <Box
        position="relative"
        backgroundImage="url('/images/maria-diva-roswita.jpg')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        height={{ base: "680", md: "500" }}
        w="full"
        mb="6"
      >
        <Container px="5" maxW="container.xl">
          <Box
            display="flex"
            flexDirection={{ base: "column", md: "row" }}
            height="500"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box my={{ base: "10", md: "0" }} textShadow="1px 1px #e53e3e">
              <Heading as="h1" color={headingColor} mb={{ base: 8, md: 36 }}>
                {gig.name || "n/a"}
              </Heading>
              <Box
                color={headingColor}
                display="flex"
                mb="4"
                fontSize={{ base: "md", md: "xl" }}
              >
                <AtSignIcon color="red.200" mr="3" mt="2" />
                <Text>
                  {gig.venue || "n/a"}
                  <br />
                  {gig.address || "n/a"}
                </Text>
              </Box>
              <Box
                color={headingColor}
                display="flex"
                alignItems="center"
                mb="4"
                fontSize={{ base: "md", md: "xl" }}
              >
                <CalendarIcon color="red.200" mr="3" />
                <Text>
                  {new Date(gig.date).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  }) || "n/a"}
                </Text>
              </Box>
            </Box>
            <Box>
              <Image width={300} height={320} src={gig.image} alt={gig.name} />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  ) : (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
      backgroundImage="url('/images/maria-diva-roswita.jpg')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      height="500"
      w="full"
      mb="6"
    >
      <Heading px="10" color={headingColor} textShadow="1px 1px #e53e3e">
        Discover rock and metal music events at the heart of Serbia
      </Heading>
    </Box>
  );
};

export default Showcase;
