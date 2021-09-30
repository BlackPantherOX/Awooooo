import Image from "next/image";

const TourPics = ({ images }) => {
  //   const arr = ["bungee", "hippo", "giraffe", "gorilla"];
  // ...

  return (
    <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5">
      {images.map((image) => (
        <Image
          src={`/images/tour/${image}.jpg`}
          width={400}
          height={400}
          layout="responsive"
          className="rounded"
          alt="Image"
          key={images.indexOf(image)}
        />
      ))}
    </div>
  );
};

export default TourPics;
