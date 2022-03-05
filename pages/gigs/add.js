import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  Grid,
  Box,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../../components/layout/Layout";
import { API_URL } from "../../config";

const AddGigPage = () => {
  const [values, setValues] = useState({
    name: "",
    // image: "",
    bandName: "",
    venue: "",
    address: "",
    date: "",
    content: "",
    youtubeUrl: "",
    time: "",
  });
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emptyFields = Object.values(values).some((v) => v === "");
    if (emptyFields) {
      toast.error("Please fill in empty fields");
    } else {
      console.log(values);
      const res = await fetch(`${API_URL}/api/events`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: values }),
      });
      if (!res.ok) {
        toast.error("Something went wrong");
      } else {
        toast.success("New Gig Added");
        setValues({
          name: "",
          // image: "",
          bandName: "",
          venue: "",
          address: "",
          date: "",
          content: "",
          youtubeUrl: "",
          time: "",
        });
        setTimeout(() => {
          router.push("/gigs");
        }, 1500);
      }
    }
  };

  const handleInput = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <Layout title="Add new gig">
      <Box display="flex" alignItems="center" mt={{ base: "4", md: "8" }}>
        <ArrowLeftIcon mr="2" />
        <Link href="/gigs">Go Back</Link>
      </Box>
      <Heading as="h1" fontSize="xl" mt="10" mb="8">
        Add new Gig
      </Heading>
      <ToastContainer hideProgressBar="false" autoClose="3000" />
      <FormControl as="form" onSubmit={handleSubmit}>
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <Box>
            <FormLabel htmlFor="name">Event name</FormLabel>
            <Input
              id="name"
              type="text"
              name="name"
              value={values.name}
              onChange={handleInput}
            />
          </Box>
          <Box>
            <FormLabel htmlFor="bandName">Band name</FormLabel>
            <Input
              id="bandName"
              type="text"
              name="bandName"
              value={values.bandName}
              onChange={handleInput}
            />
          </Box>
          <Box>
            <FormLabel htmlFor="venue">Venue</FormLabel>
            <Input
              id="venue"
              type="text"
              name="venue"
              value={values.venue}
              onChange={handleInput}
            />
          </Box>
          <Box>
            <FormLabel htmlFor="name">Address</FormLabel>
            <Input
              id="address"
              type="text"
              name="address"
              value={values.address}
              onChange={handleInput}
            />
          </Box>
          <Box>
            <FormLabel htmlFor="date">Date</FormLabel>
            <Input
              id="date"
              type="date"
              name="date"
              value={values.date}
              onChange={handleInput}
            />
          </Box>
          <Box>
            <FormLabel htmlFor="time">Time</FormLabel>
            <Input
              id="time"
              type="text"
              name="time"
              value={values.time}
              onChange={handleInput}
            />
          </Box>
          <Box>
            <FormLabel htmlFor="youtubeUrl">YouTube URL</FormLabel>
            <Input
              id="youtubeUrl"
              type="text"
              name="youtubeUrl"
              value={values.youtubeUrl}
              onChange={handleInput}
            />
          </Box>
        </Grid>
        <Box my={6}>
          <Text>Content</Text>
          <Textarea
            id="content"
            name="content"
            value={values.content}
            onChange={handleInput}
          />
        </Box>
        <Input type="submit" value="Add Gig" />
      </FormControl>
    </Layout>
  );
};

export default AddGigPage;
