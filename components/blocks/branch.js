import Link from "next/link";
import Image from "next/image";

const Branch = ({ link, image, branch, price, order, classes }) => {
  // ...
  if (order === "right") {
    <div className={`relative w-full h-full ${classes}`}>
      <div className="hidden group-hover:block group-focus:block absolute inset-0 bg-blue-900 bg-opacity-30 z-10"></div>
      <Image
        src={image}
        layout="responsive"
        height="100"
        width="100"
        alt="Awooooo Image"
        className="relative"
      />
    </div>;
  }

  // ...
  return (
    <Link href={link}>
      <a className="grid grid-cols-2 group">
        {/* ... */}
        <div className={`relative w-full h-full ${classes}`}>
          <div className="hidden group-hover:block group-focus:block absolute inset-0 bg-blue-900 bg-opacity-30 z-10"></div>
          <Image
            src={image}
            layout="responsive"
            height="100"
            width="100"
            alt="Awooooo Image"
            className="relative"
          />
        </div>
        {/* ... */}
        <div className="relative w-full h-full flex flex-col items-center justify-center px-3">
          <h4 className="font-semibold text-xl lg:text-2xl mb-2 lg:mb-4">
            {branch} Branch
          </h4>
          <p className="sm:text-sm lg:text-md text-center mb-4">
            Enjoy a refreshing time at the beach
          </p>

          <h6 className="grid grid-cols-2 gap-2 lg:gap-5">
            <div className="font-bold text-sm lg:text-xl text-yellow-700">
              <span className="text-xs block text-right">UGX</span>{" "}
              <span className="block text-right">{price} /=</span>
            </div>
            <div className="text-sm font-semibold text-gray-600">
              <span className="block whitespace-nowrap overflow-hidden">
                For Person
              </span>
              <span className="block whitespace-nowrap overflow-hidden">
                Per Night
              </span>
            </div>
          </h6>
        </div>
        {/* ... */}
      </a>
    </Link>
  );
};

Branch.defaultProps = {
  order: "",
  classes: "",
};

export default Branch;
