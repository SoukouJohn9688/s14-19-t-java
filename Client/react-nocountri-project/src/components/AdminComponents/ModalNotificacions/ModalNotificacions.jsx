import React, { useRef, useState, useEffect } from "react";
import {
  Dialog,
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
  Button,
  Input,
  Textarea
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

const ModalNotificacions = ({ isOpen, onClose }) => {
  const userRef = useRef(null);
  const [rol, setRol] = useState(null);

  const handleSelect = (nuevoRol) => {
    setRol(nuevoRol);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogOverlay />
      <DialogContent>
        <DialogTitle>Agregar Notificación</DialogTitle>
        <form className="space-y-4 flex flex-col">
          <Input
            placeholder="Nombre y apellido de quién envía la notifación"
            className="bg-transparent border border-slate-400"
            ref={userRef}
          />

          <Select onValueChange={(e) => handleSelect(e)}>
            <SelectTrigger className="w-auto">
              <SelectValue placeholder="Selecciona a quién quieres enviar la notificación" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel></SelectLabel>
                <SelectItem value="docente">Docentes</SelectItem>
                <SelectItem value="alumno">Alumnos</SelectItem>
                <SelectItem value="padre">Padre, madre o tutor</SelectItem>
                <SelectItem value="todos">Todos</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>  

          <Textarea placeholder="Deja el mensaje de la notificación" />

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
              Enviar nueva notificación
            </Button>
          </div>



        </form>
        <DialogClose asChild />
      </DialogContent>
    </Dialog>
  );
};

export default ModalNotificacions;