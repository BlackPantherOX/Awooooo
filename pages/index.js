import Gallery from "../components/blocks/gallery";
import HomePost from "../components/blocks/homepost";
import Hotels from "../components/blocks/hotels";
import Reviews from "../components/blocks/reviews";
import Welcome from "../components/blocks/welcome";
import * as constants from "../constants";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>{constants.SITE_NAME} Accommodation</title>
      </Head>
      <Welcome />
      <HomePost />
      <Hotels />
      <Reviews />
      <Gallery />
    </>
  );
};

export default Home;
