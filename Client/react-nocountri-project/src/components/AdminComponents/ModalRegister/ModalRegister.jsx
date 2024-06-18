import React, { useRef, useState, useEffect } from "react";
import { Dialog, DialogOverlay, DialogContent, DialogTitle, DialogDescription, DialogClose, Button, Input } from "@/components";
import { useForm } from "react-hook-form";
import axios from "axios"; 

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ModalRegister = ({ isOpen, onClose }) => {

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
        "http://substantial-allsun-proyect-test-1e5fae8f.koyeb.app/api/v1/auth/register",
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
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogOverlay />
      <DialogContent>
        <DialogTitle>Agregar Usuario</DialogTitle>
        <DialogDescription>
          Completa los campos para registrar un nuevo usuario.
        </DialogDescription>
        <form className="space-y-4 flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <Input
            placeholder="Nombre y apellido"
            className="bg-transparent border border-slate-400"
            {...register("username", { required: "Este campo es obligatorio" })}
          />
          {errors.username && <span>Este campo es obligatorio</span>}
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

          <div className="flex flex-row gap-4">
            <Button
              type="button"
              className="w-[70%] mx-auto mt-4 shadow-lg flex flex-row justify-center text-gray-700 bg-[rgba(245, 236, 239, 1)] hover:bg-[#d1cdce]  border-solid border-2 border-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={onClose}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className="w-[70%] mx-auto mt-4 flex justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Registrar nuevo usuario
            </Button>
          </div>
        </form>
        <DialogClose asChild />
      </DialogContent>
    </Dialog>
  );
};

export default ModalRegister;
