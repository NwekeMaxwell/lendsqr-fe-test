import React, { useState, useEffect } from "react";
import "./UserBriefingComponent.scss";
// import Avatar from "../../Assets/avatar.svg";
import iStarFilled from "../../Assets/np_star_1208084_000000 1.svg";
import iStar from "../../Assets/np_star_1171151_000000 1.svg";
import { useParams } from "react-router-dom";
import axios from "axios";
import { iContext } from "../../useFetchData";

const UserBriefingComponent = () => {
  // getting user id from url
  const { id } = useParams<{ id: string }>();
  const idNumber = id?.substring(1);

  //fetch user data and store in state
  const [userDetail, setUserDetail] = useState<iContext>();
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(
          `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${idNumber}`
        )
        .then((res) => {
          setUserDetail(res.data);
          console.log(res.data);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    fetchData();
  }, [idNumber]);
  const fullName: string = `${userDetail?.profile?.firstName} ${userDetail?.profile?.lastName}`;

  return (
    <div className="userBriefBox">
      <div className="briefing">
        <img src={userDetail?.profile?.avatar} alt="" />
        <div className="center">
          <h1> {fullName}</h1>
          <h3> {userDetail?.accountNumber}</h3>
        </div>
        <div className="border">
          <h3> User's Tier</h3>
          <img src={iStarFilled} alt="" />
          <img src={iStar} alt="" />
          <img src={iStar} alt="" />
        </div>
        <div className="center">
          <h1>N{userDetail?.accountBalance}</h1>
          <h3>9912345678/Providus Bank</h3>
        </div>
      </div>

      <div className="subHeadings">
        <span className="active">General Details</span>
        <span>Documents</span>
        <span>Bank Details</span>
        <span>Loans</span>
        <span>Savings</span>
        <span>App and System</span>
      </div>
    </div>
  );
};

export default UserBriefingComponent;
