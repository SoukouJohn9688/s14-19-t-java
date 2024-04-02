import { Input } from "@/components/ui/input";
import backgroundImage from "../assets/background_login.png";
import { Button } from "@/components";
import { useRef } from "react";


const Register = () => {

    const emailRef = useRef(null);
    const contraseñaRef = useRef(null);
    const userRef = useRef(null)
    const DNIPadresRef = useRef(null)
    const DNIAlumnoRef = useRef(null)
    return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-gray-200"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }} >
         <div className="max-w-md w-full space-y-8 p-8  rounded-lg shadow-lg  text-center bg-transparent">
            <h1 className="text-3xl font-bold text-gray-700">Registrar un usuario</h1>
        <form className="space-y-4 flex flex-col">

        <Input
            placeholder="Nombre y apellido"
            className="bg-transparent border  border-slate-400"
            ref={userRef}
          />

          <Input
            placeholder="DNI padre, madre o tutor (sin puntos)"
            className="bg-transparent border  border-slate-400"
            ref={DNIPadresRef}
          />
          <Input
            placeholder="DNI estudiante (sin puntos)"
            className="bg-transparent border  border-slate-400"
            ref={DNIAlumnoRef}
          />
          <Input
            placeholder="Email"
            className="bg-transparent border  border-slate-400"
            ref={emailRef}
          />
          <Input
            type="password"
            placeholder="Contraseña"
            className="bg-transparent border  border-slate-400"
            ref={contraseñaRef}
          />
          <Input
            type="password"
            placeholder=" Repetir contraseña"
            className="bg-transparent border  border-slate-400"
            ref={contraseñaRef}
          />
          <div className="flex flex-row gap-4">
            <Button className="w-[70%] mx-auto mt-4 shadow-lgflex flex-row text-gray-700 border-solid border-2 border-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Cancelar
            </Button>
            <Button className="w-[70%] mx-auto mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Registrarse
            </Button>
          </div>
        </form>

        <p className="mt-4">
          ¿Ya tienes cuenta?{" "}
          <a href="#" className="text-blue-500">
            Acceder
          </a>
        </p>
      </div>
    </div>
    )

};

export default Register