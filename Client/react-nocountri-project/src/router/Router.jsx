import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Register from "@/pages/Register";
import Login from "@/components/Login";
import Home from "@/pages/Home";
import About from "@/pages/About";
import LoginMaster from "@/pages/LoginMaster";
import HomeMaster from "@/pages/HomeMaster";
import { useSelector } from 'react-redux';

const LoginRedirect = ({ children }) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const rol = useSelector(state => state.auth.userRol);

  if (isAuthenticated) {
    if (rol === "admin") {
      return <Navigate to="/admin/home" replace />;
    }
    return <Navigate to="/home" replace />;
  }

  return children;
};

const ProtectedRoute = ({ children, redirectTo, roleRequired }) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const rol = useSelector(state => state.auth.userRol);

  if (!isAuthenticated) {
    return <Navigate to={redirectTo} replace />;
  }

  if (roleRequired && rol !== roleRequired) {
    return <Navigate to={redirectTo} replace />;
  }

  return children;
};

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginRedirect><Login /></LoginRedirect>} />
      <Route path="/admin" element={<LoginRedirect><LoginMaster /></LoginRedirect>} />
      <Route
        path="/admin/home"
        element={
          <ProtectedRoute redirectTo="/admin" roleRequired="admin">
            <HomeMaster />
          // </ProtectedRoute>
        }
      />
      <Route
        path="/register"
        element={
            <Register />
        }
      />
      <Route
        path="/home"
        element={
          // <ProtectedRoute redirectTo="/">
            <Home />
        //  </ProtectedRoute>
        }
      />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Router;
