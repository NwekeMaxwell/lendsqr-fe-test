import React from "react";
import "./List.scss";
import iOption from "../../Assets/ic-more-vert-18px.svg";

const List = () => {
  return (
    <div className="list">
      <span>ORGANIZATION</span>
      <span>USERNAME</span>
      <span>EMAIL</span>
      <span>PHONE NUMBER</span>
      <span>DATE JOINED</span>
      <span>STATUS</span>
      <img src={iOption} alt="" />
    </div>
  );
};

export default List;
