import React, { useState, useEffect, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import Register from "@/pages/Register";
import Login from "@/components/Login";
import Home from "@/pages/Home";
import { useNavigate } from "react-router-dom";

const Router = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const userStorage = JSON.parse(localStorage.getItem("alumno"));

  useEffect(() => {
    if (userStorage.useName) {
      setIsLogin(true);
      navigate("/home");
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} /> : null
    </Routes>
  );
};

export default Router;
