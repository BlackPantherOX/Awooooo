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
              <h3 className="mb-3 font-sans text-2xl">
                Special and Quiet place
              </h3>
              <p className="font-light leading-8 tracking-wide">
                Me and my wife, plus our two kids (Jonathan and Jean), we
                enjoyed our 21 days stay with Awooooo in Buyala. The quiet and
                green environment left so many memories. Special thanx to the
                caretaker (Lawrence) who always made sure he provided any
                essentials we wanted. We hope to be back next year,
              </p>
            </Carousel.Caption>
            <div className="flex justify-center">
              <Image
                src="/images/reviews/1.jpg"
                width={100}
                height={100}
                alt="Awooooo Image"
                className="rounded-full mx-auto"
              />
            </div>
          </Carousel.Item>

          <Carousel.Item interval={3000}>
            <Carousel.Caption className="relative text-gray-800 text-center left-0 right-0 mb-0">
              <h3 className="mb-3 font-sans text-2xl">I was very Impressed</h3>
              <p className="font-light leading-8 tracking-wide">
                All your services are so good, but one time electricity went off
                for 2 hours, I freaked out and I almost requested for a refund,
                but madam Wendy calmed me down. She was like, electricity will
                be back soon. Arnold Durban South Africa
              </p>
            </Carousel.Caption>
            <div className="flex justify-center">
              <Image
                src="/images/reviews/3.jpg"
                width={100}
                height={100}
                alt="Awooooo Image"
                className="rounded-full mx-auto"
              />
            </div>
          </Carousel.Item>

          <Carousel.Item interval={3000}>
            <Carousel.Caption className="relative text-gray-800 text-center left-0 right-0 mb-0">
              <h3 className="mb-3 font-sans text-2xl">Busabala is Awesome</h3>
              <p className="font-light leading-8 tracking-wide">
                Hi Awooooo, The hospitality in Busabala was so good. My
                girlfriend still craves for that Katogo breakfast. Please send
                me regards and special thanx to the driver (I forgot his name),
                bambi he was so down to earth. Looking forward to staying at
                Awooooo again. Matovu Julius, Boston USA
              </p>
            </Carousel.Caption>
            <div className="flex justify-center">
              <Image
                src="/images/reviews/2.jpg"
                width={100}
                height={100}
                alt="Awooooo Image"
                className="rounded-full mx-auto"
              />
            </div>
          </Carousel.Item>

          <Carousel.Item interval={3000}>
            <Carousel.Caption className="relative text-gray-800 text-center left-0 right-0 mb-0">
              <h3 className="mb-3 font-sans text-2xl">Am still in Awe</h3>
              <p className="font-light leading-8 tracking-wide">
                We booked to stay in Busabala, but because we had missed our
                flight at Heathrow Airport, the team at Awooooo thought we
                weren't gonna make it. They rufunded our money, but said no
                since it wasn't their fault. We requested to be booked at
                Busega, and yes, we liked the place. Imelda, London UK
              </p>
            </Carousel.Caption>
            <div className="flex justify-center">
              <Image
                src="/images/reviews/4.jpg"
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
