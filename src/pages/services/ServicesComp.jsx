import React from "react";
import { Link } from "react-router-dom";
import "./services.css";
const ServicesComp = ({ children }) => {
  return <div className="services">{children}</div>;
};

ServicesComp.H1 = ({ children }) => {
  return <h1>{children}</h1>;
};

ServicesComp.P = ({ children }) => {
  return <p>{children}</p>;
};

ServicesComp.Icon = ({ children }) => {
  return <div className="icon">{children}</div>;
};
ServicesComp.Details = () => {
  return (
    <div className="flex details column-gap-20">
      <Link to={"/contact_us"} className="btn2 en-arrow">
        get started
        <i className="fa-solid fa-angles-right "></i>
      </Link>

      <Link to={"/services"} className="btn">
        read more
      </Link>
    </div>
  );
};

export default ServicesComp;
