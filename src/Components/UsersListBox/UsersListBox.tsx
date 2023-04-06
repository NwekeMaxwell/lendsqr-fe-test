import React from "react";
import "./UsersListBox.scss";
import iFilter from "../../Assets/filter-results-button.svg";
import List from "../List/List";
import { Link } from "react-router-dom";
import useFetchData from "../../useFetchData";
import { iContext } from "../../useFetchData";

const UsersListBox = () => {
  const { userData } = useFetchData();

  // console.log(userData);

  const start = 0;
  const end = 10;

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
        {userData?.slice(start, end).map((item: iContext) => (
          <List key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default UsersListBox;
