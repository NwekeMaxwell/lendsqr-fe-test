import React from "react";
import "./UsersPageComponent.scss";
import SummaryBox from "../SummaryBox/SummaryBox";
import iPink from "../../Assets/icon (1).svg";
import ipurple from "../../Assets/icon (2).svg";
import ired from "../../Assets/icon (3).svg";
import iorange from "../../Assets/icon (4).svg";
import UsersListBox from "../UsersListBox/UsersListBox";
import Footer from "../Footer/Footer";

const UsersPageComponent = () => {
  return (
    <div className="usersContainer">
      <h1 className="title">Users</h1>
      <div className="summary">
        <SummaryBox icon={iPink} title="USERS" count="2,453" />
        <SummaryBox icon={ipurple} title="ACTIVE USERS" count="2,453" />
        <SummaryBox icon={iorange} title="USERS WITH LOANS" count="12,453" />
        <SummaryBox icon={ired} title="USERS WITH SAVINGS" count="102,453" />
      </div>
      <div className="usersListBox">
        <UsersListBox />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default UsersPageComponent;
