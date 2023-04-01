import React from "react";
import "./PageHeader.scss";
import Logo from "../../Assets/logo.svg";
import searchIcon from "../../Assets/searchIcon.svg";
import bellIcon from "../../Assets/bellIcon.svg";
import avatar from "../../Assets/avatar.png";
import arrow from "../../Assets/arrowDownIcon.svg";

const PageHeader = () => {
  return (
    <div className="header">
      <div className="left">
        <img src={Logo} alt="logo" className="logo" />
        <div className="searchField">
          <input type="search" placeholder="search for anything" />
          <div className="searchIcon">
            <img src={searchIcon} alt="" />
          </div>
        </div>
      </div>
      <div className="right">
        <div className="h-text">Docs</div>
        <div className="bellIcon">{bellIcon}</div>
        <div className="avatar">{avatar}</div>
        <div className="h-text">Adedeji</div>
        <div className="arrIcon">{arrow}</div>
      </div>
    </div>
  );
};

export default PageHeader;
