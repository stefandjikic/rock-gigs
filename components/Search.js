import { useState } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Text,
  FormControl,
  Input,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const Search = () => {
  const router = useRouter();
  const [term, setTerm] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/gigs/search?term=${term}`);
    setTerm("");
    onClose();
  };

  return (
    <>
      <Box
        display={{ base: "none", md: "block" }}
        w={{ base: "130px", md: "400px" }}
      >
        <FormControl as="form" onSubmit={handleSubmit}>
          <Input
            size="xs"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            variant="flushed"
            placeholder="Search here..."
          />
        </FormControl>
      </Box>
      <Box
        onClick={onOpen}
        display={{ base: "flex", md: "none" }}
        alignItems="center"
        cursor="pointer"
      >
        <IconButton
          color="gray.500"
          mr="1"
          size="xs"
          aria-label="Search database"
          icon={<SearchIcon />}
        />
        <Text color="gray.600" fontSize="xs">
          Search here...
        </Text>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent p="4">
            <FormControl as="form" onSubmit={handleSubmit}>
              <Input
                size="lg"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                variant="flushed"
                placeholder="Search here..."
              />
            </FormControl>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
};

export default Search;
