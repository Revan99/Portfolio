import React from "react";
import PersonalInfo from "./../personalInfo/PersonalInfo.json";
import SectHeader from "./../components/SectHeader";
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
const Skills = ({ them }) => {
  return (
    <div
      id="skills"
      className={` min-h-screen flex flex-col items-center justify-center ${
        them
          ? " bg-tertiaryLight text-4thColorLight"
          : "bg-tertiaryDark text-5thColorDark"
      }`}
    >
      <div className="flex ">
        <SectHeader sectionName={"Skills"} them={them} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 h-1/2 w-4/5 justify-items-stretch ">
        {PersonalInfo.skills.map((element, index) => {
          return (
            <div
              key={`${element.name}-${index}`}
              className="flex flex-col w-4/5 mt-5 mb-5 justify-self-center "
            >
              <div className="flex items-end mb-4">
                <img src={element.logo} alt={element.name + " logo"} />
                <h1>{element.name}</h1>
              </div>
              <div className="flex h-12 w-full bg-4thColorLight rounded">
                <div
                  className="flex bg-primaryDark rounded transition-all duration-150"
                  key={index}
                  style={{
                    width: `${element.knowledge}%`,
                  }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

Skills.propTypes = propTypes;
Skills.defaultProps = defaultProps;
// #endregion

export default Skills;
