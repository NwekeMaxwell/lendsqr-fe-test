import React from "react";
import "./Footer.scss";
import iArrowDown from "../../Assets/Vector (2).svg";
import iArrowleft from "../../Assets/prev btn.svg";
import iArrowright from "../../Assets/next btn.svg";

const Footer = () => {
  return (
    <div className="footer">
      {/* left side */}
      <div className="left">
        <span>Showing</span>
        <button>
          {" "}
          100 <img src={iArrowDown} alt="" />{" "}
        </button>
        <span>out of 100</span>
      </div>
      {/* right side */}
      <div className="right">
        <img src={iArrowleft} alt="" />
        <span className="F-active">1</span>
        <span>2</span>
        <span>3</span>
        <span>...</span>
        <span>15</span>
        <span>16</span>
        <img src={iArrowright} alt="" />
      </div>
    </div>
  );
};

export default Footer;
