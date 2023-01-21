import React from "react";
import bootstrap from "../assests/bootstrap.png";
import css from "../assests/css.png";
import github from "../assests/github.png";
import html from "../assests/html.png";
import javascript from "../assests/javascript.png";
import node from "../assests/node.png";
import react from "../assests/react.png";
import tailwind from "../assests/tailwind.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen text-gray-300 bg-[#113f67]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl text-bold inline border-b-4 border-pink-600 ">
            Skills
          </p>
          <p className="py-4">
            These are the technologies I have worked with...
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={html} alt="html icon" />
            <p className="my-4">HTML</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={css} alt="css icon" />
            <p className="my-4">CSS</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={javascript}
              alt="javascript icon"
            />
            <p className="my-4">JavaScript</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={github} alt="github icon" />
            <p className="my-4">GitHub</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={node} alt="node icon" />
            <p className="my-4">NodeJS</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={bootstrap}
              alt="bootstrap icon"
            />
            <p className="my-4">Bootstrap</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={react} alt="react icon" />
            <p className="my-4">ReactJS</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={tailwind} alt="tailwind icon" />
            <p className="my-4">Tailwind</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
