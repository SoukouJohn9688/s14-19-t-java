import { Input } from "./ui/input";
import backgroundImage from "../assets/background_login.png";
import { Button } from "./ui/Button";

const Login = () => {
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
        <h1 className="text-3xl font-bold">Inicio de Sesión</h1>
        <form className="space-y-4 flex flex-col">
          <Input
            placeholder="Username"
            className="bg-transparent border  border-slate-400"
          />
          <Input
            type="password"
            placeholder="Password"
            className="bg-transparent border  border-slate-400"
          />
          <a className="text-left text-blue-500 mt-4" href="/">
            Olvidaste tu contraseña?
          </a>
          <div>
            <Button className="w-[70%] mx-auto mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Iniciar Sesión
            </Button>
          </div>
        </form>

        <hr className="bg-slate-400 border border-slate-300" />
        <Button className="w-[70%] mx-auto mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Iniciar como Estudiante
        </Button>
        <Button className="w-[70%] mx-auto mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Iniciar como Docente
        </Button>
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
