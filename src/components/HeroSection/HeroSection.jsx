import myphoto from "../../assets/photomy.jpg";
import Buttons from "../Buttons/Buttons";
import SocialCards from "../cards/socialCards/SocialCards";

const HeroSection = () => {
  return (
    <>
      <section
        id="home"
        className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-4 py-12 lg:py-20 scroll-mt-10"
      >
        {/* Text Section */}
        <div className="w-full lg:w-2/4 text-center lg:text-left space-y-5">
          <h1 className="text-3xl lg:text-5xl font-extrabold font-serif leading-tight">
            <span className="font-windsong text-5xl lg:text-6xl text-purple-700 block">
              Hi,
            </span>
            I'm <span className="text-blue-700">Ameet Kilambu</span>
          </h1>

          <p className="text-lg lg:text-xl font-semibold text-gray-700">
            A Passionate Frontend Developer
          </p>

          <p className="text-sm lg:text-base text-gray-600 max-w-xl mx-auto lg:mx-0">
            I’m a frontend developer from Bhaktapur with a passion for creating
            interactive and responsive websites. I focus on modern web
            technologies to build visually appealing and functional user
            experiences. Always learning and improving, I stay up to date with
            the latest trends in web development. Let’s create something great
            together!
          </p>

          <div className="flex justify-center lg:justify-start gap-5 pt-2">
            <Buttons title="Download CV" className="bg-black text-white" />
            <Buttons
              title="Contact"
              className="bg-transparent border-2 border-black text-black"
            />
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
      </section>

      {/* Social Links */}
      <SocialCards />
    </>
  );
};

export default HeroSection;
