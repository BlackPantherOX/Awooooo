import * as constants from "../constants";

const About = () => {
  return (
    <div className="pt-56 bg-light pb-10">
      <h1 className="font-bold text-5xl pb-3 mb-3 text-blue-900 border-b border-dotted max-w-4xl mx-auto">
        About Us
      </h1>
      <div className="max-w-3xl mx-auto">
        <div className="font-light leading-8 tracking-wide space-y-4 mb-10">
          <p>
            {constants.SITE_NAME} Accommodations is a family run vacation
            property management company dedicated to sharing our wonderful
            accomodation services with those looking for a unique experience.
          </p>
          <p>
            Nateete Branch, located on the South Carolina coast just off of
            Hilton Head Island, offers an easy way to have an off-grid vacation
            experience without having to travel off the beaten path.
          </p>
          <p>
            Busabala Branch, located on the South Carolina coast just off of
            Hilton Head Island, offers an easy way to have an off-grid vacation
            experience without having to travel off the beaten path.
          </p>
          <p>
            Bulaya Branch, located on the South Carolina coast just off of
            Hilton Head Island, offers an easy way to have an off-grid vacation
            experience without having to travel off the beaten path.
          </p>
          <p>
            Please don’t hesitate to contact us if you have any questions about
            arranging your stay or if you are a property owner and you’d like us
            to manage your property on Daufuskie.
          </p>
        </div>

        <p className="font-semibold">Awooooo Accommodation Uganda</p>
        <br />
        <p>Plot 617, Block 20 Busega Kitaka Zone</p>
        <p>P.O Box 218, Nateete</p>
        <p>Kampala Uganda</p>
        <br />
        <p>Office Line: +256414660101</p>
        <p>
          WhatsApp:{" "}
          <a
            href="https://api.whatsapp.com/send?phone=256703793400"
            target="_blank"
            className="text-blue-600 hover:text-yellow-600"
            rel="noreferrer"
          >
            +256752399999
          </a>
        </p>
        <br />
        <p>
          Booking Via WhatsApp:{" "}
          <a
            href="https://api.whatsapp.com/send?phone=256703793400"
            target="_blank"
            className="text-blue-600 hover:text-yellow-600"
            rel="noreferrer"
          >
            +256703793400
          </a>
        </p>
        <br />
        <p>
          <a
            href="mailto:ebooking@awooooo.ug"
            className="text-blue-500 hover:text-yellow-600"
            target="_blank"
            rel="noreferrer"
          >
            Send us an Email
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
