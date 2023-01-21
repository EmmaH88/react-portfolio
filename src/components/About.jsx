import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#113f67] text-[#ccd6f6]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi, I'm Emma, nice to meet you. Please feel free to look around.
            </p>
          </div>

          <div>
            <p className="text-lg">
              I am passionate about front-end development as it allows me to be
              creative and allows for a lot of flexibility in design and user
              experience. Additionally, front-end development plays a crucial
              role in creating websites and applications that are visually
              appealing and user-friendly. The ability to create something that
              people can interact with and enjoy is a huge motivator for me.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
