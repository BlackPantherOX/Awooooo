import * as constants from "../constants";
import Socials from "./blocks/socials";

const Footer = () => {
  return (
    <>
      <Socials />
      <div className="flex justify-center py-4 text-gray-500">
        © 2021 {constants.SITE_NAME} LTD. All rights reserved.
      </div>
    </>
  );
};

export default Footer;
