import { Route, Routes } from "react-router-dom";
import Register from "@/pages/Register";
import Login from "@/components/Login";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default Router;
