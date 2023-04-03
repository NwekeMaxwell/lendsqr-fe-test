import React from "react";
import "./Dashboard.scss";
import PageHeader from "../../Components/PageHeader/PageHeader";
import SideBar from "../../Components/SideBar/SideBar";
import Users from "../SubPages/Users/Users";

const Dashboard = () => {
  return (
    <div>
      <PageHeader />
      <div className="content">
        <SideBar />
        <Users />
      </div>
    </div>
  );
};

export default Dashboard;
