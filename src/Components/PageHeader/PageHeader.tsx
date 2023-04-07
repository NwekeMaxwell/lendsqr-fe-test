import React, { useState } from "react";
import "./PageHeader.scss";
import Logo from "../../Assets/logo.svg";
import SearchIcon from "../../Assets/searchIcon.svg";
import BellIcon from "../../Assets/bellIcon.svg";
import Avatar from "../../Assets/avatar.jpg";
import Arrow from "../../Assets/arrowDownIcon.svg";
import Menu from "../../Assets/menu.svg";
import Cross from "../../Assets/cross.svg";

const PageHeader = () => {
  const [click, setClicked] = useState(false);
  const toggle = () => {
    setClicked((prev) => !prev);
  };

  return (
    <div className="header">
      <div className="left">
        <img src={Logo} alt="logo" className="logo" />
        <img
          onClick={toggle}
          src={click ? Cross : Menu}
          alt="logo"
          className="menuIcon"
        />
        <div className="searchField">
          <input type="search" placeholder="search for anything" />
          <div className="searchIcon">
            <img src={SearchIcon} alt="" />
          </div>
        </div>
      </div>
      <div className="right">
        <div className="h-text">Docs</div>
        <img src={BellIcon} alt="" className="bellIcon" />
        <img src={Avatar} alt="" className="avatar" />
        <div>Adedeji</div>
        <img src={Arrow} alt="" className="arrIcon" />
      </div>
    </div>
  );
};

export default PageHeader;
