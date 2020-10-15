import React, { useState } from "react";
import myImageLight from "./../images/lightmode/revan.png";
import myImageDark from "./../images/darkmode/revan.png";
import PersonalInfo from "./../personalInfo/PersonalInfo.json";

export default function Home() {
  console.log(PersonalInfo);
  const [them, setThem] = useState(() => true);
  return (
    <div
      className={`flex flex-col sm:flex-row items-center justify-between h-screen  xl:justify-around  ${
        them ? "bg-tertiaryLight" : "bg-tertiaryDark"
      }
      `}
    >
      <div
        className={`h-5 bg-primaryLight w-10 rounded-full flex absolute mt-20 mr-20 top-0 right-0 ${
          them ? "justify-start" : "justify-end"
        }`}
        onClick={() => {
          setThem((pThem) => !pThem);
        }}
      >
        <div
          className={`h-5 w-5 rounded-full ${
            them ? " bg-4thColorLight" : "bg-4thColorDark"
          }`}
        ></div>
      </div>
      <div className="flex flex-col mt-16 sm:mt-0 h-1/2">
        <h1
          className={`text-6xl ${
            them ? "text-4thColorLight" : "text-4thColorDark"
          }`}
        >
          {PersonalInfo.name}
        </h1>
        <h1
          className={`text-2xl ${
            them ? "text-5thColorLight" : "text-5thColorDark"
          }`}
        >
          {PersonalInfo.jobTitle}
        </h1>
        <button
          className={`mt-20 sm:mt-32 rounded mr-8  ${
            them ? "bg-primaryLight" : "bg-primaryDark"
          }`}
        >
          Hire me
        </button>
      </div>

      <div className={`flex justify-center  min-h-16`}>
        <img src={them ? myImageLight : myImageDark} alt="my" className="" />
      </div>
    </div>
  );
}
