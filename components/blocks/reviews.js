import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";

const Reviews = () => {
  return (
    <div className="w-full mt-24 px-2 lg:px-0">
      <h2 className="text-5xl font-normal text-center text-blue-900 mb-3 pb-3 border-b border-dotted">
        What our Clients Say
      </h2>
      <div className="max-w-3xl mx-auto">
        <Carousel controls={false} indicators={false} className="w-full">
          <Carousel.Item interval={3000}>
            <Carousel.Caption className="relative text-gray-800 text-center left-0 right-0">
              <h3 className="mb-3 font-sans text-2xl">First slide label</h3>
              <p className="font-light leading-8 tracking-wide">
                These men promptly escaped from a maximum security stock ade to
                the Los Angeles underground these Happy Days are yours and mine
                Happy Days as long wrong with that the Brady Bunch these
                HappDays are yours and mine Happy Days as long wrong Brady
                Bunch.
              </p>
            </Carousel.Caption>
            <div className="flex justify-center">
              <Image
                src="/images/1.jpeg"
                width={100}
                height={100}
                alt="Awooooo Image"
                className="rounded-full mx-auto"
              />
            </div>
          </Carousel.Item>

          <Carousel.Item interval={3000}>
            <Carousel.Caption className="relative text-gray-800 text-center left-0 right-0 mb-0">
              <h3 className="mb-3 font-sans text-2xl">First slide label</h3>
              <p className="font-light leading-8 tracking-wide">
                These men promptly escaped from a maximum security stock ade to
                the Los Angeles underground these Happy Days are yours and mine
                Happy Days as long wrong with that the Brady Bunch these
                HappDays are yours and mine Happy Days as long wrong Brady
                Bunch.
              </p>
            </Carousel.Caption>
            <div className="flex justify-center">
              <Image
                src="/images/1.jpeg"
                width={100}
                height={100}
                alt="Awooooo Image"
                className="rounded-full mx-auto"
              />
            </div>
          </Carousel.Item>

          <Carousel.Item interval={3000}>
            <Carousel.Caption className="relative text-gray-800 text-center left-0 right-0 mb-0">
              <h3 className="mb-3 font-sans text-2xl">First slide label</h3>
              <p className="font-light leading-8 tracking-wide">
                These men promptly escaped from a maximum security stock ade to
                the Los Angeles underground these Happy Days are yours and mine
                Happy Days as long wrong with that the Brady Bunch these
                HappDays are yours and mine Happy Days as long wrong Brady
                Bunch.
              </p>
            </Carousel.Caption>
            <div className="flex justify-center">
              <Image
                src="/images/1.jpeg"
                width={100}
                height={100}
                alt="Awooooo Image"
                className="rounded-full mx-auto"
              />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Reviews;
