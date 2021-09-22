import { FaFacebook, FaTwitter } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import Link from "next/link";

const Socials = () => {
  return (
    <div className="w-full mt-5 py-5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-blue-900 mb-4 pb-4 border-b border-gray-200 border-dashed">
          Find us on Social Media
        </h2>
        {/* ... */}
        <div className="flex justify-center gap-4">
          <Link href="/">
            <a className="flex items-center justify-center sm:justify-items-start h-14 sm:h-auto w-14 sm:w-auto sm:py-2 sm:px-3 text-lg font-medium rounded-full shadow-lg hover:text-facebook">
              <FaFacebook className="sm:mr-3 text-3xl sm:text-2xl text-facebook" />
              <span className="hidden sm:flex">Facebook</span>
            </a>
          </Link>
          <Link href="/">
            <a className="flex items-center py-2 px-3 text-lg font-medium rounded-full shadow-lg hover:text-twitter-normal">
              <FaTwitter className="sm:mr-3 text-3xl sm:text-2xl text-twitter-normal" />
              <span className="hidden sm:flex">Twitter</span>
            </a>
          </Link>
          <Link href="/">
            <a className="flex items-center py-2 px-3 text-lg font-medium rounded-full shadow-lg hover:text-instagram-normal">
              <AiFillInstagram className="sm:mr-3 text-3xl sm:text-2xl text-instagram-normal" />
              <span className="hidden sm:flex">Instagram</span>
            </a>
          </Link>
          <Link href="/">
            <a className="flex items-center py-2 px-3 text-lg font-medium rounded-full shadow-lg hover:text-whatsapp-normal">
              <IoLogoWhatsapp className="sm:mr-3 text-3xl sm:text-2xl text-whatsapp-normal" />
              <span className="hidden sm:flex">WhatsApp</span>
            </a>
          </Link>
        </div>
        {/* ... */}
      </div>
    </div>
  );
};

export default Socials;
