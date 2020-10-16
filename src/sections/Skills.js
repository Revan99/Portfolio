import React from "react";
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
      className={` h-screen flex items-center justify-center ${
        them ? " bg-tertiaryLight" : "bg-tertiaryDark"
      }`}
    >
      <div className="grid grid-cols-2 h-1/2 w-4/5 border justify-items-stretch ">
        <div className="flex h-10 border w-4/5 mt-10 justify-self-center">
          sdfzsfsd
        </div>
        <div className="flex h-10 border w-4/5 mt-10 justify-self-center">
          sdfsdf
        </div>
        <div className="flex h-10 border w-4/5 mt-10 justify-self-center">
          sdfsdf
        </div>
        <div className="flex h-10 border w-4/5 mt-10 justify-self-center">
          sdfsfsdfsa
        </div>
      </div>
    </div>
  );
};

Skills.propTypes = propTypes;
Skills.defaultProps = defaultProps;
// #endregion

export default Skills;
