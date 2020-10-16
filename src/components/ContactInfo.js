import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import FollowMe from "./FollowMe";
import PersonalInfo from "./../personalInfo/PersonalInfo.json";

const ContactInfo = () => {
  return (
    <>
      <div className="text-4thColorLight flex flex-col justify-evenly sm:mb-16 ">
        <h2 className=" text-4xl font-extrabold text-4thColorLight ">
          {" "}
          Contact info
        </h2>
        <div className=" flex flex-col  h-48 justify-evenly ">
          <div className="text-2xl text-6thColorLight font-extrabold flex items-center   ">
            <FaMapMarkerAlt size={30} />
            <p className="ml-3">{PersonalInfo.location}</p>
          </div>
          <div className="text-2xl text-6thColorLight font-extrabold flex items-center   ">
            <HiOutlineMail size={30} />
            <p className="ml-3">{PersonalInfo.email}</p>
          </div>
          <div className="text-2xl text-6thColorLight font-extrabold flex items-center     ">
            <FaPhoneAlt size={30} />
            <p className="ml-3">{PersonalInfo.PhoneNo}</p>
          </div>
        </div>
        <FollowMe />
      </div>
    </>
  );
};

export default ContactInfo;
