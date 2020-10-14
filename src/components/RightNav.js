import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
const lists = [
  { name: "Home", url: "#" },
  { name: "Skills", url: "#" },
  { name: "Projects", url: "#" },
  { name: "Contact", url: "#" },
];
const Ul = styled.ul`
  width: 300px;
  background-color: #0d2538;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  li {
    border-color: "#F4B500";
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul
      open={open}
      className="transition-transform duration-500 ease-in-out top-0 right-0  p-12 h-screen flex fixed items-center list-none flex-col"
    >
      {lists.map((list,i) => (
        <motion.li
          className={ `font-bold mt-32 border-primary rounded cursor-pointer border-solid border-2 py-2 px-8 text-white`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          whileHover={{
            backgroundColor: "#F4B500",
            transition: { ease: "easeInOut" },
          }}
        >
          <a href={list.url}>{list.name}</a>
        </motion.li>
      ))}
    </Ul>
  );
};

export default RightNav;
