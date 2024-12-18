import React from "react";
import myphoto from "../../assets/photomy.jpg"; // Assuming you are using this image
import Buttons from "../Buttons/Buttons";
import SocialCards from "../cards/socialCards/SocialCards";

const HeroSection = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col-reverse lg:flex-row px-4 py-8 items-center justify-between">
        {/* Text Section */}
        <div className="w-full lg:w-2/4 text-center lg:text-left">
          <h1 className="text-3xl lg:text-4xl font-extrabold mb-4 font-serif">
            <span className="font-windsong text-5xl lg:text-6xl text-purple-700">
              Hi,
            </span>{" "}
            I'm Ameet Kilambu
          </h1>
          <p className="text-lg lg:text-xl mb-4 font-bold">
            A Passionate Frontend Developer
          </p>
          <p className="text-sm lg:text-md mb-8">
            I’m a frontend developer from Bhaktapur with a passion for creating
            interactive and responsive websites. I focus on modern web
            technologies to build visually appealing and functional user
            experiences. Always learning and improving, I stay up-to-date with
            the latest trends in web development. Let’s create something great
            together!
          </p>
          <div className="flex justify-center lg:justify-start gap-5">
            <Buttons title={"Download CV"} className="bg-black text-white" />
            <Buttons
              title={"Contact"}
              className="bg-transparent border-2 border-black text-black"
            />
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
          <img
            src={myphoto}
            alt="Ameet Kilambu"
            className="h-48 w-48 lg:h-auto lg:w-auto rounded-full mx-auto lg:mx-0"
          />
        </div>
      </div>
      <SocialCards />
    </>
  );
};

export default HeroSection;
