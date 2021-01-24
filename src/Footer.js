import React from "react";
import "./Footer.css";

function Footer(){
  return(
    <div className="Footer">
      <div className="wrap">
        <div className="code-by">
          <a href="https://github.com/CharlotteGachoud/pokemon-app" className="github-link" target="_blank" rel="noreferrer">
            Open-source code
          </a>{" "}
          by{" "}
          <a href="https://www.linkedin.com/in/charlotte-gachoud/" className="linkedIn-link" target="_blank" rel="noreferrer">
              Charlotte Gachoud
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;