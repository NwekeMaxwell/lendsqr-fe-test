import React from "react";
import "./SideBar.scss";
import SubHeading from "../SubHeading/SubHeading";
import iUser from "../../Assets/userfriends.svg";
import iUsers from "../../Assets/users.svg";
import iHome from "../../Assets/home.svg";
import iBriefCase from "../../Assets/briefcase.svg";
import iSack from "../../Assets/sack 1.svg";
import iHandshake from "../../Assets/handshake-regular 1.svg";
import iPiggyBank from "../../Assets/piggy-bank 1.svg";
import iHandMoney from "../../Assets/Group 104.svg";
import iUserCheck from "../../Assets/user-check 1.svg";
import iUserTimes from "../../Assets/user-times 1.svg";
import iBank from "../../Assets/Group.svg";
import iCoins from "../../Assets/coins-solid 1.svg";
import iSwap from "../../Assets/icon.svg";
import iSpin from "../../Assets/galaxy 1.svg";
import iUserSetting from "../../Assets/user-cog 1.svg";
import iScroll from "../../Assets/scroll 1.svg";
import iChart from "../../Assets/chart-bar 2.svg";
import iSliders from "../../Assets/sliders-h 1.svg";
import iBadge from "../../Assets/badge-percent 1.svg";
import iClipboard from "../../Assets/clipboard-list 1.svg";
import iArrowDown from "../../Assets/Vector (2).svg";
import itire from "../../Assets/tire 1.svg";
import iExit from "../../Assets/sign-out 1.svg";

import { useLocation } from "react-router-dom";

const SideBar = () => {
  // fetch url path and render logout
  const { pathname } = useLocation();
  const logoutPath: boolean =
    pathname !== "/dashboard" && pathname !== "/users";

  return (
    <div className="sidebar">
      <SubHeading
        icon={iBriefCase}
        title="Switch Organization"
        otherProp={iArrowDown}
        className="switch"
      />
      <SubHeading icon={iHome} title="Dashboard" />
      <h3>CUSTOMERS</h3>
      <SubHeading icon={iUser} title="Users" className="active" />
      <SubHeading icon={iUsers} title="Guarantors" />
      <SubHeading icon={iSack} title="Loans" />
      <SubHeading icon={iHandshake} title="Decision Models" />
      <SubHeading icon={iPiggyBank} title="Savings " />
      <SubHeading icon={iHandMoney} title="Loan Requests" />
      <SubHeading icon={iUserCheck} title="Whitelist " />
      <SubHeading icon={iUserTimes} title="Karma " />
      <h3>BUSINESSES</h3>
      <SubHeading icon={iBriefCase} title="Organization " />
      <SubHeading icon={iHandMoney} title="Loan Products" />
      <SubHeading icon={iBank} title="Savings Products " />
      <SubHeading icon={iCoins} title="Fees and Charges  " />
      <SubHeading icon={iSwap} title="Transactions" />
      <SubHeading icon={iSpin} title="Services" />
      <SubHeading icon={iUserSetting} title="Service Account" />
      <SubHeading icon={iScroll} title="Settlements " />
      <SubHeading icon={iChart} title="Reports " />
      <h3>SETTINGS</h3>
      <SubHeading icon={iSliders} title="Preferences " />
      <SubHeading icon={iBadge} title="Fees and Pricing  " />
      <SubHeading icon={iClipboard} title="Audit Logs " />
      {logoutPath && (
        <div className="logout">
          <SubHeading icon={itire} title="Systems Messages " />
          <div className="line"></div>
          <SubHeading icon={iExit} title="Logout " />
          <div className="logoutSpan">v1.2.0</div>
        </div>
      )}
    </div>
  );
};

export default SideBar;
