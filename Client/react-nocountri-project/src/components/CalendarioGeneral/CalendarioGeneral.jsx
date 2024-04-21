import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import Swal from "sweetalert2";
import es from "@fullcalendar/core/locales/es";
import "./CalendarioGeneral.css";
//import { useDispatch, useSelector } from "react-redux";
//import { removeEvent } from "../../redux/Calendar/calendar";
import { eventosColegio } from "@/mock";
import { useEffect, useState } from "react";

const CalendarioGeneral = () => {
  const [allEventos, setAllEvents] = useState([]);
  
  //const dispatch = useDispatch();
  //const allEvents = useSelector((state) => state.calendar.events);
  console.log(allEventos, "all events")


  useEffect(() => {
    const updatedEvents = eventosColegio.map((evento) => ({
      id: evento.id,
      title: evento.title,
      start: evento.date,
    }));
    setAllEvents(updatedEvents);
  }, []);

  const handleEventClick = (clickInfo) => {
    console.log(clickInfo.event.id)
    if (clickInfo.event.id) {
      Swal.fire({
        title: "¿Eliminar evento?",
        text: "No podrás revertir este cambio!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "Cancelar",
        confirmButtonText: "Sí, borrar!",
      }).then((result) => {
        if (result.isConfirmed) {
          //dispatch(removeEvent(clickInfo.event.id)); // Dispatch action to remove event
          const updatedEvents = allEventos.filter(
            (event) => Number(event.id, 'event id') !== Number(clickInfo.event.id, 'click info.id')
          );
          // Actualizar el estado con la nueva lista de eventos
          setAllEvents(updatedEvents);
          Swal.fire({
            title: "Borrado!",
            text: "Evento borrado con éxito.",
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
      allowOutsideClick: false,
    }).then((result) => {
      if (result.isConfirmed) {
        const title = result.value;
        if (title) {
          const newEvent = {
            id: new Date().getTime(),
            title,
            start: selectInfo.startStr,
          };
          //dispatch(addEvent(newEvent)); // Dispatch action to add event

          setAllEvents(prevEvent => [...prevEvent,newEvent])
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
    </div>
  );
};

export default CalendarioGeneral;
