import React from "react";
import "./UserDetailsPage.scss";
import PageHeader from "../../Components/PageHeader/PageHeader";
import DetailsPageComponent from "../../Components/DetailsPageComponent/DetailsPageComponent";
import SideBar from "../../Components/SideBar/SideBar";

const UserDetailsPage = () => {
  return (
    <div>
      <PageHeader />
      <div className="content">
        <SideBar />
        <DetailsPageComponent />
      </div>
    </div>
  );
};

export default UserDetailsPage;
