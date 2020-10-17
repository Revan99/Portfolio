import React from "react";

const ContactForm = ({ them }) => {
  return (
    <div className=" sm:w-full md:w-4/12 flex flex-col justify-around   ">
      <h2
        className={` block text-3xl sm:text-4xl font-extrabold ${
          them ? "text-4thColorLight" : "text-5thColorDark"
        } `}
      >
        {" "}
        Send meesage
      </h2>
      <div>
        <form className="flex flex-col justify-evenly">
          <label
            htmlFor="name"
            className={`text-xl sm:text-2xl mb-2 font-extrabold ${
              them ? "text-5thColorLight" : "text-5thColorDark"
            }`}
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
            className={`text-xl sm:text-2xl mb-2 font-extrabold ${
              them ? "text-5thColorLight" : "text-5thColorDark"
            }`}
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
            className={`text-xl sm:text-2xl mb-2 font-extrabold ${
              them ? "text-5thColorLight" : "text-5thColorDark"
            }`}
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
          <button className="rounded border-4  font-bold border-primaryLights  border-primaryLight transition-all duration-150  w-40  text-white bg-primaryLight py-3 hover:bg-transparent hover:text-primaryLight">
            Send message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
