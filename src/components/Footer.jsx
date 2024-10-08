import React from "react";
import "./footer.css";
import { NavLink } from "react-router-dom";
import Setting from "./Setting";
const Footer = () => {
  return (
    <footer className="center flex-direction">
      <div className="container">
        <div className="grid-3">
          <div className="info">
            <h1>title</h1>
            <div className="flex column-gap-10">
              <a className="whatsapp" href="" target="_blank">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a className="email" href="" target="_blank">
                <i className="fa-solid fa-envelope"></i>
              </a>
              <a className="location" href="" target="_blank">
                <i className="fa-solid fa-location-dot"></i>
              </a>
            </div>
            <Setting position="footer" />
          </div>
          <div className="links">
            <NavLink to={"/"}>home</NavLink>
            <NavLink to={"our_services"}>services</NavLink>
            <NavLink to={"/about_us"}>about us</NavLink>
          </div>
          <div className="links">
            <NavLink to={"/contact_us"}>contact us</NavLink>
            <NavLink to={"/join_us"}>join us</NavLink>
          </div>
        </div>
      </div>
      <div className="container center">
        © 2024 All rights reserved for Blue Elite Tech.
      </div>
    </footer>
  );
};

export default Footer;
