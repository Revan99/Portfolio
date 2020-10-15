import React from "react";

const AboutForm = () => {
  return (
    <div className=" sm:w-full md:w-4/12">
      <form className="flex flex-col ">
        <label
          htmlFor="name"
          className="text-2xl mb-2 font-extrabold text-5thColorLight"
        >
          Name
        </label>
        <input
          type="text"
          placeholder="Type your name "
          id="name"
          className="ml-3 mb-2 py-2 px-5 rounded"
        />
        <label
          htmlFor="email "
          className="text-2xl mb-2 font-extrabold text-5thColorLight"
        >
          Email
        </label>
        <input
          type="email"
          placeholder="Type your email "
          id="email"
          className="ml-3 mb-2 py-2 px-5 rounded"
        />
        <label
          htmlFor="message"
          className="text-2xl mb-2 font-extrabold text-5thColorLight"
        >
          Message
        </label>
        <textarea
          name=""
          id="Message"
          cols="30"
          rows="5"
          className="ml-3 mb-5"
        />
        <button className="rounded border-4  font-bold border-primaryLights  border-primaryLight transition-all duration-150  w-40  text-white bg-primaryLight py-3 hover:bg-transparent hover:text-4thColorLight">
          Send message
        </button>
      </form>
    </div>
  );
};

export default AboutForm;
