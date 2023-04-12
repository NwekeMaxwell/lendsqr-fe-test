import React, { useContext } from "react";
import "./UsersListBox.scss";
import iFilter from "../../Assets/filter-results-button.svg";
import List from "../List/List";
// import { Link } from "react-router-dom";
import useFetchData, { iContext } from "../../useFetchData";
import { UserContext } from "../../AppContext";

const UsersListBox = () => {
  const { userData } = useFetchData();
  const { user, setUser } = useContext(UserContext);

  const toggle = () =>
    user.clicked === false
      ? setUser({ clicked: true })
      : setUser({ clicked: false });
  // console.log(user.clicked);
  // console.log(userData);

  const start = 0;
  const end = 10;

  return (
    <div className="usersList">
      <div className="heading">
        <span>
          ORGANIZATION
          <img onClick={toggle} src={iFilter} alt="" className="iFilter" />
        </span>
        <span>
          USERNAME
          <img onClick={toggle} src={iFilter} alt="" className="iFilter" />
        </span>
        <span>
          EMAIL
          <img onClick={toggle} src={iFilter} alt="" className="iFilter" />
        </span>
        <span>
          PHONE NUMBER
          <img onClick={toggle} src={iFilter} alt="" className="iFilter" />
        </span>
        <span>
          DATE JOINED
          <img onClick={toggle} src={iFilter} alt="" className="iFilter" />
        </span>
        <span>
          STATUS
          <img onClick={toggle} src={iFilter} alt="" className="iFilter" />
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
