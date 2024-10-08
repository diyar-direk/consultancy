import React, { useContext } from "react";
import "./footer.css";
import { NavLink } from "react-router-dom";
import Setting from "./Setting";
import { Context } from "../context/Context";
const Footer = () => {
  const context = useContext(Context);
  const language = context.language && context.language;
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
            <NavLink to={"/"}>
              {language.header && language.header.home}
            </NavLink>
            <NavLink to={"our_services"}>
              {language.header && language.header.services}
            </NavLink>
            <NavLink to={"/about_us"}>
              {language.header && language.header.about_us}
            </NavLink>
          </div>
          <div className="links">
            <NavLink to={"/contact_us"}>
              {language.header && language.header.contact_us}
            </NavLink>
            <NavLink to={"/join_us"}>
              {language.header && language.header.join_us}
            </NavLink>
          </div>
        </div>
      </div>
      <div className="container center">
        {language.header && language.header.rights_reserved}
      </div>
    </footer>
  );
};

export default Footer;
