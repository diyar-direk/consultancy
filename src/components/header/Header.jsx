import React from "react";
import Logo from "../Logo";
import { Link, NavLink } from "react-router-dom";
import "./header.css";
import Setting from "../Setting";
const Header = () => {
  return (
    <header className="center">
      <div className="container">
        <div className="flex">
          <Logo />
          <div className="center flex flex-1 justify-end">
            <NavLink to={"/"}>home</NavLink>
            <NavLink to={"our_services"}>services</NavLink>
            <NavLink to={"/about_us"}>about us</NavLink>
            <Link className="btn2">contact us</Link>
            <Setting />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
