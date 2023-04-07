import React, { useContext } from "react";
import "./UsersPage.scss";
import SideBar from "../../Components/SideBar/SideBar";
import UsersPageComponent from "../../Components/UsersPageComponent/UsersPageComponent";
import PageHeader from "../../Components/PageHeader/PageHeader";
import FilterBox from "../../Components/FilterBox/FilterBox";
import UserDropdownOption from "../../Components/UserDropdownOption/UserDropdownOption";
import { UserContext } from "../../AppContext";

const UsersPage = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <PageHeader />
      <div className="content">
        <SideBar />
        <UsersPageComponent />
        {!user.clicked && <FilterBox />}
        {!user.clicked && <UserDropdownOption />}
      </div>
    </div>
  );
};

export default UsersPage;
