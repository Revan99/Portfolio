import React from "react";
import PersonalInfo from "./../personalInfo/PersonalInfo.json";

export default function Home({ them, setThem }) {
  return (
    <div
      className={`flex flex-col sm:flex-row items-center justify-between h-screen  xl:justify-around transition-all duration-150  ${
        them ? "bg-tertiaryLight" : "bg-tertiaryDark"
      }
      `}
    >
      <div
        className={`h-5 bg-primaryLight w-10 rounded-full flex absolute mt-20 mr-20 top-0 right-0  `}
        onClick={() => {
          setThem((pThem) => !pThem);
        }}
      >
        <div
          className={`h-5 w-5 rounded-full transition-all duration-150 ${
            them ? " bg-4thColorLight" : "bg-4thColorDark"
          } ${them ? "ml-0" : "ml-5"}`}
        ></div>
      </div>
      <div className="flex flex-col mt-16 sm:mt-0 h-1/2">
        <h1
          className={`text-6xl ${
            them ? "text-4thColorLight" : "text-4thColorDark"
          }`}
          style={{ fontFamily: "Pacifico, cursive" }}
        >
          {PersonalInfo.name}
        </h1>
        <h1
          className={`text-2xl ${
            them ? "text-5thColorLight" : "text-5thColorDark"
          }`}
          style={{ fontFamily: "Pacifico, cursive" }}
        >
          {PersonalInfo.jobTitle}
        </h1>
        <button
          className={`mt-20 sm:mt-32 rounded mr-8 w-56 h-12 border-2 hover:bg-transparent hover:text-primaryDark border-primaryLight text-7thColorLight text-xl transition-all duration-150 ${
            them ? "bg-primaryLight" : "bg-primaryDark"
          }`}
        >
          Hire me
        </button>
      </div>

      <div
        className={`flex justify-center transition-all duration-150 min-h-16`}
      >
        <img
          src={
            them
              ? "./../images/lightmode/revan.png"
              : "images/darkmode/revan1.png"
          }
          alt="my"
          className=""
        />
      </div>
    </div>
  );
}
