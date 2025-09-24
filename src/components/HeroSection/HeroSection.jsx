import myphoto from "../../assets/photomy.jpg";
import Buttons from "../Buttons/Buttons";
import SocialCards from "../cards/socialCards/SocialCards";

const HeroSection = () => {
  return (
    <>
      <section
        id="home"
        className="  py-12 lg:py-20 scroll-mt-10 bg-gradient-to-br from-blue-100 via-white to-blue-100"
      >
        <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-between">
          {/* Text Section */}
          <div className="w-full lg:w-2/4 text-center lg:text-left px-4 lg:px-0">
            {/* Heading */}
            <h1 className="text-3xl lg:text-5xl font-extrabold font-mono leading-tight">
              <span className="font-windsong text-5xl lg:text-6xl text-purple-700 block">
                Hi,
              </span>
              I'm <span className="text-blue-700">Ameet Kilambu</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg lg:text-xl font-semibold text-gray-700 mt-4">
              A Passionate Frontend Developer
            </p>

            {/* Description */}
            <p className="text-sm lg:text-base text-gray-600 max-w-xl mx-auto lg:mx-0 mt-4 leading-relaxed">
              I’m a frontend developer from Bhaktapur with a passion for
              creating interactive and responsive websites. I focus on modern
              web technologies to build visually appealing and functional user
              experiences. Always learning and improving, I stay up to date with
              the latest trends in web development. Let’s create something great
              together!
            </p>

            {/* Buttons */}
            <div className="flex justify-center lg:justify-start gap-4 pt-4 mt-4">
              <a
                href="/public/Amit-Frontend-2025.pdf"
                download="Amit-Frontend-2025.pdf"
              >
                <Buttons
                  title="Download CV"
                  className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
                />
              </a>
              {/* Optional second button */}
              {/* <Buttons
        title="Contact"
        className="bg-transparent border-2 border-black text-black px-6 py-2 rounded-md hover:bg-black hover:text-white transition"
      /> */}
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/3 mb-10 lg:mb-0 flex justify-center lg:justify-end">
            <img
              src={myphoto}
              alt="Ameet Kilambu"
              className="h-48 w-48 lg:h-72 lg:w-72 rounded-full shadow-xl object-cover transform transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Social Links */}
      <SocialCards />
    </>
  );
};

export default HeroSection;
