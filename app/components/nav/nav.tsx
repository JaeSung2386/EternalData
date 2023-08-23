"use client";

import React, { useEffect } from "react";

import "@/scss/index.scss";

import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { TiGroupOutline } from "react-icons/ti";
import { BiMessageRoundedDots } from "react-icons/bi";
import { BsArrowDownCircle } from "react-icons/bs";

function Nav() {
  useEffect(() => {
    const Icons = document.querySelectorAll(".navigation .icon");
    Icons.forEach((icon) => {
      icon.addEventListener("click", () => {
        changeActive();
        icon.classList.add("active-nav");
      });
    });
  }, []);

  const changeActive = () => {
    const Icons = document.querySelectorAll(".navigation .icon");
    Icons.forEach((icon) => {
      icon.classList.remove("active-nav");
    });
  };

  return (
    <div className="navigation">
      <a href="#home">
        <AiOutlineHome className="icon active-nav" />
      </a>
      <a href="#about">
        <AiOutlineUser className="icon" />
      </a>
      <a href="#members">
        <TiGroupOutline className="icon" />
      </a>
      <a href="#contact">
        <BiMessageRoundedDots className="icon" />
      </a>
      <a href="#footer">
        <BsArrowDownCircle className="icon" />
      </a>
    </div>
  );
}

export default Nav;
