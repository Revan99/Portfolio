import React from "react";
import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.nav`
  .logo {
    padding: 15px 0;
  }
`;

const Navbar = ({ them }) => {
  window.addEventListener("scroll", () => {
    let navClass = them ? "light-nav" : "dark-nav";
    const navEl = document.getElementById("navbar");
    if (window.pageYOffset > 50 && !navEl.classList.contains(navClass)) {
      navEl.classList.add(navClass);
    }
    if (window.pageYOffset < 50 && navEl.classList.contains(navClass)) {
      navEl.classList.remove(navClass);
    }
  });

  return (
    <Nav
      id="navbar"
      className={`fixed  ${
        them
          ? "bg-secondaryLight  border-b-0 border-red-600"
          : "bg-secondaryDark"
      }  z-50 h-16 w-full py-0 px-5 flex justify-between`}
    >
      <div className="logo ">Nav Bar</div>
      <Burger them={them} />
    </Nav>
  );
};

export default Navbar;
