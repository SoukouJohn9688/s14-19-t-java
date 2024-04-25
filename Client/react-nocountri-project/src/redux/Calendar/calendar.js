import { createSlice } from '@reduxjs/toolkit';

const calendarSlice = createSlice({
  name: 'calendar',
  initialState: {
    events: [],
  },
  reducers: {
    addEvent: (state, action) => {
      state.events.push(action.payload);
    },
    removeEvent: (state, action) => {
      state.events = state.events.filter((event) => event.id!== action.payload);
    },
    setEvents: (state, action) => {
      state.events = action.payload;
    },
  },
});

export const { addEvent, removeEvent, setEvents } = calendarSlice.actions;
export default calendarSlice.reducer;