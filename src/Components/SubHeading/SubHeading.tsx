import React from "react";
import "./SubHeading.scss";

interface iUser {
  icon: string;
  title: string;
  className?: string;
  otherProp?: string;
}
const SubHeading = ({ icon, title, otherProp, className }: iUser) => {
  return (
    <div className={`${className} subheading`}>
      <img src={icon} alt="" className="icon" />
      <div className="title">{title}</div>
      {otherProp ? <img src={otherProp} alt="" className="arrowIcon" /> : ""}
    </div>
  );
};

export default SubHeading;
