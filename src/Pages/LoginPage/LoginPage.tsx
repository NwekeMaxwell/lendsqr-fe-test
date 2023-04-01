import React from "react";
import "./LoginPage.scss";
import { Link } from "react-router-dom";
import Logo from "../../Assets/logo.svg";
import SignInImage from "../../Assets/signInImage.png";

const LoginPage = () => {
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
          <input type="email" name="email" placeholder="Email" />
          <label>
            <input type="password" name="password" placeholder="Password" />
            <button>SHOW</button>
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
