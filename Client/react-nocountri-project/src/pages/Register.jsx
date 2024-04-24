import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
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
} from "@/components/ui/select";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Manejar los datos del formulario aquí (por ejemplo, enviar una solicitud de registro)
    console.log(data);
  };

  const [rol, setRol] = useState(null);

  useEffect(() => {
    console.log("Rol actualizado:", rol);
  }, [rol]);

  const handleSelect = (nuevoRol) => {
    setRol(nuevoRol);
  };

  return (
    <div
      className="flex flex-col items-center justify-center bg-gray-200 sm:min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="space-y-8 my-28 sm:mt-20 sm:mb-6 p-8 bg-transparent shadow-lg  rounded-lg w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-gray-700">
          Registrar un usuario
        </h1>
        <form className="space-y-4 flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <Input
            placeholder="Nombre y apellido"
            className="bg-transparent border border-slate-400"
            {...register("nombre", { required: true })}
          />
          {errors.nombre && <span>Este campo es obligatorio</span>}
          <Input
            placeholder="Email"
            className="bg-transparent border border-slate-400"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email && <span>Por favor ingresa un email válido</span>}
          <Input
            type="password"
            placeholder="Contraseña"
            className="bg-transparent border border-slate-400"
            {...register("contraseña", { required: true })}
          />
          {errors.contraseña && <span>Este campo es obligatorio</span>}
          <Input
            type="password"
            placeholder="Repetir contraseña"
            className="bg-transparent border border-slate-400"
            {...register("repetirContraseña", { required: true })}
          />
          {errors.repetirContraseña && <span>Este campo es obligatorio</span>}
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
                type="number"
                placeholder="DNI del docente"
                className="bg-transparent border border-slate-400"
                {...register("dniDocente", { required: true })}
              />
              {errors.dniDocente && <span>Este campo es obligatorio</span>}
            </>
          )}

          {rol === "alumno" && (
            <Input
              type="number"
              placeholder="DNI del alumno"
              className="bg-transparent border border-slate-400"
              {...register("dniAlumno", { required: true })}
            />
          )}

          {rol === "padre" && (
            <>
              <Input
                type="number"
                placeholder="DNI del padre, madre o tutor"
                className="bg-transparent border border-slate-400"
                {...register("dniPadres", { required: true })}
              />
              <Input
                type="number"
                placeholder="DNI del alumno"
                className="bg-transparent border border-slate-400"
                {...register("dniAlumno", { required: true })}
              />
            </>
          )}
          <label className="flex items-center justify-center">
            <Checkbox
              className="mr-1"
              {...register("terminos", { required: true })}
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
            <Button
              type="button"
              className="w-[70%] mx-auto mt-4 shadow-lg flex flex-row justify-center text-gray-700 bg-[rgba(245, 236, 239, 1)] hover:bg-[#d1cdce]  border-solid border-2 border-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className="w-[70%] mx-auto mt-4 flex justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Registrarse
            </Button>
          </div>
        </form>

        <p className="mt-4">
          ¿Ya tienes cuenta?
          <Link to={"/"} className="text-blue-500">
            Acceder
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
