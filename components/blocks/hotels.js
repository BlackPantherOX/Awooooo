import Image from "next/image";
import Link from "next/link";

const Hotels = () => {
  return (
    <div className="w-full mt-5 px-2 lg:px-0">
      <h2 className="text-5xl font-normal text-center text-blue-900 lg:mb-5 pb-3 lg:pb-5 border-b border-dotted">
        Branches
      </h2>
      <div className="max-w-5xl mt-8 mx-auto grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2">
        {/* cols */}
        <Link href="/branches/buyala">
          <a className="grid grid-cols-2 group">
            <div className="relative w-full h-full">
              <div className="hidden group-hover:block group-focus:block absolute inset-0 bg-blue-900 bg-opacity-30 z-10"></div>
              <Image
                src="/images/busabala.jpg"
                layout="responsive"
                height="100"
                width="100"
                alt="Awooooo Image"
                className="relative"
              />
            </div>
            <div className="relative w-full h-full flex flex-col items-center justify-center px-3">
              <h4 className="font-semibold text-xl lg:text-2xl mb-2 lg:mb-4">
                Busabala Branch
              </h4>
              <p className="sm:text-sm lg:text-md text-center mb-4">
                Enjoy a refreshing time at the beach
              </p>

              <h6 className="grid grid-cols-2 gap-2 lg:gap-5">
                <div className="font-bold text-sm lg:text-xl text-yellow-700">
                  <span className="text-xs block text-right">UGX</span>{" "}
                  <span className="block text-right">62K /=</span>
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
          </a>
        </Link>

        {/* cols */}
        <Link href="/branches/nateete">
          <a className="grid grid-cols-2 group">
            <div className="relative w-full h-full order-end sm:order-start">
              <div className="hidden group-hover:block group-focus:block absolute inset-0 bg-blue-900 bg-opacity-30 z-10"></div>
              <Image
                src="/images/busega.jpg"
                layout="responsive"
                height="100"
                width="100"
                alt="Awooooo Image"
                className="relative"
              />
            </div>
            <div className="relative w-full h-full flex flex-col items-center justify-center px-3">
              <h4 className="font-semibold text-xl lg:text-2xl mb-2 lg:mb-4">
                Busega Branch
              </h4>
              <p className="sm:text-sm lg:text-md text-center mb-4">
                Enjoy a refreshing time at the beach
              </p>

              <h6 className="grid grid-cols-2 gap-2 lg:gap-5">
                <div className="font-bold text-sm lg:text-xl text-yellow-700">
                  <span className="text-xs block text-right">UGX</span>{" "}
                  <span className="block text-right">42K /=</span>
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
          </a>
        </Link>

        {/* cols */}
        <Link href="/branches/busabala">
          <a className="grid grid-cols-2 group">
            <div className="relative w-full h-full flex flex-col items-center justify-center px-3">
              <h4 className="font-semibold text-xl lg:text-2xl mb-2 lg:mb-4">
                Buyala Branch
              </h4>
              <p className="sm:text-sm lg:text-md text-center mb-4">
                Enjoy a refreshing time at the beach
              </p>

              <h6 className="grid grid-cols-2 gap-2 lg:gap-5">
                <div className="font-bold text-sm lg:text-xl text-yellow-700">
                  <span className="text-xs block text-right">UGX</span>{" "}
                  <span className="block text-right">142K /=</span>
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

            <div className="relative w-full h-full order-start sm:order-end">
              <div className="hidden group-hover:block group-focus:block absolute inset-0 bg-blue-900 bg-opacity-30 z-10"></div>
              <Image
                src="/images/buyala.jpg"
                layout="responsive"
                height="100"
                width="100"
                alt="Awooooo Image"
                className="relative"
              />
            </div>
          </a>
        </Link>

        {/* cols */}
        <Link href="/branches/nateete">
          <a className="grid grid-cols-2 group">
            <div className="relative w-full h-full flex flex-col items-center justify-center px-3">
              <h4 className="font-semibold text-xl lg:text-2xl mb-2 lg:mb-4">
                Mityana Branch
              </h4>
              <p className="sm:text-sm lg:text-md text-center mb-4">
                Enjoy a refreshing time at our vilas
              </p>

              <h6 className="grid grid-cols-2 gap-2 lg:gap-5">
                <div className="font-bold text-sm lg:text-xl text-yellow-700">
                  <span className="text-xs block text-right">UGX</span>{" "}
                  <span className="block text-right">92K /=</span>
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

            <div className="relative w-full h-full">
              <div className="hidden group-hover:block group-focus:block absolute inset-0 bg-blue-900 bg-opacity-30 z-10"></div>
              <Image
                src="/images/mityana.jpg"
                layout="responsive"
                height="100"
                width="100"
                alt="Awooooo Image"
                className="relative"
              />
            </div>
          </a>
        </Link>
        {/* cols */}
      </div>
    </div>
  );
};

export default Hotels;
