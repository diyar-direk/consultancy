import React, { useContext } from "react";
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
ServicesComp.Details = ({ language }) => {
  return (
    <div className="flex details column-gap-20">
      <Link to={"/contact_us"} className="btn2 en-arrow">
        {language && language.button_get_started}
        <i className="fa-solid fa-angles-right "></i>
      </Link>

      <Link to={`/our_services`} className="btn">
        {language && language.button_read_more}
      </Link>
    </div>
  );
};

export default ServicesComp;
