import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className=" w-full h-screen bg-[#113f67]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-3xl text-[#E7EAF6]">Hi, my name is </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Emma Hanby
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a junior front end developer
        </h2>
        <p className="text-[#E7EAF6] text-xl  py-4 max-w-[700px]">
          There are many reasons why I love front-end development. <br /> I like
          to create visually appealing and user-friendly websites and web
          applications, and the ability to directly see and interact with the
          results of my work, and the constant evolution and innovation in
          technology and design principles. Additionally, I find the
          problem-solving aspect of front-end development both challenging and
          ultimately rewarding.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            View My Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
