import { useRef, useState, useEffect } from "react";
import backgroundImage from "../assets/background_login.png";
import { Button, Input, Checkbox } from "@/components";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const Register = () => {
  const emailRef = useRef(null);
  const contraseñaRef = useRef(null);
  const userRef = useRef(null);
  const DNIPadresRef = useRef(null);
  const DNIAlumnoRef = useRef(null);
  const DNIDocenteRef = useRef(null);
  const checkboxRef = useRef(null);
  const [isChecked, setIsChecked] = useState(false);
  const [rol, setRol] = useState(null)

  useEffect(() => {
    console.log("Rol actualizado:", rol);
  }, [rol]);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

    const handleSelect = (nuevoRol) => {
    console.log("Nuevo rol seleccionado:", nuevoRol);
    setRol(nuevoRol);
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-gray-200"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-md w-full space-y-8 p-8 rounded-lg shadow-lg text-center bg-transparent">
        <h1 className="text-3xl font-bold text-gray-700">
          Registrar un usuario
        </h1>
        <form className="space-y-4 flex flex-col">
          <Input
            placeholder="Nombre y apellido"
            className="bg-transparent border border-slate-400"
            ref={userRef}
          />
          <Input
            placeholder="Email"
            className="bg-transparent border border-slate-400"
            ref={emailRef}
          />
          <Input
            type="password"
            placeholder="Contraseña"
            className="bg-transparent border border-slate-400"
            ref={contraseñaRef}
          />
          <Input
            type="password"
            placeholder="Repetir contraseña"
            className="bg-transparent border border-slate-400"
            ref={contraseñaRef}
          />
    <Select onValueChange={(e) => handleSelect(e)}>
        <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Selecciona tu rol" />
        </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Rol</SelectLabel>
          <SelectItem value="docente">Docente</SelectItem>
          <SelectItem value="alumno">Alumno</SelectItem>
          <SelectItem value="padre">Padre, madre o tutor</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>

          {rol === "docente" && (
          <>
             <Input
            type = "number"
            placeholder="DNI del docente"
            className="bg-transparent border border-slate-400"
            ref={DNIDocenteRef}
            />
          
          </>
           
          )}

          {rol === "alumno" && (
            <Input
            type = "number"
            placeholder="DNI del alumno"
            className="bg-transparent border border-slate-400"
            ref={DNIAlumnoRef}
            />
          )}

          {rol === "padre" && (
            <Input
            type = "number"
            placeholder="DNI del padre, madre o tutor"
            className="bg-transparent border border-slate-400"
            ref={DNIPadresRef}
            />,

            <Input
            type = "number"
            placeholder="DNI del alumno"
            className="bg-transparent border border-slate-400"
            ref={DNIAlumnoRef}
            />
          )}
          <label className="flex items-center justify-center">
            <Checkbox
              className="mr-1"
              ref={checkboxRef}
              onChange={handleCheckboxChange}
              checked={isChecked}
            />
            <span className="text-xs">
              Acepto términos, condiciones y políticas de privacidad de&nbsp;
              <a href="#" className="text-blue-500">
                EdTech
              </a>
              .
            </span>
          </label>

          <div className="flex flex-row gap-4">
            <Button className="w-[70%] mx-auto mt-4 shadow-lg flex flex-row justify-center text-gray-700 bg-[rgba(245, 236, 239, 1)] hover:bg-[#d1cdce]  border-solid border-2 border-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => {}}>
              Cancelar
            </Button>
            <Button className="w-[70%] mx-auto mt-4 flex justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
              onClick={() => {}}>
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
  );
};

export default Register;
