import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import Link from "next/link";

const Socials = () => {
  return (
    <div className="w-full bg-light mt-5 py-5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-normal text-center text-blue-900 mb-4 pb-4 border-b border-dotted">
          Find us on Social Media
        </h2>
        {/* ... */}
        <div className="flex justify-center gap-4">
          <Link href="/">
            <a className="flex items-center py-2 px-3 text-lg font-medium rounded-full shadow-lg hover:text-facebook">
              <FaFacebook className="mr-3 text-2xl text-facebook" />
              Facebook
            </a>
          </Link>
          <Link href="/">
            <a className="flex items-center py-2 px-3 text-lg font-medium rounded-full shadow-lg hover:text-twitter-normal">
              <FaTwitter className="mr-3 text-2xl text-twitter-normal" />
              Twitter
            </a>
          </Link>
          <Link href="/">
            <a className="flex items-center py-2 px-3 text-lg font-medium rounded-full shadow-lg hover:text-instagram-normal">
              <FaTwitter className="mr-3 text-2xl text-instagram-normal" />
              Instagram
            </a>
          </Link>
          <Link href="/">
            <a className="flex items-center py-2 px-3 text-lg font-medium rounded-full shadow-lg hover:text-whatsapp-normal">
              <IoLogoWhatsapp className="mr-3 text-2xl text-whatsapp-normal" />
              WhatsApp
            </a>
          </Link>
        </div>
        {/* ... */}
      </div>
    </div>
  );
};

export default Socials;
