import React, { useState, useEffect, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import Register from "@/pages/Register";
import Login from "@/components/Login";
import Ayuda from "@/pages/Ayuda/Ayuda";
import Conocenos from "@/pages/Conocenos/Conocenos";
import Experiencias from "@/pages/Experiencias/Experiencias";
import Acceso from "@/pages/Acceso/Acceso";
import Home from "@/pages/Home";
import { useNavigate } from "react-router-dom";

const Router = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const userStorage = JSON.parse(localStorage.getItem("alumno"));

  useEffect(() => {
    if (userStorage && userStorage.useName) {
      setIsLogin(true);
      navigate("/home");
    }
  }, []);
  

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/ayuda" element={<Ayuda />} />
      <Route path="/conocenos" element={<Conocenos />} />
      <Route path="/experiencias" element={<Experiencias />} />
      <Route path="/acceso" element={<Acceso />} />
      <Route path="/home" element={<Home />} /> : null
    </Routes>
  );
};

export default Router;
