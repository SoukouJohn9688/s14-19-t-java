import { Input } from "./ui/input";
import backgroundImage from "../assets/background_login.png";
import { Button } from "./ui/Button";
import { useRef, useState } from "react";

const Login = () => {
  // State for title and color
  const [title, setTitle] = useState("Inicio de sesión Padres/ Tutor");
  const [color, setColor] = useState("green"); // Default color

  // Refs for inputs
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  // Function to handle title change and color update
  const handleTitleChange = (newTitle, newColor) => {
    setTitle(newTitle);
    setColor(newColor);
  };

  // Object mapping titles to colors
  const titleColors = {
    "Inicio de sesión Padres/ Tutor": "green",
    "Inicio de sesión Estudiante": "blue",
    "Inicio de sesión Docente": "orange",
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-gray-200"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-md w-full space-y-8 p-8  rounded-lg shadow-sm   bg-transparent">
        {/* Title */}
        <h1 className="text-2xl  font-bold" style={{ color: color }}>
          {title}
        </h1>

        {/* Form */}
        <form className="space-y-4 flex flex-col">
          <Input
            placeholder="Username"
            className="bg-transparent border border-slate-400"
            ref={emailRef}
          />
          <Input
            type="password"
            placeholder="Password"
            className="bg-transparent border border-slate-400"
            ref={passwordRef}
          />
          <a className="text-left text-blue-500 mt-4" href="/">
            Olvidaste tu contraseña?
          </a>
          <div className="flex w-full justify-center items-center">
            {/* Button */}
            <Button
              className={`w-[70%]  mx-auto mt-4 bg-${color}-500 hover:bg-${color}-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
            >
              Iniciar Sesión
            </Button>
          </div>
        </form>

        {/* Buttons for switching between login types */}
        <hr className="bg-slate-400 border border-slate-300" />
        {Object.keys(titleColors).map((key) => (
          key !== title && ( // Exclude the currently selected title
            <Button
              key={key}
              onClick={() => handleTitleChange(key, titleColors[key])}
              className={`w-full mx-auto mt-4 bg-${titleColors[key]}-500 hover:bg-${titleColors[key]}-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
            >
              {key === "Inicio de sesión Padres/ Tutor"
                ? "Si eres Padre/Tutor inicia sesión aquí"
                : key === "Inicio de sesión Estudiante"
                ? "Si eres Estudiante inicia sesión aquí"
                : "Si eres Docente inicia sesión aquí"}
            </Button>
          )
        ))}
        {/* Link for registration */}
        <p className="mt-4">
          ¿No tienes cuenta?{" "}
          <a href="/registro" className="text-blue-500">
            Crea una aquí
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
