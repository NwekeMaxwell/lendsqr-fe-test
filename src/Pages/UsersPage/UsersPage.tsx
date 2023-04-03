import React from "react";
import "./UsersPage.scss";
import SideBar from "../../Components/SideBar/SideBar";
import UsersPageComponent from "../../Components/UsersPageComponent/UsersPageComponent";
import PageHeader from "../../Components/PageHeader/PageHeader";
import FilterBox from "../../Components/FilterBox/FilterBox";
import UserDropdownOption from "../../Components/UserDropdownOption/UserDropdownOption";

const UsersPage = () => {
  return (
    <div>
      <PageHeader />
      <div className="content">
        <SideBar />
        <UsersPageComponent />
        <FilterBox />
        <UserDropdownOption />
      </div>
    </div>
  );
};

export default UsersPage;
