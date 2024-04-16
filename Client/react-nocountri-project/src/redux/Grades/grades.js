import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  grades: [], // Array para almacenar las calificaciones de los alumnos
};

const gradesSlice = createSlice({
  name: 'grades',
  initialState,
  reducers: {
    addGrade(state, action) {
      state.grades.push(action.payload); // Agrega una nueva calificación al array
    },
    updateGrade(state, action) {
      const { studentId, newGrade } = action.payload;
      const index = state.grades.findIndex(grade => grade.studentId === studentId);
      if (index !== -1) {
        state.grades[index].grade = newGrade; // Actualiza la calificación de un alumno específico
      }
    },
    removeGrade(state, action) {
      const studentIdToRemove = action.payload;
      state.grades = state.grades.filter(grade => grade.studentId !== studentIdToRemove); // Elimina la calificación de un alumno específico
    },
  },
});

export const { addGrade, updateGrade, removeGrade } = gradesSlice.actions;

export default gradesSlice.reducer;
