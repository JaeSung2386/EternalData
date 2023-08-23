import React from "react";
import "@/scss/index.scss";

import Qualifications from "@/components/qualifications/qualifications";

function about() {
  return (
    <div id="about" className="container about-container">
      <Qualifications />
    </div>
  );
}

export default about;
