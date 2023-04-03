import React from "react";
import "./SubHeading.scss";

interface iUser {
  icon: string;
  title: string;
  className?: string;
  otherProp?: string;
}

const SubHeading = ({ icon, title, otherProp, className }: iUser) => {
  function onClick() {
    const navBar = document.querySelector(".subheading");
    navBar?.addEventListener("click", function () {
      console.log("clicked navBar");
    });
  }

  return (
    <div onClick={onClick} className={`${className} subheading`}>
      <img src={icon} alt="" className="icon" />
      <div className="title">{title}</div>
      {otherProp ? <img src={otherProp} alt="" className="arrowIcon" /> : ""}
    </div>
  );
};

export default SubHeading;
