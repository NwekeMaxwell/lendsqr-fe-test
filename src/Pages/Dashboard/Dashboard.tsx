import React from "react";
import "./Dashboard.scss";
import PageHeader from "../../Components/PageHeader/PageHeader";
// import UsersPage from "../UsersPage/UsersPage";
import UsersPageComponent from "../../Components/UsersPageComponent/UsersPageComponent";
import SideBar from "../../Components/SideBar/SideBar";
// import UsersPage from "../../Components/UsersPageComponent/UsersPageComponent";

const Dashboard = () => {
  return (
    <div>
      <PageHeader />
      <div className="content">
        <SideBar />
        <UsersPageComponent />
      </div>
    </div>
  );
};

export default Dashboard;
