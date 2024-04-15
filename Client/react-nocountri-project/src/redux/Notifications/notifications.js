import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hasNotification: false,
};

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    setNotification(state, action) {
      state.hasNotification = true;
    },
    clearNotification(state) {
      state.hasNotification = false;
    },
  },
});

export const { setNotification, clearNotification } = notificationsSlice.actions;

export default notificationsSlice.reducer;


// Fijarse si se quiere agregar un contador para las notificaciones.