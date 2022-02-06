import Head from "next/head";
import Router, { useRouter } from "next/router";
import { Container } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";
import Showcase from "../Showcase";

const Layout = ({ title, keywords, description, children, singleGig, search }) => {
  const router = useRouter();
  const renderShowcase = (route) => {
    if (route === "/") {
      return <Showcase />;
    } else if (route === "/gigs/[slug]") {
      return <Showcase gig={singleGig} />
    } else {
      return null;
    }
  };
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header search={search} />
      {renderShowcase(router.pathname)}
      <Container minH="80vh" maxW="container.xl">
        {children}
      </Container>
      <Footer />
    </div>
  );
};

export default Layout;

Layout.defaultProps = {
  title: "RockGigs | Discover awesome rock and metal events",
  description: "Discover latest rock and metal music events in Serbia",
  keywords:
    "rock, metal, music, events, gigs, shows, svirke, belgrade, beograd, srbija, serbia",
};
