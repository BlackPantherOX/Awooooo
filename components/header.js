import Navbar from "./blocks/navbar";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

const Header = () => {
  return (
    <div className="h-screen w-full overflow-hidden">
      <Navbar />
      <div className="h-full w-full relative before:absolute before:inset-0 before:bg-hotel before:bg-center before:bg-cover before:bg-no-repeat">
        {/* "" */}

        <div className="w-full h-full relative flex flex-col items-center justify-center bg-blue-700 bg-opacity-70 pt-60 lg:pt-48">
          <h2 className="font-vibes text-5xl sm:text-7xl lg:text-8xl text-white sm:mb-3">
            Welcome to Awoooo
          </h2>
          <h6 className="text-2xl uppercase font-medium text-white mb-6 sm:mb-10">
            <span className="left-sep"></span>
            Pure prestige
            <span className="right-sep"></span>
          </h6>

          <Link href="/">
            <a className="border-2 border-white uppercase text-sm bg-blue-900 py-2 pl-10 pr-8 text-white flex items-center">
              Book Now <AiOutlineArrowRight className="ml-2" />
            </a>
          </Link>

          <div className="lg:w-2/4 text-white p-3 lg:p-10 text-center leading-8 font-thin tracking-wider text-lg">
            <span className="block font-light">
              Jangu Tunyumirweeeeeeeee!!{" "}
            </span>
            Experience nature in its purest form, while enjoying attention to
            detail and exceptional services.
          </div>
        </div>

        {/* "" */}
      </div>
    </div>
  );
};

export default Header;
