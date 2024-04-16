import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  attendance: [], // Array para almacenar la asistencia de los alumnos
};

const attendanceSlice = createSlice({
  name: 'attendance',
  initialState,
  reducers: {
    markAttendance(state, action) {
      const { studentId, status } = action.payload;
      const index = state.attendance.findIndex(attendance => attendance.studentId === studentId);
      if (index !== -1) {
        state.attendance[index].status = status; // Actualiza el estado de asistencia de un alumno específico
      } else {
        state.attendance.push({ studentId, status }); // Agrega una nueva entrada de asistencia si el alumno no está en la lista
      }
    },
    removeAttendance(state, action) {
      const studentIdToRemove = action.payload;
      state.attendance = state.attendance.filter(attendance => attendance.studentId !== studentIdToRemove); // Elimina la asistencia de un alumno específico
    },
  },
});

export const { markAttendance, removeAttendance } = attendanceSlice.actions;

export default attendanceSlice.reducer;
