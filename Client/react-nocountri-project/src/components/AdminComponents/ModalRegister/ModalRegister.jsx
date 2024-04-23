import React, { useRef, useState, useEffect } from "react";
import {
  Dialog,
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
  Button,
  Input
} from "@/components";

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
  const emailRef = useRef(null);
  const contraseñaRef = useRef(null);
  const userRef = useRef(null);
  const DNIPadresRef = useRef(null);
  const DNIAlumnoRef = useRef(null);
  const DNIDocenteRef = useRef(null);
  const cursoAlumnoRef = useRef(null);
  const divisionAlumnoRef =useRef(null);
  const [subjects, setSubjects] = useState('');
  const [rol, setRol] = useState(null);

  useEffect(() => {
    console.log("Rol actualizado:", rol);
  }, [rol]);

  const handleSubjectsDocentes = (e) => {
    const inputValue = e.target.value;
    const formattedValue = inputValue.toLowerCase().trim()
    setSubjects(formattedValue)
  }

  const handleSelect = (nuevoRol) => {
    setRol(nuevoRol);
  };

  const letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U'];
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogOverlay />
      <DialogContent>
        <DialogTitle>Agregar Usuario</DialogTitle>
        <DialogDescription>
          Completa los campos para registrar un nuevo usuario.
        </DialogDescription>
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
                type="number"
                placeholder="DNI del docente"
                className="bg-transparent border border-slate-400"
                ref={DNIDocenteRef}
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
              ref={DNIAlumnoRef}
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
                <SelectItem value="4">4°</SelectItem>
                <SelectItem value="5">5°</SelectItem>
                <SelectItem value="6">6°</SelectItem>
                <SelectItem value="7">7°</SelectItem>
                <SelectItem value="8">8°</SelectItem>
                <SelectItem value="9">9°</SelectItem>
                <SelectItem value="10">10°</SelectItem>
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
                <SelectItem value="E">E</SelectItem>
                <SelectItem value="F">F</SelectItem>
                <SelectItem value="G">G</SelectItem>
                <SelectItem value="H">H</SelectItem>
                <SelectItem value="I">I</SelectItem>
                <SelectItem value="J">J</SelectItem>
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
                ref={DNIPadresRef}
              />
              <Input
                type="number"
                placeholder="DNI del alumno"
                className="bg-transparent border border-slate-400"
                ref={DNIAlumnoRef}
              />
            </>
          )}

          <div className="flex flex-row gap-4">
            <Button
              className="w-[70%] mx-auto mt-4 shadow-lg flex flex-row justify-center text-gray-700 bg-[rgba(245, 236, 239, 1)] hover:bg-[#d1cdce]  border-solid border-2 border-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => {}}
            >
              Cancelar
            </Button>
            <Button
              className="w-[70%] mx-auto mt-4 flex justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => {}}
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
