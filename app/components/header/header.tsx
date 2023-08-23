import React from "react";

import "@/scss/index.scss";

function Header() {
  return (
    <div id="home" className="container header-container">
      <h3>
        <p>
          I <span>{"'"}</span>m
        </p>
        Kang Jae Seong
      </h3>
      <h2>Front-End Web Developer</h2>
    </div>
  );
}

export default Header;
