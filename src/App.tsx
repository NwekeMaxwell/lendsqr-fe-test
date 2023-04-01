import React from "react";
import "./App.scss";
import LoginPage from "./Pages/LoginPage/LoginPage";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={LoginPage} />
        <Route path="/dashboard" Component={Dashboard} />
      </Routes>
    </div>
  );
}

export default App;
