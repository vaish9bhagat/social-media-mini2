import React from "react";
import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
const Register = lazy(() => import("../pages/Register"));
const Login = lazy(() => import("../pages/Login"));
const Home = lazy(() => import("../pages/Home"));
const Createpost = lazy(() => import("../pages/Createpost"));
const Profile = lazy(() => import("../pages/Profile"));

const Approutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/home" element={<Home />} />

      <Route path="/login" element={<Login />} />
      <Route path="/createpost" element={<Createpost />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default Approutes;
