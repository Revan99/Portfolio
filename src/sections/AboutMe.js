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
  return (
    <div
      id="aboutme"
      className={` top-0 w-full  pt-12 min-h-screen h-fitContent flex items-center  pb-2 flex-col ${
        them ? "bg-4thColorDark" : "bg-secondaryDark"
      }  justify-evenly`}
    >
      <SectHeader sectionName={"About Me"} them={them} />
      <div className=" flex flex-wrap justify-between">
        <div>
          <div>
            <img src={PersonalInfo.imageSources.aboutImage} alt="circle" />
          </div>
          <div className="flex justify-center items-center  absolute"></div>
        </div>
        <div className="flex flex-col  sm:w-7/12 w-full justify-center items-center p-5  md:mt-0">
          <p
            className={`${
              them ? "text-6thColorLight" : "text-7thColorDark"
            } pr-5`}
          >
            {PersonalInfo.aboutMe}
          </p>
          <div className=" flex  sm:justify-start w-full mt-3 justify-between ">
            <button
              className={`rounded border-4 sm:mr-5 mr-0 font-bold border-primaryLights  border-primaryLight transition-all duration-150  w-40 hover:text-7thColorLight text-primaryLight bg-transparent py-2 hover:bg-primaryLight `}
            >
              Projects
            </button>
            <button
              className={`rounded border-4  font-bold border-primaryLights  border-primaryLight transition-all duration-150  w-40 hover:text-primaryDark text-7thColorLight bg-primaryLight py-2 hover:bg-transparent `}
            >
              <a href={PersonalInfo.cv}>Download CV</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

AboutMe.propTypes = propTypes;
AboutMe.defaultProps = defaultProps;
// #endregion

export default AboutMe;
