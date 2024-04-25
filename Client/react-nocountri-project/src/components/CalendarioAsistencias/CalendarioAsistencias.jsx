import { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from '@fullcalendar/interaction'
import es from '@fullcalendar/core/locales/es';
import Swal from 'sweetalert2'
import "./CalendarioAsistencias.css"
import { useDispatch, useSelector } from "react-redux";
import { addAttendance, getStudenInfo, getAttendanceById } from "../../redux/Attendance/attendance"
import { AlumnosData } from "@/mock";
import axios from "axios";
const CalendarioAsistencias = () => {
  const [asist] = useState(AlumnosData)

  // const userRol = useSelector((state) => state.auth.userRol);
  const userRol = useSelector((state) => state.auth.userRol);
  const asistenciasDocente = useSelector((state) => state.attendance.attendance);
  // console.log(asistenciasDocente, "asistenciasDocente")
  // const studentInfo = useSelector((state) => state.attendance.studentInfo);
  // const [id] = studentInfo
  // const studentAttendanceById = useSelector((state) => state.attendance.attendanceById);
  // console.log(studentAttendanceById, "studentAttendanceById")
  // console.log(id, "id")

  const dispatch = useDispatch()
  // const token = localStorage.getItem("token")
  // console.log(token, "token")
  // const asistencia = useSelector(state => state.attendance.attendanceById)

  // console.log(asistencia, "asistencia")
  // useEffect(() => {
  //   dispatch(getAttendanceById(2))

  // }, [])
  // const selector = useSelector()

  const [allEvents, setAllEvents] = useState([]);

  // const fetchData = async () => {
  //   const response = await axios.get(`http://localhost:8080/api/v1/attendance/${id}`, {
  //     headers: {
  //       'Authorization': localStorage.getItem("token") ? `Bearer ${localStorage.getItem("token")}` : "",

  //     }
  //   })
  //   console.log("response", response)
  //   // return response.data.data.map(est => est.id)
  // }


  useEffect(() => {

    const colorMapping = {
      'PRESENTE': '#22C55E',
      'JUSTIFICADO': '#F97316',
      'INJUSTIFICADO': '#FF0000',
      "NO_COMPUTABLE": '#3B82F6'
    };

    asist.map(asisto => {
      const updatedEvents = asisto.attendances.map(asistencia => ({
        id: asistencia.id,
        title: asistencia.type,
        start: asistencia.date,
        color: colorMapping[asistencia.type]
      }));
      setAllEvents([...asistenciasDocente, ...updatedEvents]);
    })
    // dispatch(getStudenInfo())
    // dispatch(getAttendanceById(id))
    // fetchData()
  }, []); // 

  // console.log(allEvents, "allEvents");

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
          return { title, id, start, color }
        }
      });

      return () => {
        draggable.destroy();
      };
    }

  }, []);

  const handleEventClick = (clickInfo) => {
    // console.log(clickInfo.event.id)
    // if (clickInfo.event.id) {
    if (userRol === "docente") {
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
    dispatch(addAttendance(eventupdated))
    // dispatch(postAttendance(eventupdated))
    setAllEvents(prevEvents => [...prevEvents, eventupdated]);
  }

  return (
    <div className="flex flex-col lg:flex-row lg:justify-center lg:items-start pt-8 ">
      <div className="lg:col-span-2 w-full" >
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
      {userRol === 'docente' && (
        <div className="lg:col-span-1 w-full lg:w-auto p-4 mt-12">
          <div id="draggable-el" className="p-2 bg-gray-200 rounded-md">
            {events.map(event => (
              <div
                className="fc-event cursor-pointer mb-2 p-1 bg-white shadow-md rounded-sm text-neutral-50"
                title={event.title}
                data-color={event.color}
                style={{ backgroundColor: event.backgroundColor, cursor: "pointer" }}
                key={event.id}
              >
                <div>
                  {event.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>

  );
}

export default CalendarioAsistencias;