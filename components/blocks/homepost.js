import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

const HomePost = () => {
  return (
    <div className="grid grid-cols-8 sm:gap-20 max-w-5xl mx-auto py-14 px-2 lg:px-0">
      <div className="col-span-8 sm:col-span-5">
        <h2 className="font-medium text-3xl tracking-wider sm:mb-5 leading-10 text-blue-900">
          ENJOY MEMORABLE DAYS WITH OUR AMAZING HOSPITALITY
        </h2>

        <div className="sm:hidden bg-light py-3 my-3">
          <div className="w-2/4 mx-auto">
            <Image
              src="/housekeeping.jpg"
              alt="house keeping"
              height="593"
              width="593"
              className="h-auto rounded-full w-2/4"
            />
          </div>
        </div>

        {/* text */}
        <div className="font-light leading-8 tracking-wide space-y-4 mb-10">
          <p>
            The couple stays in Buziga house which he claims is worth over Shs
            200M.
          </p>
          <p>
            During a recent interview with Galaxy FM gossip queen, Florah, he
            stunned listeners when he begged dancehall musician, Kapa Cat, for a
            night of pleasure.
          </p>
          <p>
            “Kapa Cat is crazy, I want to bonk her. Kapa please allow me to surf
            your thighs for just one night,” he said.
          </p>
        </div>

        <div className="flex items-end w-full ">
          <Link href="/about">
            <a className="border-white uppercase text-sm bg-blue-900 h-10 pl-8 text-white flex items-center">
              <span className="flex items-center h-full overflow-hidden">
                Read More{" "}
                <span className="bg-yellow-700 transform skew-x-12 flex items-center justify-center ml-8 -mr-1 w-12 h-full">
                  <AiOutlineArrowRight />
                </span>
              </span>
            </a>
          </Link>
        </div>
      </div>

      <div className="hidden sm:block col-span-3">
        <Image
          src="/housekeeping.jpg"
          alt="house keeping"
          height="593"
          width="593"
          className="h-auto"
        />
      </div>
    </div>
  );
};

export default HomePost;
