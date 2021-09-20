import Image from "next/image";
import Link from "next/link";
import {
  FaCarAlt,
  FaLuggageCart,
  FaMapMarkerAlt,
  FaWifi,
} from "react-icons/fa";

const Gallery = () => {
  return (
    <div className="w-full mt-24 px-2 lg:px-0">
      <h2 className="text-5xl font-normal text-center text-blue-900 mb-4 lg:mb-5 pb-4 border-b border-dotted">
        Offers &amp; Services
      </h2>
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-5">
        {/* ... */}
        <div className="grid grid-cols-2 gap-3 text-2xl">
          <Link href="">
            <a className="col-span-1 relative group">
              <Image
                src="/images/offers/pilawo.jpg"
                width={500}
                height={500}
                alt="Awooooo Image"
                layout="responsive"
                className="h-auto col-span-2"
              />
              <div className="absolute inset-0 text-white flex group-hover:hidden items-center justify-center p-2 bg-blue-900 bg-opacity-60">
                Free Food
              </div>
            </a>
          </Link>

          <Link href="">
            <a className="relative group">
              <Image
                src="/images/offers/buffet.jpg"
                width={500}
                height={500}
                alt="Awooooo Image"
                layout="responsive"
                className="h-auto col-span-2"
              />
              <div className="absolute inset-0 text-white flex group-hover:hidden items-center justify-center p-2 bg-blue-900 bg-opacity-60">
                Buffet
              </div>
            </a>
          </Link>

          <Link href="">
            <a className="relative">
              <Image
                src="/images/offers/snacks.jpg"
                width={500}
                height={500}
                alt="Awooooo Image"
                layout="responsive"
                className="h-auto col-span-2"
              />
              <div className="absolute inset-0 text-white flex items-center justify-center p-2 bg-blue-900 bg-opacity-60">
                Free Snacks
              </div>
            </a>
          </Link>

          <Link href="">
            <a className="relative">
              <Image
                src="/images/offers/juice.jpg"
                width={500}
                height={500}
                alt="Awooooo Image"
                layout="responsive"
                className="h-auto col-span-2"
              />
              <div className="absolute inset-0 text-white flex items-center justify-center p-2 bg-blue-900 bg-opacity-60">
                Free Drinks
              </div>
            </a>
          </Link>
        </div>

        {/* ... */}

        <div className="font-light text-xl order-start lg:order-normal">
          <h2 className="font-bold text-5xl">We have everything you need</h2>
          <p className="my-4">
            Our hotels are built to hive you the atmost comfort regardless of
            how long you spend here.
          </p>
          <div className="grid grid-cols-2 gap-5 font-normal">
            <div className="flex items-center">
              <FaWifi className="text-6xl mr-5" /> Free available high speed
              WiFi
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-6xl mr-5" /> Сonvenient location
              in the center
            </div>
            <div className="flex items-center">
              <FaLuggageCart className="text-6xl mr-5" /> Free storage of
              luggage of any size
            </div>
            <div className="flex items-center">
              <FaCarAlt className="text-6xl mr-5" /> Free parking space
              allocated to you
            </div>
          </div>
        </div>
        {/* ... */}
      </div>
    </div>
  );
};

export default Gallery;
