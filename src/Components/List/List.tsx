import React from "react";
import "./List.scss";
import iOption from "../../Assets/ic-more-vert-18px.svg";
import { Link } from "react-router-dom";
import { iContext } from "../../useFetchData";
// import UserDropdownOption from "../UserDropdownOption/UserDropdownOption";

const List = ({
  id,
  orgName,
  userName,
  email,
  phoneNumber,
  createdAt,
  lastActiveDate,
}: iContext) => {
  return (
    <div>
      <Link to="/userdetails" className="list">
        <span>{orgName}</span>
        <span>{userName}</span>
        <span> {email}</span>
        <span> {phoneNumber}</span>
        <span>{createdAt}</span>
        <span> {lastActiveDate}</span>
        <img src={iOption} alt="" className="iOption" />
      </Link>
    </div>
  );
};

export default List;

// lensqr link id 1
// https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users
// lensqr link id 2
// https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/:id
