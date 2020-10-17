import React from "react";
import SectHeader from "../components/SectHeader";
import PersonalInfo from "./../personalInfo/PersonalInfo.json";
// import PropTypes from 'prop-types';

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 *
 */
const AboutMe = ({ them }) => {
  console.log("====================================");
  console.log(them);
  console.log("====================================");
  return (
    <div
      className={`min-h-screen flex flex-col md:flex-row justify-start items-center ${
        them ? "bg-7thColorLight" : "bg-secondaryDark"
      }`}
    >
      <div className="flex  w-5/12 justify-center relative items-center mt-12 md:mt-0">
        <div>
          <img src={PersonalInfo.imageSources.aboutImage} alt="circle" />
        </div>
        <div className="flex justify-center items-center mt-10 absolute">
          <SectHeader sectionName={"AboutMe"} them={them} />
        </div>
      </div>
      <div className="flex flex-col  w-7/12 justify-center items-start mt-12 md:mt-0">
        <p
          className={`${
            them ? "text-6thColorLight" : "text-7thColorDark"
          } pr-5`}
        >
          {PersonalInfo.aboutMe}
        </p>
        <div className="flex justify-between ">
          <button
            className={` mt-16 rounded mr-8 w-56 h-12 border-2 hover:bg-transparent hover:text-primaryDark border-primaryLight text-7thColorLight text-xl transition-all duration-150 bg-primaryDark `}
          >
            Projects
          </button>
          <button
            className={`mt-16 rounded ml-8 w-56 h-12 border-2 hover:bg-primaryDark hover:text-7thColorLight border-primaryLight  text-primaryDark text-xl transition-all duration-150 bg-transparent`}
          >
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

AboutMe.propTypes = propTypes;
AboutMe.defaultProps = defaultProps;
// #endregion

export default AboutMe;
