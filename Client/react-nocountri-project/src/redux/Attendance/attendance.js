import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  attendance: [], // Array para almacenar la asistencia de los alumnos
  attendanceById: {} // Objeto para guardar las asistencias por el id del estudiante
};

const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJjODFmOTRhOS1jMmNmLTQ0NTItYmFmMi1mYWYyZTNlN2MyMjYiLCJlbWFpbCI6ImFndXN0aW5AZW1haWwuY29tIiwicm9sZSI6IkNsaWVudGUiLCJDbGllbnRVc2VySWQiOiIyIiwibmJmIjoxNzEwMzcxMTgzLCJleHAiOjE3MTA0NTc1ODMsImlhdCI6MTcxMDM3MTE4M30.RgU3Q1bjuWcp8NFc4YZ-p0fZGJPtT5cJSnQUie9DAnw"

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

export const postAttendance = createAsyncThunk('attendance/postAttendance', async (attendance) => {
  try {
    const response = await axios.post(``, {
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
    addAttendance(state, action) {
      // Almacena las asistencias que guarda el docente
      state.attendance = action.payload;
    },
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
    })

  },
  extraReducers: (builder) => {
    builder.addCase(postAttendance.fulfilled, (state, action) => {
      state.attendance = action.payload
    })
  }
});

export const { markAttendance, removeAttendance, addAttendance } = attendanceSlice.actions;

export default attendanceSlice.reducer;
