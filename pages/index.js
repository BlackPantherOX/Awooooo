import Gallery from "../components/blocks/gallery";
import HomePost from "../components/blocks/homepost";
import Hotels from "../components/blocks/hotels";
import Reviews from "../components/blocks/reviews";
import Socials from "../components/blocks/socials";

const Home = () => {
  return (
    <>
      <HomePost />
      <Hotels />
      <Reviews />
      <Gallery />
      <Socials />
    </>
  );
};

export default Home;
