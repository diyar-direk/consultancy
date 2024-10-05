import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link className="logo center">
      <img src={require("./logo.png")} alt="logo" />
    </Link>
  );
};

export default Logo;
