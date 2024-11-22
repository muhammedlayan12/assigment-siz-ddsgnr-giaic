import Image from "next/image";
import logo1 from '../../public/images/logo1.jpg';
import logo2 from '../../public/images/logo2.jpg';
import logo3 from '../../public/images/logo3.jpg';
import logo4 from '../../public/images/logo4.jpg';
import logo5 from '../../public/images/logo5.jpg';
import logo6 from '../../public/images/logo6.jpg';

function Trusted() {
  const logos = [
    {
      id: 1,
      logo: logo1,
      alt: "logo 1",
    },
    {
      id: 2,
      logo: logo2,
      alt: "logo 2",
    },
    {
      id: 3,
      logo: logo3,
      alt: "logo 3",
    },
    {
      id: 4,
      logo: logo4,
      alt: "logo 4",
    },
    {
      id: 5,
      logo: logo5,
      alt: "logo 5",
    },
    {
      id: 6,
      logo: logo6,
      alt: "logo 6",
    },
  ];

  return (
    <div>
      <section className="mt-24 flex flex-col lg:flex-row lg:justify-evenly justify-center items-center py-10 px-4 gap-9">
        <div className="content text-center lg:text-left">
          <h2 className="text-2xl font-semibold font-poppins">
            Trusted By 2000+ Companies Worldwide.
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4 items-center">
          {logos.map((logo) => (
            <div key={logo.id}> {/* Add the key prop here */}
              <Image
                src={logo.logo}
                alt={logo.alt}
                className="w-[80px] sm:w-[120px] md:w-[140px] lg:w-[170px] h-auto"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Trusted;
