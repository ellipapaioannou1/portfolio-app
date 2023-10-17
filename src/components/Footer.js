import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";

import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://github.com/ellipapaioannou1" >
           <GithubIcon />
          </a>
        <a href="https://www.linkedin.com/in/ellipapaioannou" >
           <LinkedInIcon />
        </a>
      </div>
      <p> &copy; 2023 Elli Papaioannou</p>
    </div>
  );
}

export default Footer;

