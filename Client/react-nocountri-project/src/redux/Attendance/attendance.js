import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  attendance: [], // Array para almacenar la asistencia de los alumnos
  attendanceById: {} // Objeto para filtrar las asistencias por el id del estudiante
};

const authToken = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzdHVkZW50MUBlbWFpbC5jb20iLCJpYXQiOjE3MTM0MTE1OTQsImV4cCI6MTcxMzQxMTg5NH0.kf67q71yo9kXp7o6OK0nf4f5wOAoh1p9fr71Ne5GDtA"

export const getAttendanceById = createAsyncThunk('attendance/getAttendanceById', async (idStudent) => {
  try {
    const response = await axios(`http://localhost:8080/api/v1/attendance/${idStudent}`, {
      headers: {
        'Authorization': `Bearer ${authToken}`,
        'Content-Type': 'application/json'
      }
    });
    return response.data
  } catch (error) {
    throw Error(error.message);
  }
})


const attendanceSlice = createSlice({
  name: 'attendance',
  initialState,
  reducers: {
    // getAttendance(state, action) {
    //   // tengo que hacer una funcion para hacer un get de la base de datos
    //   // y despues ejecutar esta accion para pasar la asistencia de la base de datos al state
    //   // Almacena las asistencias de los alumnos
    //   state.attendance.push(action.payload);
    // },
    // filterAttendanceById(state, action) {
    //   // filtra las asistencias por el id del estudiante
    //   const { idStudent } = action.payload;
    //   const filteredAttendance = state.attendance.filter(attendance => attendance.studentId === idStudent)
    //   state.attendanceById = filteredAttendance
    // },
    // postAttendance(state, action) {

    // },


    // markAttendance(state, action) {
    //   const { studentId, status,idStudent } = action.payload;
    //   const index = state.attendance.findIndex(attendance => attendance.studentId === studentId);
    //   if (index !== -1) {
    //     state.attendance[index].status = status; // Actualiza el estado de asistencia de un alumno específico
    //   } else {
    //     state.attendance.push({ studentId, status }); // Agrega una nueva entrada de asistencia si el alumno no está en la lista
    //   }
    // },
    // removeAttendance(state, action) {
    //   const studentIdToRemove = action.payload;
    //   state.attendance = state.attendance.filter(attendance => attendance.studentId !== studentIdToRemove); // Elimina la asistencia de un alumno específico
    // },

  },
  extraReducers: (builder) => {
    builder.addCase(getAttendanceById.fulfilled, (state, action) => {
      state.attendanceById = action.payload
      // console.log("action.payload", action.payload)
      // console.log('attendanceById:', state.attendanceById);
    })
  }
});

export const { markAttendance, removeAttendance } = attendanceSlice.actions;

export default attendanceSlice.reducer;
