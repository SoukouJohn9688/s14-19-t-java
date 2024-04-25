import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  attendance: [], // Array para almacenar la asistencia de los alumnos
  attendanceById: [], // Objeto para guardar las asistencias por el id del estudiante
  studentInfo: []
};

// const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJjODFmOTRhOS1jMmNmLTQ0NTItYmFmMi1mYWYyZTNlN2MyMjYiLCJlbWFpbCI6ImFndXN0aW5AZW1haWwuY29tIiwicm9sZSI6IkNsaWVudGUiLCJDbGllbnRVc2VySWQiOiIyIiwibmJmIjoxNzEwMzcxMTgzLCJleHAiOjE3MTA0NTc1ODMsImlhdCI6MTcxMDM3MTE4M30.RgU3Q1bjuWcp8NFc4YZ-p0fZGJPtT5cJSnQUie9DAnw"

export const getAttendanceById = createAsyncThunk('attendance/getAttendanceById', async (idStudent) => {
  try {
    const response = await axios(`http://localhost:8080/api/v1/attendance/${idStudent}`, {
      headers: {
        'Authorization': localStorage.getItem("token") ? `Bearer ${localStorage.getItem("token")}` : "",
        'Content-Type': 'application/json'
      }
    });
    console.log("response", response.data.data)
    return response
  } catch (error) {
    throw Error(error.message);
  }
})

export const getStudenInfo = createAsyncThunk('astudenInfo/getStudenInfo', async () => {
  try {
    const response = await axios('http://localhost:8080/api/v1/student/', {
      headers: {
        'Authorization': localStorage.getItem("token") ? `Bearer ${localStorage.getItem("token")}` : "",
        'Content-Type': 'application/json'
      }
    });
    // console.log("response", response)
    return response.data.data.map(est => est.id)
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
      state.attendance.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAttendanceById.fulfilled, (state, action) => {
      console.log("action.payload", action.payload)
      state.attendanceById = action.payload.data.data
    })

  },
  extraReducers: (builder) => {
    builder.addCase(getStudenInfo.fulfilled, (state, action) => {
      state.studentInfo = action.payload
    })
  }
});

export const { markAttendance, removeAttendance, addAttendance } = attendanceSlice.actions;

export default attendanceSlice.reducer;
