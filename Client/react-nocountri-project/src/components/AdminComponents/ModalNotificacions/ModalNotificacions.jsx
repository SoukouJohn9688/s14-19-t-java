import React, { useRef, useState } from "react";
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
import { useSelector } from 'react-redux'; 

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ModalNotificacions = ({ isOpen, onClose, eventData }) => {
  const userRef = useRef(null);
  const [rol, setRol] = useState(null);
  const userName = useSelector(state => state.auth.userName); 

  const handleSubmit = () => {
    // Información a enviar en la notificación
    const notificationData = {
      id: eventData.start,
      sender: userName,
      recipient: rol,
      message: eventData.title,
      // Otros datos que desees enviar
    };

    // Envía la notificación mediante axios.post
    axios.post('url_de_la_api_para_enviar_notificacion', notificationData)
      .then(response => {
        // Maneja la respuesta si es necesario
        console.log('Notificación enviada con éxito:', response.data);
        onClose();
      })
      .catch(error => {
        // Maneja cualquier error que pueda ocurrir
        console.error('Error al enviar la notificación:', error);
        // Posiblemente muestres un mensaje de error al usuario
      });
  };
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogOverlay />
      <DialogContent>
        <DialogTitle>Agregar Notificación</DialogTitle>
        <form className="space-y-4 flex flex-col" onSubmit={(e) => e.preventDefault()}>
          <Input
            placeholder="Nombre y apellido de quién envía la notificación"
            className="bg-transparent border border-slate-400"
            ref={userRef}
            value={userName} 
            readOnly 
          />
          <Input
            value={eventData ? eventData.title : ''}
            readOnly
          />
          <Input
            value={eventData ? eventData.start : ''}
            readOnly
          />
          <Select onValueChange={setRol}>
            <SelectTrigger className="w-auto">
              <SelectValue placeholder="Selecciona a quién quieres enviar la notificación" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Destinatario</SelectLabel>
                <SelectItem value="docente">Docentes</SelectItem>
                <SelectItem value="alumno">Alumnos</SelectItem>
                <SelectItem value="padre">Padre, madre o tutor</SelectItem>
                <SelectItem value="todos">Todos</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>  
          <Button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Enviar nueva notificación</Button>
        </form>
        <DialogClose asChild />
      </DialogContent>
    </Dialog>
  );
};

export default ModalNotificacions;

