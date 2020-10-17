import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import PersonalInfo from "./../../personalInfo/PersonalInfo.json";
const Nav = styled.nav`
  .logo {
    width: 25px;

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
      <div className="logo ">
        <a href="#home">
          <img src={PersonalInfo.navLogo} alt="" />
        </a>
      </div>
      <Burger them={them} />
    </Nav>
  );
};

export default Navbar;
