import React, { useEffect, useState } from "react";
import "./UserDetailsComponent.scss";
import UserProp from "../UserProp/UserProp";
import { useParams } from "react-router-dom";
import axios from "axios";
import { iContext } from "../../useFetchData";

const UserDetailsComponent = () => {
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
    <div className="UserDetailsComponent">
      {/* Personal Information section */}
      <div className="section">
        <h2>Personal Information</h2>
        <div className="section1">
          <UserProp title="full name" value={fullName} />
          <UserProp title="Phone Number " value={userDetail?.phoneNumber} />
          <UserProp title="Email Address  " value={userDetail?.email} />
          <UserProp title="BVN" value={userDetail?.profile?.bvn} />
          <UserProp title="Gender" value={userDetail?.profile?.gender} />
          <UserProp title="Marital Status" value="Single" />
          <UserProp title="Children" value="None" />
          <UserProp title="Type Of Residence" value="Parent's Apartment" />
        </div>
      </div>
      {/* Education and Employment */}
      <div className=" section">
        <h2>Education and Employment</h2>
        <div className="section2">
          <UserProp
            title="level of education"
            value={userDetail?.education.level}
          />
          <UserProp
            title="employment status "
            value={userDetail?.education?.employmentStatus}
          />
          <UserProp
            title="sector of employment"
            value={userDetail?.education?.sector}
          />
          <UserProp
            title="Duration of employment"
            value={userDetail?.education?.duration}
          />
          <UserProp
            title="Office Email"
            value={userDetail?.education?.officeEmail}
          />
          <UserProp
            title="Monthly income "
            value={`N ${userDetail?.education?.monthlyIncome[0]} - N ${userDetail?.education?.monthlyIncome[1]}`}
          />
          <UserProp
            title="loan repayment"
            value={userDetail?.education.loanRepayment}
          />
        </div>
      </div>
      {/* Socials */}
      <div className=" section">
        <h2> Socials </h2>
        <div className="section1">
          <UserProp title="Twitter " value={userDetail?.socials.twitter} />
          <UserProp title=" Facebook " value={userDetail?.socials?.facebook} />
          <UserProp title="Instagram" value={userDetail?.socials?.instagram} />
        </div>
      </div>
      {/* Guarantor */}
      <div className=" section">
        <h2> Guarantor </h2>
        <div className="section1">
          <UserProp
            title="full Name "
            value={userDetail?.guarantor?.firstName}
          />
          <UserProp
            title=" Phone Number "
            value={userDetail?.guarantor?.phoneNumber}
          />
          <UserProp
            title="Email Address"
            value={userDetail?.guarantor?.address}
          />
          <UserProp title="Relationship" value="Sister" />
        </div>
      </div>
      <div className=" section">
        <h2> </h2>
        <div className="section1">
          <UserProp
            title="full Name "
            value={userDetail?.guarantor?.firstName}
          />
          <UserProp
            title=" Phone Number "
            value={userDetail?.guarantor?.phoneNumber}
          />
          <UserProp
            title="Email Address"
            value={userDetail?.guarantor?.address}
          />
          <UserProp title="Relationship" value="Sister" />
        </div>
      </div>
    </div>
  );
};

export default UserDetailsComponent;
