import Link from "next/link";
import { FaMapMarkerAlt, FaBed, FaShuttleVan } from "react-icons/fa";
import { RiStarSFill } from "react-icons/ri";
import { HiHome } from "react-icons/hi";
import { BiNews } from "react-icons/bi";
import { AiOutlineTeam } from "react-icons/ai";
import { MdRoomService, MdPhoneInTalk } from "react-icons/md";
import * as lcConstants from "../../constants";

const Navbar = () => {
  return (
    <div className="w-full bg-white bg-opacity-90 z-10 absolute border-b-2 border-white">
      <div className="max-w-6xl mx-auto h-28 flex items-center text-yellow-600 px-3 lg:px-0">
        {/* Phone */}
        <div className="address flex items-center gap-3 flex-auto">
          <MdPhoneInTalk className="text-2xl" />

          <div className="hidden sm:block font-bold text-blue-900">
            <div className="text-sm">CONTACT US</div>
            <div>(+256) - 755092013</div>
          </div>
        </div>

        {/* Logo */}
        <Link href="/">
          <a className="max-w-[400px] flex-auto mt-2">
            <div className="flex justify-center text-4xl">
              <FaBed />
            </div>
            <h1 className="text-5xl font-normal text-center text-blue-900 leading-5">
              awooooo{" "}
              <span className="block font-light text-xl mt-2 opacity-80">
                Accomodation
              </span>
            </h1>
            <div className="text-[10px] flex justify-center">
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
            </div>
          </a>
        </Link>

        {/* Address */}
        <div className="address flex items-center gap-3 flex-auto justify-end">
          <FaMapMarkerAlt className="text-2xl" />

          <div className="hidden sm:block font-bold text-blue-900">
            <div className="text-sm">OUR OFFICE</div>
            <div>19MH,ORLEANS,USA</div>
          </div>
        </div>
        {/* Address */}
      </div>

      {/* navigation */}
      <div className="max-w-3xl mx-auto bg-blue-900 flex font-normal text-white h-14 -mb-6 mt-2 sm:rounded-full border-b-2 lg:border-2 border-gray-100">
        <Link href="/">
          <a className="flex-auto flex items-center justify-center hover:text-yellow-300">
            <HiHome className="text-2xl mr-2 sm:mr-4" />
            Home
          </a>
        </Link>
        <Link href="#about">
          <a className="flex-auto hidden sm:flex items-center justify-center hover:text-yellow-300">
            <AiOutlineTeam className="text-2xl mr-2 sm:mr-4" />
            About Us
          </a>
        </Link>
        <Link href="#services">
          <a className="flex-auto flex items-center justify-center hover:text-yellow-300">
            <MdRoomService className="text-2xl mr-2 sm:mr-4" />
            Services
          </a>
        </Link>
        <Link href="#rooms">
          <a className="flex-auto flex items-center justify-center hover:text-yellow-300">
            <FaBed className="text-2xl mr-2 sm:mr-4" />
            Rooms
          </a>
        </Link>
        <Link href="#news">
          <a className="flex-auto flex items-center justify-center hover:text-yellow-300">
            <FaShuttleVan className="text-2xl mr-2 sm:mr-4" />
            Tours
          </a>
        </Link>
      </div>
      {/* navigation */}
    </div>
  );
};

export default Navbar;
