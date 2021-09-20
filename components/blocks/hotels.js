import Image from "next/image";

const Hotels = () => {
  return (
    <div className="w-full mt-5 px-2 lg:px-0">
      <h2 className="text-5xl font-normal text-center text-blue-900 lg:mb-5 pb-3 lg:pb-5 border-b border-dotted">
        Hotels
      </h2>
      <div className="max-w-5xl mt-8 mx-auto grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2">
        {/* cols */}
        <div className="grid grid-cols-2">
          <div className="relative w-full h-full">
            <Image
              src="/images/p.jpeg"
              layout="responsive"
              height="100"
              width="100"
              alt="Awooooo Image"
            />
          </div>
          <div className="relative w-full h-full flex flex-col items-center justify-center px-3">
            <h4 className="font-semibold text-xl lg:text-2xl mb-2 lg:mb-4">
              Hotel Buyala
            </h4>
            <p className="sm:text-sm lg:text-md text-center mb-4">
              Enjoy a refreshing time at the beach
            </p>

            <h6 className="grid grid-cols-2 gap-2 lg:gap-5">
              <div className="font-bold text-sm lg:text-xl text-yellow-700">
                <span className="text-xs block text-right">UGX</span>{" "}
                <span className="block text-right">290K /=</span>
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

            <span>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half-o"></i>
            </span>
          </div>
        </div>

        {/* cols */}
        <div className="grid grid-cols-2">
          <div className="relative w-full h-full order-end sm:order-start">
            <Image
              src="/images/268901544.jpeg"
              layout="responsive"
              height="100"
              width="100"
              alt="Awooooo Image"
            />
          </div>
          <div className="relative w-full h-full flex flex-col items-center justify-center px-3">
            <h4 className="font-semibold text-xl lg:text-2xl mb-2 lg:mb-4">
              Hotel Nateete
            </h4>
            <p className="sm:text-sm lg:text-md text-center mb-4">
              Enjoy a refreshing time at the beach
            </p>

            <h6 className="grid grid-cols-2 gap-2 lg:gap-5">
              <div className="font-bold text-sm lg:text-xl text-yellow-700">
                <span className="text-xs block text-right">UGX</span>{" "}
                <span className="block text-right">300K /=</span>
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

            <span>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half-o"></i>
            </span>
          </div>
        </div>

        {/* cols */}
        <div className="grid grid-cols-2">
          <div className="relative w-full h-full flex flex-col items-center justify-center px-3">
            <h4 className="font-semibold text-xl lg:text-2xl mb-2 lg:mb-4">
              Hotel Nateete
            </h4>
            <p className="sm:text-sm lg:text-md text-center mb-4">
              Enjoy a refreshing time at the beach
            </p>

            <h6 className="grid grid-cols-2 gap-2 lg:gap-5">
              <div className="font-bold text-sm lg:text-xl text-yellow-700">
                <span className="text-xs block text-right">UGX</span>{" "}
                <span className="block text-right">300K /=</span>
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

            <span>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half-o"></i>
            </span>
          </div>

          <div className="relative w-full h-full order-start sm:order-end">
            <Image
              src="/images/268901544.jpeg"
              layout="responsive"
              height="100"
              width="100"
              alt="Awooooo Image"
            />
          </div>
        </div>

        {/* cols */}
        <div className="grid grid-cols-2">
          <div className="relative w-full h-full flex flex-col items-center justify-center px-3">
            <h4 className="font-semibold text-xl lg:text-2xl mb-2 lg:mb-4">
              Hotel Nateete
            </h4>
            <p className="sm:text-sm lg:text-md text-center mb-4">
              Enjoy a refreshing time at the beach
            </p>

            <h6 className="grid grid-cols-2 gap-2 lg:gap-5">
              <div className="font-bold text-sm lg:text-xl text-yellow-700">
                <span className="text-xs block text-right">UGX</span>{" "}
                <span className="block text-right">300K /=</span>
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

            <span>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half-o"></i>
            </span>
          </div>

          <div className="relative w-full h-full">
            <Image
              src="/images/268901544.jpeg"
              layout="responsive"
              height="100"
              width="100"
              alt="Awooooo Image"
            />
          </div>
        </div>
        {/* cols */}
      </div>
    </div>
  );
};

export default Hotels;
