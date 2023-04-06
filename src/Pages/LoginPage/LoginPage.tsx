import React, { useState } from "react";
import "./LoginPage.scss";
import { Link } from "react-router-dom";
import Logo from "../../Assets/logo.svg";
import SignInImage from "../../Assets/signInImage.png";

const LoginPage = () => {
  const [text, setText] = useState(false);
  const toggle = () => {
    setText((prev) => !prev);
  };

  return (
    <div className="loginPage">
      <div className="left">
        <img src={Logo} alt="logo" className="logo" />
        <img src={SignInImage} alt="" className="image" />
      </div>
      <div className="right">
        <h1>Welcome!</h1>
        <h3>Enter details to login.</h3>
        <form>
          <input type="email" placeholder="Email" />
          <label>
            <input type={text ? "text" : "password"} placeholder="Password" />
            <span onClick={toggle}>{text ? "HIDE" : "SHOW"}</span>
          </label>
          <span> FORGOT PASSWORD?</span>
          <br />
          <Link to="/dashboard">
            <button className="submitBtn">LOG IN</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
