import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
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
  const { register, handleSubmit, setValue, setError, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const { username, email, contraseña, repetirContraseña, rol } = data;

    console.log(data);

    if (contraseña !== repetirContraseña) {
      alert("Las contraseñas no coinciden");
      return;
    }

    if (!rol) {
      setError("rol", {
        type: "manual",
        message: "Por favor selecciona un rol",
      });
      return;
    }

    try {
      const response = await axios.post(
        "https://server-ed-platform-1-0.onrender.com/api/v1/auth/register",
        {
          email: email,
          password: contraseña,
          username: username,
          rol: rol,
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      console.log(response.data);
      alert("Registro exitoso");
    } catch (error) {
        console.log("Data being sent:", {
          email: email,
          password: contraseña,
          username: username,
          rol: rol,
        });
      console.error("Error:", error.response ? error.response.data : error.message);
      alert("Hubo un error en el registro");
    }
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
      <div className="space-y-8 my-28 sm:mt-20 sm:mb-6 p-8 bg-transparent shadow-lg rounded-lg w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-gray-700">
          Registrar un usuario
        </h1>
        <form className="space-y-4 flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <Input
            placeholder="Nombre y apellido"
            className="bg-transparent border border-slate-400"
            {...register("username", { required: "Este campo es obligatorio" })}
          />
          {errors.username && <span>{errors.username.message}</span>}
          <Input
            placeholder="Email"
            className="bg-transparent border border-slate-400"
            {...register("email", { required: "Por favor ingresa un email válido", pattern: /^\S+@\S+$/i })}
          />
          {errors.email && <span>{errors.email.message}</span>}
          <Input
            type="password"
            placeholder="Contraseña"
            className="bg-transparent border border-slate-400"
            {...register("contraseña", { required: "Este campo es obligatorio" })}
          />
          {errors.contraseña && <span>{errors.contraseña.message}</span>}
          <Input
            type="password"
            placeholder="Repetir contraseña"
            className="bg-transparent border border-slate-400"
            {...register("repetirContraseña", { required: "Este campo es obligatorio" })}
          />
          {errors.repetirContraseña && <span>{errors.repetirContraseña.message}</span>}
          <Select onValueChange={(value) => setValue("rol", value)}>
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="Selecciona tu rol" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Rol</SelectLabel>
                <SelectItem value="TEACHER">Docente</SelectItem>
                <SelectItem value="STUDENT">Alumno</SelectItem>
                <SelectItem value="PARENT">Padre, madre o tutor</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <input type="hidden" {...register("rol", { required: "Por favor selecciona un rol" })} />
          {errors.rol && <span>{errors.rol.message}</span>}
          <label className="flex items-center justify-center">
            <Checkbox
              className="mr-1"
              {...register("terminos", { required: "Debes aceptar los términos y condiciones" })}
            />
            <span className="text-xs">
              Acepto términos, condiciones y políticas de privacidad de&nbsp;
              <a href="#" className="text-blue-500">
                EdTech
              </a>
              .
            </span>
          </label>
          {errors.terminos && <span>{errors.terminos.message}</span>}

          <div className="flex flex-row gap-4">
            <Button
              type="button"
              className="w-[70%] mx-auto mt-4 shadow-lg flex flex-row justify-center text-gray-700 bg-[rgba(245, 236, 239, 1)] hover:bg-[#d1cdce] border-solid border-2 border-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
