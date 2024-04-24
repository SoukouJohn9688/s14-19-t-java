import React, { useRef, useState, useEffect } from "react";
import { Dialog, DialogOverlay, DialogContent, DialogTitle, DialogDescription, DialogClose, Button, Input } from "@/components";
import { useForm } from "react-hook-form"; 

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [subjects, setSubjects] = useState('');
  const [rol, setRol] = useState(null);

  useEffect(() => {
    console.log("Rol actualizado:", rol);
  }, [rol]);

  const handleSubjectsDocentes = (e) => {
    const inputValue = e.target.value;
    const formattedValue = inputValue.toLowerCase().trim();
    setSubjects(formattedValue);
  };

  const handleSelect = (nuevoRol) => {
    setRol(nuevoRol);
  };

  const onSubmit = (data) => {
    // Manejar los datos del formulario aquí (por ejemplo, enviar una solicitud de registro)
    console.log(data);
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
              <Input
                placeholder= "Materias que dicta"
                className="bg-transparent border border-slate-400"
                value={subjects}
                onChange ={handleSubjectsDocentes}
              />
            </>
          )}

          {rol === "alumno" && (
            <>
              <Input
                type="number"
                placeholder="DNI del alumno"
                className="bg-transparent border border-slate-400"
                {...register("dniAlumno", { required: true })}
              />
              <Select>
                <SelectTrigger className="w-[280px]">
                  <SelectValue placeholder="Selecciona el año que cursa" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Curso</SelectLabel>
                    <SelectItem value="1">1°</SelectItem>
                    <SelectItem value="2">2°</SelectItem>
                    <SelectItem value="3">3°</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[280px]">
                  <SelectValue placeholder="Selecciona la división" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>División</SelectLabel>
                    <SelectItem value="A">A</SelectItem>
                    <SelectItem value="B">B</SelectItem>
                    <SelectItem value="C">C</SelectItem>
                    <SelectItem value="D">D</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </>
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
