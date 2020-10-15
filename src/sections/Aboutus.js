import React from "react";
import styled from "styled-components";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const AboutSecHeader = styled.div`
  &:hover div {
    width: 100%;
  }
  div {
    transition: all ease 0.3s;
  }
`;
const Aboutus = () => {
  return (
    <div className="relative">
      <div className=" top-0 w-full  pt-12 h-screen flex items-center mt-20  flex-col  absolute    bg-tertiaryLight justify-evenly">
        <AboutSecHeader className="cursor-pointer">
          <h1 className=" text-5xl inline-block mr-auto  text-4thColorLight   font-extrabold">
            Contact me
          </h1>
          <div className=" w-10/12 h-1 bg-primaryDark" />
        </AboutSecHeader>
        <div className="flex justify-around flex-wrap w-full">
          <div className="text-4thColorLight">
            <h2 className="text-3xl "> Contact info</h2>
            <div className="">
              <p className="text-2xl text-6thColorLight font-extrabold">
                <FaMapMarkerAlt size={30} className="inline" />
                Location
              </p>
              <p className="text-2xl text-6thColorLight font-extrabold">
                <HiOutlineMail size={30} className="inline" />
                Email
              </p>
              <p className="text-2xl text-6thColorLight font-extrabold">
                <FaPhoneAlt size={25} className="inline" />
                Phone number
              </p>
            </div>
            <div></div>
          </div>
          <div className="">
            <form className="flex flex-col ">
              <label htmlFor="name" className="text-4thColorLight">
                Name
              </label>
              <input
                type="text"
                placeholder="Type your name "
                id="name"
                lassName="text-4thColorLight"
              />
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Type your email "
                id="email"
                lassName="text-4thColorLight"
              />
              <label htmlFor="message">Message</label>
              <textarea
                name=""
                id="Message"
                cols="30"
                rows="10"
                lassName="text-4thColorLight"
              ></textarea>
              <button>Send message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
