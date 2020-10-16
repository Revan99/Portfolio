import React from "react";
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
const Skills = ({ them }) => {
  return (
    <div
      className={` min-h-screen flex items-center justify-center ${
        them ? " bg-tertiaryLight" : "bg-tertiaryDark"
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 h-1/2 w-4/5 justify-items-stretch ">
        {PersonalInfo.skills.map((element) => {
          return (
            <div className="flex flex-col w-4/5 mt-5 justify-self-center ">
              <div className="flex items-end mb-4">
                <img src={element.logo} alt={element.name + " logo"} />
                <h1>{element.name}</h1>
              </div>
              <div className="flex h-12 w-full bg-4thColorLight rounded">
                <div
                  className="flex w-20 bg-primaryDark rounded"
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
