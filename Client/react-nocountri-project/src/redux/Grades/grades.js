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
      if (!state.subjects[subject]) {
        state.subjects[subject] = {
          'Primer Semestre': [],
          'Segundo Semestre': [],
          'Intensificación': [],
        };
      }
      state.showIntensification[subject] = grade; // Actualizar showIntensification
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

    removeIntensificationGrade(state, action) {
      const { subject } = action.payload;
      if (state.subjects[subject]?.['Intensificación'].length > 0) {
        state.subjects[subject]['Intensificación'].pop();
      }
    },
    removeSecondSemesterGrade(state, action) {
      const { subject } = action.payload;
      if (state.subjects[subject]?.['Segundo Semestre'].length > 0) {
        state.subjects[subject]['Segundo Semestre'].pop();
      }
    },
    removeFirstSemesterGrade(state, action) {
      const { subject } = action.payload;
      if (state.subjects[subject]?.['Primer Semestre'].length > 0) {
        state.subjects[subject]['Primer Semestre'].pop();
      }
    },
  },
});


export const {
  updateFirstSemesterGrades,
  updateSecondSemesterGrades,
  updateIntensification,
  updateFinalGrade,
  removeFirstSemesterGrade,
  removeSecondSemesterGrade,
  removeIntensificationGrade,
} = gradesSlice.actions;

export default gradesSlice.reducer;

