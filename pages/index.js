import Gallery from "../components/blocks/gallery";
import HomePost from "../components/blocks/homepost";
import Hotels from "../components/blocks/hotels";
import Reviews from "../components/blocks/reviews";
import Welcome from "../components/blocks/welcome";

const Home = () => {
  return (
    <>
      <Welcome />
      <HomePost />
      <Hotels />
      <Reviews />
      <Gallery />
    </>
  );
};

export default Home;
