import React, { useEffect } from 'react';
import { updateFirstSemesterGrades, removeFirstSemesterGrade, removeSecondSemesterGrade, removeIntensificationGrade, updateFinalGrade, updateSecondSemesterGrades, updateIntensification } from '@/redux/Grades/grades';
import { useDispatch, useSelector } from 'react-redux';

const GradeTable = () => {
  const subjects = ["matemáticas", "lengua", "ciencias sociales", "ciencias naturales", "educación física", "arte", "inglés"];
  const dispatch = useDispatch();
  const grades = useSelector(state => state.grades.subjects);
  const showIntensification = useSelector(state => state.grades.showIntensification);

  const handleGradeChange = (subject, semester, index, value, inputIndex) => {
    if (value === '' || (parseFloat(value) >= 1 && parseFloat(value) <= 10)) {
      if (semester === 'Primer Semestre') {
        dispatch(updateFirstSemesterGrades({ subject, index, grade: value }));
      } else if (semester === 'Segundo Semestre') {
        dispatch(updateSecondSemesterGrades({ subject, index, grade: value }));
      } else {
        // Actualizamos la intensificación
        dispatch(updateIntensification({ subject, index: inputIndex, grade: value }));
  
        // Verificamos si alguna de las calificaciones de intensificación es mayor o igual a 7
        const intensificationGrades = grades[subject]?.['Intensificación'] || [];
        const isApprovedIntensification = intensificationGrades.some(grade => parseFloat(grade) >= 7);
  
        // Verificamos si el valor ingresado es mayor o igual a siete
        if (parseFloat(value) >= 7) {
          // Si es mayor o igual a siete, marcamos la intensificación como aprobada
          dispatch(updateFinalGrade({ subject, grade: 'APROBADO' }));
        } else {
          // Si es menor a siete, marcamos la intensificación como no aprobada
          dispatch(updateFinalGrade({ subject, grade: isApprovedIntensification ? 'APROBADO' : '' }));
        }
      }
    }
  };
  

  // Función para calcular el promedio de las calificaciones de un semestre
  const calculateSemesterAverage = (gradesArray) => {
    if (!gradesArray || gradesArray.length === 0 || !gradesArray.some(grade => !isNaN(parseFloat(grade)))) {
      return 0;
    }

    const filteredGrades = gradesArray.filter(grade => !isNaN(parseFloat(grade)));
    const sum = filteredGrades.reduce((acc, grade) => acc + parseFloat(grade), 0);
    const average = sum / filteredGrades.length;
    return average.toFixed(2);
  };

  // Función para calcular el promedio final de una materia específica
  const calculateFinalAverageForSubject = (subject) => {
    const primerSemestreAverage = calculateSemesterAverage(grades[subject]?.['Primer Semestre']);
    const segundoSemestreAverage = calculateSemesterAverage(grades[subject]?.['Segundo Semestre']);
    return ((parseFloat(primerSemestreAverage) + parseFloat(segundoSemestreAverage)) / 2).toFixed(2);
  };

  useEffect(() => {
    if (grades) {
      const newShowIntensification = {};
      subjects.forEach(subject => {
        const finalAverage = calculateFinalAverageForSubject(subject);
        const shouldShowIntensification = finalAverage < 7;
        if (shouldShowIntensification !== showIntensification[subject]) {
          newShowIntensification[subject] = shouldShowIntensification;
          // Solo despachar la acción si hay cambios relevantes
          dispatch(updateIntensification({ subject, grade: shouldShowIntensification }));
        }
      });
    }
  }, [grades, showIntensification]);
  
  const handleAddGradeInput = (subject, semester) => {
    if (semester === 'Primer Semestre') {
      dispatch(updateFirstSemesterGrades({ subject, index: grades[subject]?.[semester]?.length || 0, grade: '' }));
    } else if (semester === 'Segundo Semestre') {
      dispatch(updateSecondSemesterGrades({ subject, index: grades[subject]?.[semester]?.length || 0, grade: '' }));
    } else if (semester === 'Intensificación') {
      dispatch(updateIntensification({ subject, grade: [...(grades[subject]?.['Intensificación'] || []), ''] }));
  
      // Verificar si la calificación final es mayor o igual a 7
      const finalAverage = calculateFinalAverageForSubject(subject);
      const intensificationGrades = grades[subject]?.['Intensificación'] || [];
      const isApprovedFinal = finalAverage >= 7;
  
      // Verificar si alguna de las nuevas calificaciones es mayor o igual a 7
      const hasGradeEqualOrGreaterThan7 = intensificationGrades.some(grade => parseFloat(grade) >= 7);
  
      // Actualizar la acreditación de la materia
      if (isApprovedFinal || hasGradeEqualOrGreaterThan7) {
        dispatch(updateFinalGrade({ subject, grade: 'APROBADO' }));
      }
    }
  };

// Función para eliminar el último input de una materia específica
const handleRemoveGradeInput = (subject, semester) => {
  if (semester === 'Primer Semestre') {
    dispatch(removeFirstSemesterGrade({ subject }));
  } else if (semester === 'Segundo Semestre') {
    dispatch(removeSecondSemesterGrade({ subject }));
  } else if (semester === 'Intensificación') {
    dispatch(removeIntensificationGrade({ subject }));
  }
};


return (
  <div>
    <table className="w-full border-collapse border border-black">
      <thead>
        <tr className="bg-gray-200">
          <th className="border border-black px-4 py-2">Espacio Curricular</th>
          <th className="border border-black px-4 py-2">Primer Semestre</th>
          <th className="border border-black px-4 py-2">Segundo Semestre</th>
          <th className="border border-black px-4 py-2">Calificación final</th>
          <th className="border border-black px-4 py-2">Intensificación</th>
          <th className="border border-black px-4 py-2">Acreditación</th>
        </tr>
      </thead>
      <tbody>
        {subjects.map((subject) => (
          <tr key={subject} className="bg-white">
            <td className="border border-black px-4 py-2">{subject}</td>
            <td className="border border-black px-4 py-2">
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-2">
                  {grades[subject]?.['Primer Semestre'].map((grade, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <input
                        className="w-[40px] border-2 border-blue-500"
                        type="number"
                        value={grade}
                        min={1}
                        max={10}
                        onChange={(e) => handleGradeChange(subject, 'Primer Semestre', index, e.target.value)}
                      />
                    </div>
                  ))}
                  <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => handleRemoveGradeInput(subject, 'Primer Semestre')}>-</button>
                  <button className="bg-green-500 text-white px-2 py-1 rounded" onClick={() => handleAddGradeInput(subject, 'Primer Semestre')}>+</button>
                </div>
                <span>Promedio: {calculateSemesterAverage(grades[subject]?.['Primer Semestre'])}</span>
              </div>
            </td>
            <td className="border border-black px-4 py-2">
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-2">
                  {grades[subject]?.['Segundo Semestre'].map((grade, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <input
                        className="w-[40px] border-2 border-blue-500"
                        type="number"
                        value={grade}
                        min={1}
                        max={10}
                        onChange={(e) => handleGradeChange(subject, 'Segundo Semestre', index, e.target.value)}
                      />
                    </div>
                  ))}
                  <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => handleRemoveGradeInput(subject, 'Segundo Semestre')}>-</button>
                  <button className="bg-green-500 text-white px-2 py-1 rounded" onClick={() => handleAddGradeInput(subject, 'Segundo Semestre')}>+</button>
                </div>
                <span>Promedio: {calculateSemesterAverage(grades[subject]?.['Segundo Semestre'])}</span>
              </div>
            </td>
            <td className="border border-black px-4 py-2">
              {calculateFinalAverageForSubject(subject)}
            </td>
            <td className="border border-black px-4 py-2">
              {calculateFinalAverageForSubject(subject) < 7 ? (
                <div style={{ display: 'flex', gap: '5px' }}>
                  {grades[subject]?.['Intensificación'].map((grade, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <input
                        key={index}
                        type="number"
                        value={grade}
                        onChange={(e) => handleGradeChange(subject, 'Intensificación', index, e.target.value)}
                        className="w-[40px] border-2 border-blue-500"
                        min={1}
                        max={10}
                      />
                    </div>
                  ))}
                  <input
                    type="number"
                    value={null}
                    onChange={(e) => handleGradeChange(subject, 'Intensificación', grades[subject]?.['Intensificación']?.length || 0, e.target.value)}
                    className="w-[60px] border-2 border-blue-500"
                    min={1}
                    max={10}
                  />
                </div>
              ) : null}
            </td>
            <td className="border border-black px-4 py-2">
              {grades[subject]?.finalGrade}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
};

  export default GradeTable;