import HotelImages from "../components/blocks/hotelimages";
import Text from "../components/blocks/text";

const Rooms = () => {
  return (
    <div className="pt-56 bg-light pb-10">
      <h1 className="font-bold text-5xl pb-3 mb-3 text-blue-900 border-b border-dotted max-w-4xl mx-auto">
        Our Rooms
      </h1>
      {/* ... */}

      <div className="space-y-10">
        <div className="">
          <h2 className="max-w-4xl mx-auto font-bold text-4xl pb-2">
            Busabala Branch
          </h2>
          <HotelImages branch="busabala" />
        </div>
        {/* ... */}
        <div className="">
          <h2 className="max-w-4xl mx-auto font-bold text-4xl pb-2">
            Buyala Branch
          </h2>
          <HotelImages branch="buyala" />
        </div>
        {/* ... */}
        <div className="">
          <h2 className="max-w-4xl mx-auto font-bold text-4xl pb-2">
            Nateete Branch
          </h2>
          <HotelImages branch="nateete" />
        </div>
      </div>

      {/* ... */}
    </div>
  );
};

export default Rooms;
