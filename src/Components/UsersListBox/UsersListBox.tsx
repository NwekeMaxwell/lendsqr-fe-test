import React from "react";
import "./UsersListBox.scss";
import iFilter from "../../Assets/filter-results-button.svg";
import List from "../List/List";

const UsersListBox = () => {
  return (
    <div className="usersList">
      <div className="heading">
        <span>
          ORGANIZATION <img src={iFilter} alt="" className="iFilter" />
        </span>
        <span>
          USERNAME <img src={iFilter} alt="" className="iFilter" />
        </span>
        <span>
          EMAIL <img src={iFilter} alt="" className="iFilter" />
        </span>
        <span>
          PHONE NUMBER <img src={iFilter} alt="" className="iFilter" />
        </span>
        <span>
          DATE JOINED <img src={iFilter} alt="" className="iFilter" />
        </span>
        <span>
          STATUS <img src={iFilter} alt="" className="iFilter" />
        </span>
      </div>
      <div className="listComponent">
        <List />
      </div>
    </div>
  );
};

export default UsersListBox;