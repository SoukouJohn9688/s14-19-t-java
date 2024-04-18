import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "@/pages/Register";
import Login from "@/components/Login";
import Home from "@/pages/Home";
import About from "@/pages/About";
import { useNavigate } from "react-router-dom";

const Router = () => {

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} /> : null
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Router;
