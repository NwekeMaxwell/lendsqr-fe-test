import React from "react";
import "./UserDetailsPage.scss";
import PageHeader from "../../Components/PageHeader/PageHeader";
// import SideBar from "../../Components/SideBar/SideBar";
import DetailsPageComponent from "../../Components/DetailsPageComponent/DetailsPageComponent";
import SideBarLogOut from "../../Components/SideBarLogOut/SideBarLogOut";

const UserDetailsPage = () => {
  return (
    <div>
      <PageHeader />
      <div className="content">
        <SideBarLogOut />
        <DetailsPageComponent />
      </div>
    </div>
  );
};

export default UserDetailsPage;
