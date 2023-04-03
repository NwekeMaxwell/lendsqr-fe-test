import React from "react";
import "./UsersListBox.scss";
import iFilter from "../../Assets/filter-results-button.svg";
import List from "../List/List";
import { Link } from "react-router-dom";
// import FilterBox from "../FilterBox/FilterBox";

const UsersListBox = () => {
  return (
    <div className="usersList">
      <div className="heading">
        <span>
          ORGANIZATION
          <Link to="/users">
            <img src={iFilter} alt="" className="iFilter" />
          </Link>
        </span>
        <span>
          USERNAME
          <Link to="/users">
            <img src={iFilter} alt="" className="iFilter" />
          </Link>
        </span>
        <span>
          EMAIL
          <Link to="/users">
            <img src={iFilter} alt="" className="iFilter" />
          </Link>
        </span>
        <span>
          PHONE NUMBER
          <Link to="/users">
            <img src={iFilter} alt="" className="iFilter" />
          </Link>
        </span>
        <span>
          DATE JOINED
          <Link to="/users">
            <img src={iFilter} alt="" className="iFilter" />
          </Link>
        </span>
        <span>
          STATUS
          <Link to="/users">
            <img src={iFilter} alt="" className="iFilter" />
          </Link>
        </span>
      </div>
      <div className="listComponent">
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
      </div>
      {/* <FilterBox /> */}
    </div>
  );
};

export default UsersListBox;
