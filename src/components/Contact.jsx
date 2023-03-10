import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full md:h-screen bg-[#141010] text-[#ccd6f6] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/1b284558-8e98-4a9a-a17d-994a7d3f2c5a"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-[#C4195D] border-pink-600 text-grey-300">
            Contact
          </p>
          <p className="text-grey-300 py-4">
            Submit the form below or send me an email <br /> My Email:
            <a
              href="mailto: emmahanby21@outlook.com"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              emmahanby21@outlook.com
            </a>
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name..."
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email..."
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] text-black p-2"
          name="message"
          rows="10"
          placeholder="Message..."
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center  ">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
