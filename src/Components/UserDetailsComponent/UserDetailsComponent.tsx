import React from "react";
import "./UserDetailsComponent.scss";
import UserProp from "../UserProp/UserProp";

const UserDetailsComponent = () => {
  return (
    <div className="UserDetailsComponent">
      {/* Personal Information section */}
      <div className="section">
        <h2>Personal Information</h2>
        <div className="section1">
          <UserProp title="full name" value="Grace Effiom" />
          <UserProp title="Phone Number " value="07060780922" />
          <UserProp title="Email Address  " value="grace@gmail.com" />
          <UserProp title="BVN" value="07060780922" />
          <UserProp title="Gender" value="Female" />
          <UserProp title="Marital Status" value="Single" />
          <UserProp title="Children" value="None" />
          <UserProp title="Type Of Residence" value="Parent's Apartment" />
        </div>
      </div>
      {/* Education and Employment */}
      <div className=" section">
        <h2>Education and Employment</h2>
        <div className="section2">
          <UserProp title="level of education" value="B.Sc" />
          <UserProp title="employment status " value="Employed" />
          <UserProp title="sector of employment" value="FinTech" />
          <UserProp title="Duration of employment" value="2 years" />
          <UserProp title="Office Email" value="grace@lendsqr.com" />
          <UserProp title="Monthly income " value="₦200,000.00- ₦400,000.00" />
          <UserProp title="loan repayment" value="40,000" />
        </div>
      </div>
      {/* Socials */}
      <div className=" section">
        <h2> Socials </h2>
        <div className="section1">
          <UserProp title="Twitter " value="grace_effiom" />
          <UserProp title=" Facebook " value="Grace Effiom" />
          <UserProp title="Instagram" value="@grace_effiom" />
        </div>
      </div>
      {/* Guarantor */}
      <div className=" section">
        <h2> Guarantor </h2>
        <div className="section1">
          <UserProp title="full Name " value="Debby Ogana" />
          <UserProp title=" Phone Number " value="07060780922" />
          <UserProp title="Email Address" value="@debby@gmail.com" />
          <UserProp title="Relationship" value="Sister" />
        </div>
      </div>
      <div className=" section">
        <h2> </h2>
        <div className="section1">
          <UserProp title="full Name " value="Debby Ogana" />
          <UserProp title=" Phone Number " value="07060780922" />
          <UserProp title="Email Address" value="@debby@gmail.com" />
          <UserProp title="Relationship" value="Sister" />
        </div>
      </div>
    </div>
  );
};

export default UserDetailsComponent;
