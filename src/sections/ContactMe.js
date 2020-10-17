import React from "react";
import SectHeader from "../components/SectHeader";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";

const ContactMe = ({ them }) => {
  return (
    <div className="relative" id="contact">
      <div
        className={` top-0 w-full  pt-12 min-h-screen h-fitContent flex items-center  pb-2 flex-col p-5 absolute   ${
          them ? "bg-tertiaryLight" : "bg-tertiaryDark"
        }  justify-evenly`}
      >
        <SectHeader them={them} sectionName={"Contact me"} />

        <div className="flex justify-around flex-wrap w-full">
          <ContactInfo them={them} />

          <ContactForm them={them} />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
