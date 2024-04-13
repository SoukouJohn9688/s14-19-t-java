import { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from '@fullcalendar/interaction'
import es from '@fullcalendar/core/locales/es';
import Swal from 'sweetalert2'
import "./CalendarioAsistencias.css"


const CalendarioAsistencias = () => {
  const [allEvents, setAllEvents] = useState([]);
  const [events, setEvents] = useState([
    { id: "1", title: "Presente", color: "#22C55E", backgroundColor: "#22C55E" },
    { id: "2", title: "Tardanza/ Ausente justificado", color: "#F97316", backgroundColor: "#F97316" },
    { id: "3", title: "Tardanza/ Ausente injustificado", color: "#FF0000", backgroundColor: "#FF0000" },
    { id: "4", title: "Tardanza/ Ausente no computable", color: "#3B82F6", backgroundColor: "#3B82F6" }
  ]);

  // const [editable, setEditable] = useState(true);

  useEffect(() => {
    let draggableEl = document.getElementById('draggable-el')
    // if (editable) return
    if (draggableEl) {
      const draggable = new Draggable(draggableEl, {
        itemSelector: ".fc-event",
        eventData: function (eventEl) {
          let title = eventEl.getAttribute("title")
          let id = eventEl.getAttribute("data")
          let start = eventEl.getAttribute("start")
          let color = eventEl.dataset.color
          return { title, id, start, color, }
        }
      });

      return () => {
        draggable.destroy();
      };
    }

  }, []);

  const handleEventClick = (clickInfo) => {
    // console.log(clickInfo.event.id)
    if (clickInfo.event.id) {
      Swal.fire({
        title: "¿Eliminar evento?",
        text: "No podras revertir este cambio!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "Cancelar",
        confirmButtonText: "Si, borrar!"
      }).then((result) => {
        if (result.isConfirmed) {
          // Filtrar la lista de eventos para eliminar el evento seleccionado
          const updatedEvents = allEvents.filter(event => Number(event.id) !== Number(clickInfo.event.id));
          // Actualizar el estado con la nueva lista de eventos
          setAllEvents(updatedEvents);
          Swal.fire({
            title: "Borrado!",
            text: "Tarjeta borrada con exito.",
            icon: "success"
          });
        }
      });
    }
  };

  const addEvent = (dropInfo) => {
    const eventupdated = {
      id: new Date().getTime(),
      title: dropInfo.draggedEl.innerText,
      start: dropInfo.dateStr,
      color: dropInfo.draggedEl.dataset.color,
    }
    setAllEvents(prevEvents =>
      [...prevEvents, eventupdated]);
  }

  return (
    <div className="flex justify-center pt-8 ">
      <div className="col-span-2 " >
        <FullCalendar
          plugins={[
            dayGridPlugin,
            interactionPlugin,
            timeGridPlugin
          ]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: ""
          }}
          events={allEvents}
          nowIndicator={true}
          editable={false}
          droppable={true}
          selectable={true}
          selectMirror={true}
          eventClick={(data) => handleEventClick(data)}
          drop={addEvent}
          height="auto"
          locale={es}
          eventClassNames="fc-pointer"
        />
      </div>
      <div className="col-span-1 p-4 mt-12">
        {/* <h1 className="text-lg font-bold mb-4 ">Referencias arrastables</h1> */}
        <div id="draggable-el" className="p-2 bg-gray-200 rounded-md w-72 ">
          {
            events.map(event => (
              <div
                className="fc-event cursor-pointer mb-2 p-1 bg-white shadow-md rounded-sm text-neutral-50  "
                title={event.title}
                data-color={event.color}
                style={{ backgroundColor: event.backgroundColor, cursor: "pointer" }}
                key={event.id}
              >
                <div >
                  {event.title}
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>

  );
}

export default CalendarioAsistencias;