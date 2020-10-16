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
const SectHeader = ({ sectionName }) => {
  return (
    <AboutSecHeader
      AboutSecHeader
      className="cursor-pointer   mb-12 mx-auto flex flex-col items-center "
    >
      <h1 className=" text-5xl inline-block mr-auto  text-4thColorLight   font-extrabold">
        {sectionName}
      </h1>
      <div className=" w-10/12 h-1 bg-primaryDark sm:mx-auto md:mx-0" />
    </AboutSecHeader>
  );
};

export default SectHeader;
