
import React from "react";
import "./Footer.css";
import logo from "../../images/threadit_logo.png";

const Footer = () => {
  return (
    <div className="footer-container footer--pin">
      <a href="/" className="logo-footer">
        <img className="logo-footer-image" src={logo} />
      </a>
      <div className="footer-link-container">
        <i
          onClick={() =>
            window.open("https://github.com/elnorabills/Threaddit")
          }
          className="fa-brands fa-github fa-2xl"
        ></i>
        <i
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/eleanor-billerbeck-9165021b0/"
            )
          }
          className="fa-brands fa-linkedin fa-2xl"
        ></i>
      </div>
    </div>
  );
};

export default Footer;
