import React from "react";
import { Link } from "react-router-dom";
const STYLES = [
  "btn-outline border text-secondary",
  "btn-primary btn-split ml-2",
  "btn-outline rounded-pill",
];
const Button = ({ children, buttonStyle, onClick }) => {
  const checkStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  return (
    <Link to="/" className={`btn  ${checkStyle} `} onClick={onClick}>
      {children}
    </Link>
  );
};

export default Button;
