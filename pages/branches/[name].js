import { useRouter } from "next/router";
import Text from "../../components/blocks/text";
import HotelImages from "../../components/blocks/hotelimages";

const BranchName = () => {
  const router = useRouter();
  const { name } = router.query;

  return (
    <div className="pt-56">
      <h1 className="font-bold text-5xl pb-3 mb-3 text-blue-900 border-b border-dotted text-center">
        <span className="capitalize">{name}</span> Branch
      </h1>
      <Text branch={name} />

      <HotelImages branch={name} />
    </div>
  );
};

export default BranchName;
