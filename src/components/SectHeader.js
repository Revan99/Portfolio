import React from "react";
import styled from "styled-components";
const AboutSecHeader = styled.div`
  &:hover div {
    width: 100%;
  }
  div {
    transition: all ease 0.3s;
  }
`;
const SectHeader = ({ sectionName, them }) => {
  return (
    <AboutSecHeader
      AboutSecHeader
      className="cursor-pointer   mb-12 mx-auto flex flex-col items-center "
    >
      <h1
        className={`text-5xl inline-block mr-auto ${
          them ? " text-4thColorLight" : "text-5thColorDark"
        }   font-extrabold`}
      >
        {sectionName}
      </h1>
      <div className=" w-10/12 h-1 bg-primaryDark sm:mx-auto md:mx-0" />
    </AboutSecHeader>
  );
};

export default SectHeader;
