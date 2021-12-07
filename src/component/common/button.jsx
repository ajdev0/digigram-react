import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, buttonStyle, onClick }) => {
  return (
    <Link to="/" className={`btn ${buttonStyle} `} onClick={onClick}>
      {children}
    </Link>
  );
};

export default Button;
