import {
  FaCarAlt,
  FaLuggageCart,
  FaMapMarkerAlt,
  FaWifi,
} from "react-icons/fa";

const Text = ({ branch }) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="font-light text-xl order-start lg:order-normal">
        <h2 className="font-bold text-4xl">
          Everything waiting for you at our{" "}
          <span className="capitalize">{branch}</span> Branch
        </h2>
        <p className="my-4">
          Our hotels are built to hive you the atmost comfort regardless of how
          long you spend here.
        </p>
        <div className="grid grid-cols-2 gap-5 font-normal">
          <div className="flex items-center">
            <FaWifi className="text-6xl mr-5" /> Free available high speed WiFi
          </div>
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-6xl mr-5" /> Сonvenient location in
            the center
          </div>
          <div className="flex items-center">
            <FaLuggageCart className="text-6xl mr-5" /> Free storage of luggage
            of any size
          </div>
          <div className="flex items-center">
            <FaCarAlt className="text-6xl mr-5" /> Free parking space allocated
            to you
          </div>
        </div>
      </div>
      {/* ... */}
    </div>
  );
};

export default Text;
