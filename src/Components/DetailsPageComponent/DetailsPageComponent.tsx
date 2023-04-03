import React from "react";
import "./DetailsPageComponent.scss";
import iArrowBack from "../../Assets/np_back_3007750_000000 1.svg";
import UserBriefingComponent from "../UserBriefingComponent/UserBriefingComponent";

const DetailsPageComponent = () => {
  return (
    <div className="detailsPageComponent">
      <div className="prevBtn">
        <img src={iArrowBack} alt="" />
        <span>Back to Users</span>
      </div>
      <div className="introBox">
        <h1> User Details </h1>
        <div className="introBtns">
          <span>BLACKLIST USER</span>
          <span>ACTIVATE USER</span>
        </div>
      </div>
      <UserBriefingComponent />
    </div>
  );
};

export default DetailsPageComponent;
