import React from "react";

const Home = () => {
  return (
    <div name="home" className=" w-full h-screen bg-[#141010]">
      <div className="max-w-[1000px] mx-auto px-10 flex flex-col justify-center h-full">
        <p className="text-3xl text-[#F70776] pt-12 pb-4">Hi, my name is </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#C4195D]">
          Emma Hanby
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#680647]">
          I'm a junior front end developer
        </h2>
        <p className="text-[#ccd6f6] text-xl  py-4 max-w-[700px]">
          There are many reasons why I love front-end development. <br /> I like
          to create visually appealing and user-friendly websites and web
          applications, and the ability to directly see and interact with the
          results of my work, and the constant evolution and innovation in
          technology and design principles. Additionally, I find the
          problem-solving aspect of front-end development both challenging and
          ultimately rewarding.
        </p>
      </div>
    </div>
  );
};

export default Home;
