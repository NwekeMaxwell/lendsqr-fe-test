import React from "react";
import "./UserBriefingComponent.scss";
import Avatar from "../../Assets/avatar.svg";
import iStarFilled from "../../Assets/np_star_1208084_000000 1.svg";
import iStar from "../../Assets/np_star_1171151_000000 1.svg";

const UserBriefingComponent = () => {
  return (
    <div className="userBriefBox">
      <div className="briefing">
        <img src={Avatar} alt="" />
        <div className="center">
          <h1> Grace Effiom</h1>
          <h3> LSQFf587g90</h3>
        </div>
        <div className="border">
          <h3> User's Tier</h3>
          <img src={iStarFilled} alt="" />
          <img src={iStar} alt="" />
          <img src={iStar} alt="" />
        </div>
        <div className="center">
          <h1>N200,000.00</h1>
          <h3>9912345678/Providus Bank</h3>
        </div>
      </div>

      <div className="subHeadings">
        <span className="active">General Details</span>
        <span>Documents</span>
        <span>Bank Details</span>
        <span>Loans</span>
        <span>Savings</span>
        <span>App and System</span>
      </div>
    </div>
  );
};

export default UserBriefingComponent;
