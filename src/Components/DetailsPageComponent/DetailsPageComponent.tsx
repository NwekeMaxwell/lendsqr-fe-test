import React from "react";
import "./DetailsPageComponent.scss";
import iArrowBack from "../../Assets/np_back_3007750_000000 1.svg";
import UserBriefingComponent from "../UserBriefingComponent/UserBriefingComponent";
import UserDetailsComponent from "../UserDetailsComponent/UserDetailsComponent";
import { Link } from "react-router-dom";

const DetailsPageComponent = () => {
  return (
    <div className="detailsPageComponent">
      <Link to="/users" className="prevBtn">
        <img src={iArrowBack} alt="" />
        <span>Back to Users</span>
      </Link>
      <div className="introBox">
        <h1> User Details </h1>
        <div className="introBtns">
          <span>BLACKLIST USER</span>
          <span>ACTIVATE USER</span>
        </div>
      </div>
      <UserBriefingComponent />
      <UserDetailsComponent />
    </div>
  );
};

export default DetailsPageComponent;
