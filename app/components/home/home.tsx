"use client";

import React, { use, useEffect } from "react";
import "@/scss/index.scss";
import Buttons from "../button/button";
import { BsMouse } from "react-icons/bs";

function Home() {
  useEffect(() => {
    const toggle = document.querySelector(".main-img");
    toggle.addEventListener("click", () => {
      console.log("click");
      toggle.classList.toggle("active");
    });
  }, []);

  return (
    <div id="home" className="container home-container">
      <div className="logo">
        <div className="main-img">
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
        </div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Grass_at_a_lawn_with_morning_dew_02.jpg"
          alt=""
        />
      </div>
      <a href="#footer" className="scroll-down">
        <hr />
        <h5>scroll down</h5>
        <BsMouse className="scroll" />
        <hr />
      </a>
      <h2>
        <span>Amout Me</span>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          quos veritatis blanditiis voluptate vitae et sed velit hic eius iure
          tempora eum aspernatur ratione facere, rerum aperiam mollitia aut.
          Rerum.
        </p>
      </h2>
      <Buttons />
    </div>
  );
}

export default Home;
