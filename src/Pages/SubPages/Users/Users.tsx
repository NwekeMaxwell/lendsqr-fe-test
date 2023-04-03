import React from "react";
import "./Users.scss";
import SummaryBox from "../../../Components/SummaryBox/SummaryBox";
import iPink from "../../../Assets/icon (1).svg";
import ipurple from "../../../Assets/icon (2).svg";
import ired from "../../../Assets/icon (3).svg";
import iorange from "../../../Assets/icon (4).svg";

const Users = () => {
  return (
    <div className="usersContainer">
      <h1 className="title">Users</h1>
      <div className="summary">
        <SummaryBox icon={iPink} title="USERS" count="2,453" />
        <SummaryBox icon={ipurple} title="ACTIVE USERS" count="2,453" />
        <SummaryBox icon={iorange} title="USERS WITH LOANS" count="12,453" />
        <SummaryBox icon={ired} title="USERS WITH SAVINGS" count="2,453" />
      </div>
      <div className="usersList">big box</div>
      <div> footer</div>
    </div>
  );
};

export default Users;
