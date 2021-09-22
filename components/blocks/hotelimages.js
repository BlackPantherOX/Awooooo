import Image from "next/image";

const HotelImages = ({ branch }) => {
  const arr = [1, 2, 3, 4];
  // ...

  return (
    <div className="max-w-4xl mx-auto grid grid-cols-4 gap-3 mt-5">
      {arr.map((num) => (
        <Image
          src={`/images/${branch}/${num}.jpeg`}
          width={400}
          height={400}
          layout="responsive"
          className="rounded"
          alt="Image"
          key={num}
        />
      ))}
    </div>
  );
};

export default HotelImages;
