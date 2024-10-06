import React from "react";
import Logo from "../Logo";
import { Link, NavLink } from "react-router-dom";
import "./header.css";
import Setting from "../Setting";
const Header = () => {
  window.addEventListener("scroll", () => {
    const btn = document.querySelector(".scroll-to-top");
    const header = document.querySelector("header");
    if (window.scrollY >= 500) btn.classList.add("active");
    else btn.classList.remove("active");
    if (window.scrollY >= 600) header.classList.add("scroll");
    else header.classList.remove("scroll");
  });
  return (
    <>
      <header className="center">
        <div className="container">
          <div className="flex">
            <Logo />
            <div className="center flex flex-1 justify-end">
              <NavLink to={"/"}>home</NavLink>
              <NavLink to={"our_services"}>services</NavLink>
              <NavLink to={"/about_us"}>about us</NavLink>
              <NavLink to={"/contact_us"}>contact us</NavLink>
              <Setting />
            </div>
          </div>
        </div>
      </header>
      <div
        className="center scroll-to-top"
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        <i className="fa-solid fa-angles-up "></i>
      </div>
    </>
  );
};

export default Header;
