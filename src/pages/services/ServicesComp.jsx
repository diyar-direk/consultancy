import React from "react";

const ServicesComp = ({ chlidren }) => {
  return <div className="services">{chlidren}</div>;
};

ServicesComp.Title = ({ children }) => {
  return <h1> {children} </h1>;
};
ServicesComp.Icon = ({ children }) => {
  return <div className="icon">{children}</div>;
};
export default ServicesComp;
