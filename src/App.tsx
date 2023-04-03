import React from "react";
import "./App.scss";
import LoginPage from "./Pages/LoginPage/LoginPage";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";

// fetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

function App() {
  // const overlay = document.querySelector(".overlay");
  // let optionBox = document.querySelector(".optionBox");
  // overlay?.classList.add("hidden");
  // optionBox?.classList.add("hidden");
  // overlay?.addEventListener("click", () => {
  //   overlay.classList.toggle("hidden");
  //   optionBox?.classList.toggle("hidden");
  // });
  return (
    <div className="App">
      {/* <div className="overlay"></div> */}
      <Routes>
        <Route path="/" Component={LoginPage} />
        <Route path="/dashboard" Component={Dashboard} />
      </Routes>
    </div>
  );
}

export default App;
