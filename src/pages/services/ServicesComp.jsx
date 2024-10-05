import React from "react";
import { Link } from "react-router-dom";
import "./services.css";
const ServicesComp = ({ children }) => {
  return <div className="services">{children}</div>;
};

ServicesComp.H1 = ({ children }) => {
  return <h1>{children}</h1>;
};

ServicesComp.P = ({ children, more }) => {
  return (
    <p>
      {children} {more && <Link to={"/our_services"}>Read More ...</Link>}{" "}
    </p>
  );
};

ServicesComp.Icon = ({ children }) => {
  return <div className="icon">{children}</div>;
};

export default ServicesComp;
