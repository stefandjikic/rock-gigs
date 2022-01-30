import { Box, Heading, useColorModeValue } from "@chakra-ui/react";

const Showcase = () => {
 const headingColor = useColorModeValue("gray.50")
  return (
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
      <Heading color={headingColor} textShadow="1px 1px #e53e3e">
        Discover rock and metal music events at the heart of Serbia
      </Heading>
    </Box>
  );
};

export default Showcase;
