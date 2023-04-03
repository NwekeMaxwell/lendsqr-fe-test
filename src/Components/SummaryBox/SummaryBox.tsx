import React from "react";
import "./SummaryBox.scss";

interface iSumBox {
  icon: string;
  title: string;
  count: string;
}

const SummaryBox = ({ icon, title, count }: iSumBox) => {
  return (
    <div className="summaryBox">
      <img src={icon} alt="" />
      <p>{title}</p>
      <span>{count}</span>
    </div>
  );
};

export default SummaryBox;
