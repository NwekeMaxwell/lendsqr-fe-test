import React, { useContext } from "react";
import PageHeader from "../../Components/PageHeader/PageHeader";
import UsersPageComponent from "../../Components/UsersPageComponent/UsersPageComponent";
import SideBar from "../../Components/SideBar/SideBar";
import "./Dashboard.scss";
import { UserContext } from "../../AppContext";

const Dashboard = () => {
  const { user } = useContext(UserContext);

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
