import * as constants from "../constants";
import Head from "next/head";
import TourPics from "../components/blocks/tour";

const images2 = ["bungee", "hippo", "giraffe", "gorilla"];
const images1 = ["lions", "zebra", "elephants", "antelop"];

const Tours = () => {
  return (
    <div className="pt-56 bg-light pb-10">
      <Head>
        <title>Tours - {constants.SITE_NAME} Accommodation</title>
      </Head>
      <h1 className="font-bold text-5xl pb-3 mb-3 text-blue-900 border-b border-dotted max-w-4xl mx-auto">
        Tours
      </h1>

      {/* tour images 2 */}
      <TourPics images={images1} />

      <div className="space-y-5 max-w-3xl mx-auto leading-9 mt-5 tracking-wide font-light">
        <p>
          Uganda is a small and landlocked country but still one of the best
          countries to go to for a safari in Africa. Uganda is blessed with
          incredible biodiversity, good weather, friendly people and amazing
          wildlife. Uganda has the largest population of mountain gorillas and
          is also the best country to track chimpanzees in Africa.{" "}
        </p>

        <p>
          The main activities while on a safari in Uganda include gorilla
          trekking, visiting the equator crossing, general wildlife viewing
          (including all the big 5), chimpanzee trekking, golden monkey
          tracking, birdwatching, visiting the source of the river Nile,
          whitewater rafting, launch/boat cruises, nature walks,
          cultural/Community tour, city tours, mountain hiking and observing
          amazing waterfalls just to mention a few.
        </p>

        <p>
          Awooooo Accommodation offers tours and travel services to its guests
          who are planning to discover the other part of Uganda &quot;The Pearl
          Of Africa&quot;. Our friendly & trusted tour guides are ready to take
          you anywhere in and around Uganda.
        </p>

        <p>
          Please call +256414660101 or whatsApp:{" "}
          <a
            href="https://api.whatsapp.com/send?phone=256703793400"
            target="_blank"
            className="text-blue-600 hover:text-yellow-600"
            rel="noreferrer"
          >
            +256752399999{" "}
          </a>{" "}
          and speak to our tours and travel team or send us an Email:{" "}
          <a
            href="mailto:booking@awooooo.ug"
            target="_blank"
            rel="noreferrer"
            className="text-blue-700 font-normal"
          >
            booking@awooooo.ug
          </a>
        </p>
      </div>

      {/* tour images 2 */}
      <TourPics images={images2} />
    </div>
  );
};

export default Tours;
