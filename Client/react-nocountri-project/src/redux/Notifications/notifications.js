import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  notifications: [],
  notificationCount: 0,
};

const notifications = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotification(state, action) {
      state.notifications.push(action.payload);
      state.notificationCount++;
    },
    removeNotification(state, action) {
      state.notifications = state.notifications.filter(notification => notification.id !== action.payload);
      state.notificationCount--;
    },
    clearNotifications(state) {
      state.notifications = [];
      state.notificationCount = 0;
    },
  },
});

export const { addNotification, removeNotification, clearNotifications } = notifications.actions;

export default notifications.reducer;




// Fijarse si se quiere agregar un contador para las notificaciones.