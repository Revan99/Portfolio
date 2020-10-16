import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
window.addEventListener("scroll", () => {
  const navEl = document.getElementById("navbar");
  if (window.pageYOffset > 50 && !navEl.classList.contains("navbar")) {
    navEl.classList.add("navbar");
    console.log(navEl.classList.contains("navbar"));
  }
  if (window.pageYOffset < 50 && navEl.classList.contains("navbar")) {
    navEl.classList.remove("navbar");
  }
});
const Nav = styled.nav`
  .logo {
    padding: 15px 0;
  }
`;

const Navbar = () => {
  return (
    <Nav
      id="navbar"
      className=" fixed   bg-secondaryLight z-50 h-16 w-full py-0 px-5 flex justify-between"
    >
      <div className="logo ">Nav Bar</div>
      <Burger />
    </Nav>
  );
};

export default Navbar;
