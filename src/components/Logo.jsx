import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"} className="logo center">
      <img loading="lazy" src={require("./logo.png")} alt="logo" />
    </Link>
  );
};

export default Logo;
