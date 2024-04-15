import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "@/pages/Register";
import Login from "@/components/Login";
import Home from "@/pages/Home";
import LoginMaster from "@/pages/LoginMaster";
import HomeMaster from "@/pages/HomeMaster";

const Router = () => {
  

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/admin" element={<LoginMaster />} />
      <Route path="/admin/home" element={<HomeMaster />}/>
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} /> : null
    </Routes>
  );
};

export default Router;
