import Text from "../components/blocks/text";

const Services = () => {
  return (
    <div className="pt-56 bg-light pb-10">
      <h1 className="font-bold text-5xl pb-3 mb-3 text-blue-900 border-b border-dotted max-w-4xl mx-auto">
        Our Services and Offers
      </h1>
      <div className="max-w-3xl mx-auto">
        <Text branch={false} />
      </div>
    </div>
  );
};

export default Services;
