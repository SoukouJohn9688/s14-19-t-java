import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import Swal from 'sweetalert2';
import es from '@fullcalendar/core/locales/es';
import { useSelector } from 'react-redux';
import ModalNotificacions from '../AdminComponents/ModalNotificacions/ModalNotificacions';
import { eventosColegio } from '@/mock';

const CalendarioGeneral = () => {
  const [allEventos, setAllEvents] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const userRole = useSelector((state) => state.auth.userRol);

  useEffect(() => {
    const updatedEvents = eventosColegio.map((evento) => ({
      id: evento.id,
      title: evento.title,
      start: evento.date,
    }));
    setAllEvents(updatedEvents);
  }, []);

  const handleDateSelect = (selectInfo) => {
    if (userRole === 'alumno' || userRole === 'padre') {
      Swal.fire({
        title: "No tienes permiso",
        text: "No puedes crear eventos en el calendario como estudiante o padre.",
        icon: "error",
      });
      return;
    }

    Swal.fire({
      title: "Ingresa título de evento",
      input: "text",
      showCancelButton: true,
      confirmButtonText: "Crear evento",
      cancelButtonText: "Cancelar",
      allowOutsideClick: false,
    }).then((result) => {
      if (result.isConfirmed) {
        const title = result.value;
        if (title) {
          const newEvent = {
            id: new Date().getTime(), // Identificador único basado en el tiempo actual
            title,
            start: selectInfo.startStr,
          };
          setAllEvents(prevEvent => [...prevEvent, newEvent]);
          setSelectedEvent(newEvent); // Establece el evento seleccionado
          setModalIsOpen(true); // Abre el modal de notificaciones
        } else {
          Swal.fire("Advertencia", "Ingrese un título para su evento.", "warning");
        }
      }
    });
  };

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        locale={es}
        events={allEventos}
        eventClick={(data) => handleEventClick(data)}
        select={handleDateSelect}
        eventClassNames="fc-pointer"
      />
      <ModalNotificacions isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)} eventData={selectedEvent} />
    </div>
  );
};

export default CalendarioGeneral;
