import React from "react";
import "./LoginPage.scss";
import { Link } from "react-router-dom";
import Logo from "../../Assets/logo.svg";
import SignInImage from "../../Assets/signInImage.png";

const LoginPage = () => {
  const password = document.querySelector("#pwd");
  const toggleBtn = document.querySelector("#togglePwd");
  toggleBtn?.addEventListener("click", function () {
    // console.log(password?.getAttribute("type"));
    //toggle type attribute
    const type =
      password?.getAttribute("type") === "password" ? "text" : "password";
    password?.setAttribute("type", type);
  });

  //prevent form submit
  const form = document.querySelector("form");
  form?.addEventListener("submit", function (e) {
    e.preventDefault();
  });

  // const showPwd = () => {
  //   const showPwdBtn = document.getElementById("pwd");
  //   if (showPwdBtn.type === "password") {
  //     showPwdBtn.type === "text";
  //   } else {
  //     showPwdBtn.type === "password";
  //   }
  // };

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
            <input
              type="password"
              id="pwd"
              name="password"
              placeholder="Password"
            />
            <button id="togglePwd">SHOW</button>
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
