import React from "react";
import "./List.scss";
import iOption from "../../Assets/ic-more-vert-18px.svg";
import { Link } from "react-router-dom";
import { iContext } from "../../useFetchData";
import moment from "moment";
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
  const date = moment(createdAt).format("MMMM Do YYYY, h:mm a");
  // const getStatus = () => {
  //   let status= "";
  //   if (year > 2040) {
  //    status === "Active";
  //   }

  //   if (year > 2010 && year < 2040) {
  //    status === "Inactive";
  //   }

  //   if (year < 2000) {
  //    status === "Blacklisted";
  //   }
  //   }
  //   if (year > 2000 && year < 2010) {
  //    status === "Pending";
  //   }
  return (
    <div>
      <Link to={`/userdetails/:${id}`} className="list">
        <span>{orgName}</span>
        <span>{userName}</span>
        <span> {email}</span>
        <span> {phoneNumber}</span>
        <span>{date}</span>
        <span id="a"> Active </span>
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
