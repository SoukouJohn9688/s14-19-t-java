import { Input } from "./ui/input";
import backgroundImage from "../assets/background_login.png";
import { Button } from "./ui/Button";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AlumnosData } from "@/mock";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/Auth/auth";
import axios from "axios";
import { getToken } from "../redux/Auth/auth";


const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [DBAlumnos] = useState(AlumnosData);
  const [titulo, setTitulo] = useState("Inicio de sesión Padres/ Tutor");
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

  const handleClick = (nuevoTitulo) => {
    setTitulo(nuevoTitulo);
    actualizarColor(nuevoTitulo);
  };

  const colores = {
    "Inicio de sesión Padres/ Tutor": "green",
    "Inicio de sesión Estudiante": "blue",
    "Inicio de sesión Docente": "orange",
  };

  const [color, setColor] = useState(colores["Inicio de sesión Padres/ Tutor"]);

  const actualizarColor = (nuevoTitulo) => {
    setTitulo(nuevoTitulo);
    setColor(colores[nuevoTitulo]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const user = DBAlumnos.find((e) => e.userName === alumno.userName);
    // const password = user && user.password === Number(alumno.password); // Verificamos si existe el usuario y si la contraseña es correcta
    // console.log(user, password);

    
     const response = await axios.post(
      "http://localhost:8080/api/v1/auth/login",
      {
        email: alumno.userName,
        password: alumno.password
      }
    );

    console.log(response.data.accessToken)
    dispatch(getToken(response.data.accessToken))

    const userRole = "docente"
    dispatch(login({userRol:userRole, userName: alumno.userName}))
    navigate("/home");
    // if (user && password) {
    //   localStorage.setItem("alumno", JSON.stringify(alumno));
    //   let userRol = "";
    //   if (titulo === "Inicio de sesión Padres/ Tutor") {
    //     userRol = "padre";
    //   } else if (titulo === "Inicio de sesión Estudiante") {
    //     userRol = "alumno";
    //   } else if (titulo === "Inicio de sesión Docente") {
    //     userRol = "docente";
    //   }
    //   dispatch(login({ userRol, userName: alumno.userName })); // Despachamos la acción de login con el rol y el nombre de usuario como payload
    //   navigate("/home");
    // }
  };

  return (
    <div
      className="flex flex-col justify-center items-center bg-gray-200 sm:min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="space-y-8 my-28 sm:mt-20 sm:mb-6 p-8 bg-transparent shadow-lg  rounded-lg w-full max-w-md text-center">
        <h1 className="font-bold text-2xl place" style={{ color: color }}>
          {titulo}
        </h1>

        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
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
          <a className="mt-4 text-blue-500 text-left" href="/">
            Olvidaste tu contraseña?
          </a>
          <div>
            <Button
              type="submit"
              className={`w-[70%] mx-auto mt-4 bg-${color}-500 hover:bg-${color}-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
            >
              Iniciar Sesión
            </Button>
          </div>
        </form>

        <hr className="border-slate-300 bg-slate-400 border" />
        {titulo === "Inicio de sesión Padres/ Tutor" && (
          <>
            <Button
              onClick={() => handleClick("Inicio de sesión Estudiante")}
              className="bg-blue-500 hover:bg-blue-700 focus:shadow-outline mx-auto mt-4 px-4 py-2 rounded w-full font-bold text-white focus:outline-none"
            >
              Si eres Estudiante inicia sesión aquí
            </Button>
            <Button
              onClick={() => handleClick("Inicio de sesión Docente")}
              className="bg-orange-500 hover:bg-orange-700 focus:shadow-outline mx-auto mt-4 px-4 py-2 rounded w-full font-bold text-white focus:outline-none"
            >
              Si eres Docente inicia sesión aquí
            </Button>
          </>
        )}

        {titulo === "Inicio de sesión Estudiante" && (
          <>
            <Button
              onClick={() => handleClick("Inicio de sesión Padres/ Tutor")}
              className="bg-green-500 hover:bg-green-700 focus:shadow-outline mx-auto mt-4 px-4 py-2 rounded w-full font-bold text-white focus:outline-none"
            >
              Si eres Padre/Tutor inicia sesión aquí
            </Button>
            <Button
              onClick={() => handleClick("Inicio de sesión Docente")}
              className="bg-orange-500 hover:bg-orange-700 focus:shadow-outline mx-auto mt-4 px-4 py-2 rounded w-full font-bold text-white focus:outline-none"
            >
              Si eres Docente inicia sesión aquí
            </Button>
          </>
        )}

        {titulo === "Inicio de sesión Docente" && (
          <>
            <Button
              onClick={() => actualizarColor("Inicio de sesión Padres/ Tutor")}
              className="bg-green-500 hover:bg-green-700 focus:shadow-outline mx-auto mt-4 px-4 py-2 rounded w-full font-bold text-white focus:outline-none"
            >
              Si eres Padre/Tutor inicia sesión aquí
            </Button>
            <Button
              onClick={() => actualizarColor("Inicio de sesión Estudiante")}
              className="bg-blue-500 hover:bg-blue-700 focus:shadow-outline mx-auto mt-4 px-4 py-2 rounded w-full font-bold text-white focus:outline-none"
            >
              Si eres Estudiante inicia sesión aquí
            </Button>
          </>
        )}
        <p className="mt-4">
          ¿No tienes cuenta?{" "}
          <Link to="/register" className="text-blue-500">
            Crea una aquí
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;