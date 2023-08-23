import React from "react";

import "@/scss/index.scss";

import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { TiGroupOutline } from "react-icons/ti";
import { BiMessageRoundedDots } from "react-icons/bi";
import { BsArrowDownCircle } from "react-icons/bs";

function nav() {
  const handleIconClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeActive(e.currentTarget);
  };

  const changeActive = (target) => {};

  return (
    <div className="navigation">
      <a href="#home">
        <AiOutlineHome className="icon active-nav" />
      </a>
      <a href="#about">
        <AiOutlineUser className="icon active-nav" />
      </a>
      <a href="#members">
        <TiGroupOutline className="icon active-nav" />
      </a>
      <a href="#contact">
        <BiMessageRoundedDots className="icon active-nav" />
      </a>
      <a href="#footer">
        <BsArrowDownCircle className="icon active-nav" />
      </a>
    </div>
  );
}

export default nav;
