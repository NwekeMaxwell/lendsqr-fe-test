import React from "react";
import "./UserDropdownOption.scss";
import iEye from "../../Assets/np_view_1214519_000000 1.svg";
import iUserDelete from "../../Assets/np_delete-friend_3248001_000000 1.svg";
import iUserActivate from "../../Assets/np_view_1214519_000000 1.svg";
import { Link } from "react-router-dom";

const UserDropdownOption = () => {
  return (
    <Link to="/userdetails/:id" className="optionBox">
      <div>
        <img src={iEye} alt="" />
        <span>View Details</span>
      </div>
      <div>
        <img src={iUserDelete} alt="" />
        <span>Blacklist User</span>
      </div>
      <div>
        <img src={iUserActivate} alt="" />
        <span>Activate User</span>
      </div>
    </Link>
  );
};

export default UserDropdownOption;
