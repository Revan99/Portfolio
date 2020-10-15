import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const ContactInfo = () => {
  return (
    <div className="text-4thColorLight ">
      <h2 className=" text-4xl font-extrabold text-4thColorLight ">
        {" "}
        Contact info
      </h2>
      <div className=" flex flex-col  h-48 justify-evenly ">
        <div className="text-2xl text-6thColorLight font-extrabold flex items-center   ">
          <FaMapMarkerAlt size={30} />
          <p className="ml-3">Location</p>
        </div>
        <div className="text-2xl text-6thColorLight font-extrabold flex items-center   ">
          <HiOutlineMail size={30} />
          <p className="ml-3">Email</p>
        </div>
        <div className="text-2xl text-6thColorLight font-extrabold flex items-center     ">
          <FaPhoneAlt size={30} />
          <p className="ml-3">Phone number</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
