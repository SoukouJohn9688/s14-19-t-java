import { Input } from "./ui/input";
import backgroundImage from "../assets/background_login.png";
import { Button } from "./ui/Button";
import { useRef, useState } from "react";

const Login = () => {
  const [titulo, setTitulo] = useState("Inicio de sesión Padres/ Tutor");
  

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


  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-gray-200"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-md w-full space-y-8 p-8  rounded-lg shadow-lg  text-center bg-transparent">
      <h1 className="text-2xl font-bold place" style={{ color: color }}>{titulo}</h1>

        <form className="space-y-4 flex flex-col">
          <Input
            placeholder="Username"
            className="bg-transparent border  border-slate-400"
            ref={emailRef}
          />
          <Input
            type="password"
            placeholder="Password"
            className="bg-transparent border  border-slate-400"
            ref={contraseñaRef}
          />
          <a className="text-left text-blue-500 mt-4" href="/">
            Olvidaste tu contraseña?
          </a>
          <div>
            <Button   className={`w-[70%] mx-auto mt-4 bg-${color}-500 hover:bg-${color}-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}>
              Iniciar Sesión
            </Button>
          </div>
        </form>

        <hr className="bg-slate-400 border border-slate-300" />
        {titulo === "Inicio de sesión Padres/ Tutor" && (
          <>
            <Button
              onClick={() => handleClick("Inicio de sesión Estudiante")}
              className="w-full mx-auto mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Si eres Estudiante inicia sesión aquí
            </Button>
            <Button
              onClick={() => handleClick("Inicio de sesión Docente")}
              className="w-full mx-auto mt-4 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Si eres Docente inicia sesión aquí
            </Button>
          </>
        )}

        {titulo === "Inicio de sesión Estudiante" && (
          <>
            <Button
              onClick={() => handleClick("Inicio de sesión Padres/ Tutor")}
              className="w-full mx-auto mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Si eres Padre/Tutor inicia sesión aquí
            </Button>
            <Button
              onClick={() => handleClick("Inicio de sesión Docente")}
              className="w-full mx-auto mt-4 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Si eres Docente inicia sesión aquí
            </Button>
          </>
        )}

        {titulo === "Inicio de sesión Docente" && (
          <>
            <Button
              onClick={() => actualizarColor("Inicio de sesión Padres/ Tutor")}
              className="w-full mx-auto mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Si eres Padre/Tutor inicia sesión aquí
            </Button>
            <Button
              onClick={() => actualizarColor("Inicio de sesión Estudiante")}
              className="w-full mx-auto mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Si eres Estudiante inicia sesión aquí
            </Button>
          </>
        )}
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