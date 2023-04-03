import React from "react";
import "./UserProp.scss";

interface iUserprop {
  title: string;
  value: string;
}

const UserProp = ({ title, value }: iUserprop) => {
  return (
    <div className="UserProp">
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
};

export default UserProp;
