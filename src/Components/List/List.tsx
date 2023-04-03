import React from "react";
import "./List.scss";
import iOption from "../../Assets/ic-more-vert-18px.svg";
// import UserDropdownOption from "../UserDropdownOption/UserDropdownOption";

const List = () => {
  // const overlay = document.querySelector(".overlay");
  // const optionBox = document.querySelector(".optionBox");
  // function toggleOption() {
  //   overlay?.classList.toggle("hidden");
  //   optionBox?.classList.toggle("hidden");
  // }

  return (
    <div className="list">
      <span>ORGANIZATION</span>
      <span>USERNAME</span>
      <span>EMAIL</span>
      <span>PHONE NUMBER</span>
      <span>DATE JOINED</span>
      <span>STATUS</span>
      <img src={iOption} alt="" className="iOption" />
      {/* <UserDropdownOption /> */}
    </div>
  );
};

export default List;
