import React from "react";
import UserProvider from "./AppContext";
import LoginPage from "./Pages/LoginPage/LoginPage";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import UsersPage from "./Pages/UsersPage/UsersPage";
import UserDetailsPage from "./Pages/UserDetailsPage/UserDetailsPage";

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" Component={LoginPage} />
        <Route path="/dashboard" Component={Dashboard} />
        <Route path="/users" Component={UsersPage} />
        <Route path="/userdetails/:id" Component={UserDetailsPage} />
        <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
      </Routes>
    </UserProvider>
  );
}

export default App;
