import React from "react";

import "@/scss/index.scss";

function Buttons() {
  return (
    <div className="container button-contain">
      <a href="#about" className="btn pri">
        Learn more
      </a>
      <a href="#contact" className="btn sec">
        Get in Touch
      </a>
    </div>
  );
}

export default Buttons;
