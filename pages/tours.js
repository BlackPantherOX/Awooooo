import * as constants from "../constants";
import Head from "next/head";

const Tours = () => {
  return (
    <div className="pt-56 bg-light pb-10">
      <Head>
        <title>Tours - {constants.SITE_NAME} Accommodation</title>
      </Head>
      <h1 className="font-bold text-5xl pb-3 mb-3 text-blue-900 border-b border-dotted max-w-4xl mx-auto">
        Tours
      </h1>
    </div>
  );
};

export default Tours;
