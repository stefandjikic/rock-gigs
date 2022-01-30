import Head from "next/head";
import Router, { useRouter } from "next/router";
import { Container } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";
import Showcase from "../Showcase";

const Layout = ({ title, keywords, description, children }) => {
  const router = useRouter();
  const renderShowcase = (route) => {
    if (route === "/about" || route === "/gigs" || route === "/404") {
      return null;
    } else {
      return <Showcase />;
    }
  };
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
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
