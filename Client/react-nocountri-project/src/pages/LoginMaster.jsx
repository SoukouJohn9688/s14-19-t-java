import { Input } from "@/components";
import backgroundImage from "../assets/background_login.png";
import { Button } from "@/components";
import React, { useRef, useState } from "react";
import { AlumnosData } from "@/mock";
import { useNavigate } from "react-router-dom";

const LoginMaster = () => {
  const navigate = useNavigate();
  const [DBAlumnos] = useState(AlumnosData);
  const [titulo, setTitulo] = useState("Inicio de sesión Admin");
  const [alumno, setAlumno] = useState({
    userName: "",
    password: "",
  });

  const handleChage = (e) => {
    const { name, value } = e.target;
    setAlumno({
      ...alumno,
      [name]: value,
    });
  };

  const emailRef = useRef(null);
  const contraseñaRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = DBAlumnos.some((e) => e.userName === alumno.userName);
    const password = DBAlumnos.some(
      (e) => e.password === Number(alumno.password)
    );

    if (user & password) {
      localStorage.setItem("alumno", JSON.stringify(alumno));
      navigate("/home");
    }
  };

  return (
    <div
      className="flex flex-col justify-center items-center bg-gray-200 min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="space-y-10 bg-transparent shadow-lg p-8 rounded-lg w-full max-w-md text-center">
        <h1 className="font-bold text-2xl place text-sky-500">{titulo}</h1>

        <form className="flex flex-col space-y-5" onSubmit={handleSubmit}>
          <Input
            placeholder="Username"
            className="border-slate-400 bg-transparent border"
            ref={emailRef}
            onChange={(e) => handleChage(e)}
            name="userName"
            value={alumno.userName}
          />
          <Input
            type="password"
            placeholder="Password"
            className="border-slate-400 bg-transparent border"
            ref={contraseñaRef}
            onChange={(e) => handleChage(e)}
            name="password"
            value={alumno.password}
          />
          <div>
            <Button
              type="submit"
              className={`w-[70%] mx-auto mt-4 bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
            >
              Iniciar Sesión
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginMaster;
