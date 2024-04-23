import { createSlice } from '@reduxjs/toolkit';

const gradesSlice = createSlice({
  name: 'grades',
  initialState: {
    subjects: {},
    showIntensification: {}
  },
  reducers: {
    updateFirstSemesterGrades(state, action) {
      const { subject, index, grade } = action.payload;
      if (!state.subjects[subject]) {
        state.subjects[subject] = {
          'Primer Semestre': [],
          'Segundo Semestre': [],
          'Intensificación': [],
        };
      }
      state.subjects[subject]['Primer Semestre'][index] = grade;
    },
    
    updateSecondSemesterGrades(state, action) {
      const { subject, index, grade } = action.payload;
      if (!state.subjects[subject]) {
        state.subjects[subject] = {
          'Primer Semestre': [],
          'Segundo Semestre': [],
          'Intensificación': [],
        };
      }
      state.subjects[subject]['Segundo Semestre'][index] = grade;
    },
    
    updateIntensification(state, action) {
      const { subject, grade } = action.payload;
      // Actualizar el estado de intensificación directamente
      state.showIntensification[subject] = grade;
    },
    
    updateFinalGrade(state, action) {
      const { subject, grade } = action.payload;
      if (!state.subjects[subject]) {
        state.subjects[subject] = {
          'Primer Semestre': [],
          'Segundo Semestre': [],
          'Intensificación': [],
        };
      }
      state.subjects[subject].finalGrade = grade;
    },
  },
});

export const {
  updateFirstSemesterGrades,
  updateSecondSemesterGrades,
  updateIntensification,
  updateFinalGrade,
} = gradesSlice.actions;

export default gradesSlice.reducer;
