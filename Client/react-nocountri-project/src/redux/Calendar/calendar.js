import { createSlice } from '@reduxjs/toolkit';

// Define un slice de Redux llamado calendarioSlice
const calendarSlice = createSlice({
  name: 'calendar', // Nombre del slice
  initialState: {
    events: [], // Estado inicial con un array vacío para los eventos
  },
  reducers: {
    // Reductor para agregar un nuevo evento al array de eventos
    addEvent: (state, action) => {
      state.events.push(action.payload);
    },
    // Reductor para eliminar un evento del array de eventos por su id
    removeEvent: (state, action) => {
      state.events = state.events.filter(
        (event) => event.id !== action.payload
      );
    },

    // Reductor para traer los eventos desde el backend
    getEvents: (state, action) => {
      state.events = action.payload;
    },
  },
});

// Exporta los creadores de acciones para los reductores addEvent, removeEvent y setEvents
export const { addEvent, removeEvent, setEvents,getEvents } = calendarSlice.actions;

// Exporta la función reductora para calendarioSlice
export default calendarSlice.reducer;