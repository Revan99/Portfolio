import React from "react";
import SectHeader from "../components/SectHeader";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";

const ContactMe = () => {
  return (
    <div className="relative">
      <div className=" top-0 w-full  pt-12 min-h-screen h-fitContent flex items-center mt-20 mb-2 flex-col  absolute    bg-tertiaryLight justify-evenly">
        <SectHeader sectionName={"About me"} />

        <div className="flex justify-around flex-wrap w-full">
          <ContactInfo />

          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
