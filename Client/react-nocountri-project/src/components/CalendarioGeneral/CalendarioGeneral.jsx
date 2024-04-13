import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import Swal from "sweetalert2";
import es from "@fullcalendar/core/locales/es";
import "./CalendarioGeneral.css";

const CalendarioGeneral = () => {
  const [allEvents, setAllEvents] = useState([]);

  const handleEventClick = (clickInfo) => {
    if (clickInfo.event.id) {
      Swal.fire({
        title: "¿Eliminar evento?",
        text: "No podras revertir este cambio!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "Cancelar",
        confirmButtonText: "Si, borrar!",
      }).then((result) => {
        if (result.isConfirmed) {
          // Filtrar la lista de eventos para eliminar el evento seleccionado
          const updatedEvents = allEvents.filter(
            (event) => event.id !== clickInfo.event.id
          );
          // Actualizar el estado con la nueva lista de eventos
          setAllEvents(updatedEvents);
          Swal.fire({
            title: "Borrado!",
            text: "Tarjeta borrada con exito.",
            icon: "success",
          });
        }
      });
    }
  };
  const handleDateSelect = (selectInfo) => {
    Swal.fire({
      title: "Ingresa título de evento",
      input: "text",
      showCancelButton: true,
      confirmButtonText: "Crear evento",
      cancelButtonText: "Cancelar",
      // Allow empty title with warning message
      allowOutsideClick: false, // Prevent closing on outside click (optional)
    }).then((result) => {
      if (result.isConfirmed) {
        const title = result.value;
        if (title) {
          const newEvent = {
            id: Math.random().toString(36).substr(2, 9),
            title,
            start: selectInfo.startStr,
            end: selectInfo.endStr || selectInfo.startStr,
          };
          setAllEvents([...allEvents, newEvent]);
        } else {
          // Handle empty title case (optional)
          Swal.fire(
            "Advertencia",
            "Ingrese un titulo para su evento.",
            "warning"
          );
        }
      }
    });
  };

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        /* editable={true} */
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        locale={es}
        events={allEvents}
        eventClick={(data) => handleEventClick(data)}
        select={handleDateSelect}
        eventClassNames="fc-pointer"
      />
    </div>
  );
};

export default CalendarioGeneral;