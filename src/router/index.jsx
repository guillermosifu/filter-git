import React from "react";
import Search from "../pages/Search";
import User from "../pages/User";
import Users from "../pages/Users";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/users/:username" element={<Users />} />
        <Route path="/user/:username" element={<User />} />

      </Routes>
    </BrowserRouter>
  );
};

export default Router;
