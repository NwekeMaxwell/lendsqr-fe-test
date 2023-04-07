import React from "react";
import PageHeader from "../../Components/PageHeader/PageHeader";
import UsersPageComponent from "../../Components/UsersPageComponent/UsersPageComponent";
import SideBar from "../../Components/SideBar/SideBar";

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
