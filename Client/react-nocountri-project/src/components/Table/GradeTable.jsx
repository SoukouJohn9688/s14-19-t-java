import React, { useEffect } from 'react';
import { updateFirstSemesterGrades, updateSecondSemesterGrades, updateIntensification } from '@/redux/Grades/grades';
import { useDispatch, useSelector } from 'react-redux';

const GradeTable = () => {
  const subjects = ["matemáticas", "lengua", "ciencias sociales", "ciencias naturales", "educación física", "arte", "inglés"];
  const dispatch = useDispatch();
  const grades = useSelector(state => state.grades.subjects);
  const showIntensification = useSelector(state => state.grades.showIntensification);

  // Resto del código sin cambios


  // Función para manejar el cambio de calificación
  const handleGradeChange = (subject, semester, index, value) => {
    if (value === '' || (parseFloat(value) >= 1 && parseFloat(value) <= 10)) {
      if (semester === 'Primer Semestre') {
        dispatch(updateFirstSemesterGrades({ subject, index, grade: value }));
      } else if (semester === 'Segundo Semestre') {
        dispatch(updateSecondSemesterGrades({ subject, index, grade: value }));
      } else {
        dispatch(updateIntensification({ subject, index, grade: value }));
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
        newShowIntensification[subject] = finalAverage < 7;
        // Actualizar el estado directamente con las acciones de Redux
        dispatch(updateIntensification({ subject, grade: newShowIntensification[subject] }));
      });
    }
  }, [grades]);

  // Función para añadir un input para una nueva calificación
  const handleAddGradeInput = (subject, semester) => {
    if (semester === 'Primer Semestre') {
      dispatch(updateFirstSemesterGrades({ subject, index: grades[subject]?.[semester]?.length || 0, grade: '' }));
    } else if (semester === 'Segundo Semestre') {
      dispatch(updateSecondSemesterGrades({ subject, index: grades[subject]?.[semester]?.length || 0, grade: '' }));
    } else {
      dispatch(updateIntensification({ subject, index: grades[subject]?.[semester]?.length || 0, grade: '' }));
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
                {['Primer Semestre', 'Segundo Semestre'].map((semester) => (
                  <td key={`${subject}-${semester}`} className="border border-black px-4 py-2">
                    <div className="flex flex-col items-center">
                      <div className="flex items-center gap-2">
                        {grades[subject]?.[semester].map((grade, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <input
                              className="w-[40px] border-2 border-blue-500"
                              type="number"
                              value={grade}
                              min={1}
                              max={10}
                              onChange={(e) => handleGradeChange(subject, semester, index, e.target.value)}
                            />
                          </div>
                        ))}
                        {semester !== 'Intensificación' && 
                          <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => handleAddGradeInput(subject, semester)}>+</button>
                        }
                      </div>
                      {semester !== 'Intensificación' && 
                        <span>Promedio: {calculateSemesterAverage(grades[subject]?.[semester])}</span>
                      }
                    </div>
                  </td>
                ))}
                <td className="border border-black px-4 py-2">
                  {calculateFinalAverageForSubject(subject)}
                </td>
                <td className="border border-black px-4 py-2">
                  {showIntensification[subject] ? (
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
                      {showIntensification[subject] && grades[subject]?.['Intensificación'].length < 3 && (
                        <button className="bg-blue-500 text-white px-2 py-1 rounded" onClick={() => handleAddGradeInput(subject, 'Intensificación')}>+</button>
                      )}
                    </div>
                  ) : null}
                </td>
                <td className="border border-black px-4 py-2">
                  {calculateFinalAverageForSubject(subject) >= 7 || grades[subject]?.['Intensificación'].some(grade => parseFloat(grade) >= 7) ? 'APROBADO' : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  export default GradeTable;