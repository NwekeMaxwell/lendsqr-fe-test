import React from "react";
import "./SubHeading.scss";
import { Link } from "react-router-dom";

interface iUser {
  icon: string;
  title: string;
  className?: string;
  otherProp?: string;
  link?: string;
}
const SubHeading = ({
  link = "/dashboard",
  icon,
  title,
  otherProp,
  className,
}: iUser) => {
  return (
    <Link to={link} className={`${className} subheading`}>
      <img src={icon} alt="" className="icon" />
      <div className="title">{title}</div>
      {otherProp ? <img src={otherProp} alt="" className="arrowIcon" /> : ""}
    </Link>
  );
};

export default SubHeading;
