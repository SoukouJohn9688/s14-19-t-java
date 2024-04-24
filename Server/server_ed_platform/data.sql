-- Agregar las cuentas de usuario
-- Padre
INSERT INTO user_entity (email, password, role, username) VALUES ('parent1@email.com', '$2a$10$Toz0oLY68WhRTvu94cbcs.qZE5.z5Y0BLtH3uEKXzbtvRCk.OWy5y', 'PARENT','john_doe');
-- Estudiante
INSERT INTO user_entity (email, password, role, username) VALUES ('student1@email.com', '$2a$10$0TI9Lx.S0737Fqvs/DbtbODt9wYbmyKd1fpNULGWYq8tJOzkVeh0S', 'STUDENT','pedro_student');
-- Teacher 
INSERT INTO user_entity (email, password, role, username) VALUES ('teacher1@email.com', '$2a$10$hyM/NmJaX6tdGEuZqJDDPOHo3ryRq9TNsU1rw3fxxzGdiFqIE6chm', 'TEACHER','sebastian_teacher');

-- Insertar materias adicionales
INSERT INTO subject (name) VALUES ('MATEMATICAS');
INSERT INTO subject (name) VALUES ('LENGUAS');
INSERT INTO subject (name) VALUES ('CIENCIAS');
INSERT INTO subject (name) VALUES ('EDUCACION_FISICA');
INSERT INTO subject (name) VALUES ('SISTEMAS');
INSERT INTO subject (name) VALUES ('FISICA');

-- Insertar padres adicionales
INSERT INTO parent (name, surname, dni, address, birthdate, cellphone, sex) VALUES ('John', 'Doe', 123456789, 'Calle Falsa 123', '1958-10-23', '84893799', 'MASCULINO');


-- Insertar
INSERT INTO current_year (year) VALUES ('PRIMER_AÑO');
INSERT INTO current_year (year) VALUES ('SEGUNDO_AÑO');
INSERT INTO current_year (year) VALUES ('TERCER_AÑO');

-- Insertar estudiantes asociados a los padres con IDs del 1 al 5
-- Dos estudiantes para John Doe (ID de padre: 1)
INSERT INTO student (name, surname, dni, currentjyear_id, parent_id, address, birthdate, cellphone, sex) VALUES ('Pedro', 'Doe', 893478578, 1, 1, 'Calle falsa 123', '1998-05-15', '1234567890', 'MASCULINO');
INSERT INTO student (name, surname, dni, current_year_id, parent_id, address, birthdate, cellphone, sex) VALUES ('Miguel', 'Doe', 839457894, 3, 1, 'Calle falsa 123', '2000-10-20', '0987654321', 'MASCULINO');


-- Insertar asistencias para el estudiante con ID 1

INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-03-02', 1);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-03-03', 1);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-03-04', 1);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-03-05', 1);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-03-06', 1);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-03-07', 1);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-03-08', 1);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-03-09', 1);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-03-10', 1);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-03-11', 1);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-03-12', 1);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-03-13', 1);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-03-14', 1);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-03-15', 1);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-03-16', 1);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-03-17', 1);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-03-18', 1);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-03-19', 1);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-03-20', 1);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-03-21', 1);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-03-22', 1);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-03-23', 1);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-03-24', 1);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-03-25', 1);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-03-26', 1);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-03-27', 1);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-03-28', 1);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-03-29', 1);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-03-30', 1);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-03-31', 1);

INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-04-01', 1);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-04-02', 1);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-04-03', 1);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-04-04', 1);
INSERT INTO attendance (type, date, student_id) VALUES ('JUSTIFICADO', '2024-04-05', 1);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-04-06', 1);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-04-07', 1);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-04-08', 1);
INSERT INTO attendance (type, date, student_id) VALUES ('JUSTIFICADO', '2024-04-09', 1);
INSERT INTO attendance (type, date, student_id) VALUES ('JUSTIFICADO', '2024-04-10', 1);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-04-11', 1);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-04-12', 1);
INSERT INTO attendance (type, date, student_id) VALUES ('NO_COMPUTABLE', '2024-04-13', 1);
INSERT INTO attendance (type, date, student_id) VALUES ('INJUSTIFICADO', '2024-04-14', 1);
INSERT INTO attendance (type, date, student_id) VALUES ('JUSTIFICADO', '2024-04-15', 1);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-04-16', 1);
INSERT INTO attendance (type, date, student_id) VALUES ('NO_COMPUTABLE', '2024-04-17', 1);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-04-18', 1);
INSERT INTO attendance (type, date, student_id) VALUES ('NO_COMPUTABLE', '2024-04-19', 1);
INSERT INTO attendance (type, date, student_id) VALUES ('NO_COMPUTABLE', '2024-04-20', 1);

-- Insertar asistencias para el estudiante con ID 2
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-03-02', 2);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-03-03', 2);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-03-04', 2);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-03-05', 2);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-03-06', 2);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-03-07', 2);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-03-08', 2);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-03-09', 2);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-03-10', 2);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-03-11', 2);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-03-12', 2);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-03-13', 2);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-03-14', 2);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-03-15', 2);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-03-16', 2);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-03-17', 2);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-03-18', 2);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-03-19', 2);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-03-20', 2);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-03-21', 2);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-03-22', 2);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-03-23', 2);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-03-24', 2);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-03-25', 2);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-03-26', 2);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-03-27', 2);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-03-28', 2);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-03-29', 2);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-03-30', 2);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-03-31', 2);

INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-04-01', 2);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-04-02', 2);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-04-03', 2);
INSERT INTO attendance (type, date, student_id) VALUES ('JUSTIFICADO', '2024-04-04', 2);
INSERT INTO attendance (type, date, student_id) VALUES ('JUSTIFICADO', '2024-04-05', 2);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-04-06', 2);
INSERT INTO attendance (type, date, student_id) VALUES ('NO_COMPUTABLE', '2024-04-07', 2);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-04-08', 2);
INSERT INTO attendance (type, date, student_id) VALUES ('JUSTIFICADO', '2024-04-09', 2);
INSERT INTO attendance (type, date, student_id) VALUES ('JUSTIFICADO', '2024-04-10', 2);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-04-11', 2);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-04-12', 2);
INSERT INTO attendance (type, date, student_id) VALUES ('NO_COMPUTABLE', '2024-04-13', 2);
INSERT INTO attendance (type, date, student_id) VALUES ('INJUSTIFICADO', '2024-04-14', 2);
INSERT INTO attendance (type, date, student_id) VALUES ('JUSTIFICADO', '2024-04-15', 2);
INSERT INTO attendance (type, date, student_id) VALUES ('NO_COMPUTABLE', '2024-04-16', 2);
INSERT INTO attendance (type, date, student_id) VALUES ('NO_COMPUTABLE', '2024-04-17', 2);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-04-18', 2);
INSERT INTO attendance (type, date, student_id) VALUES ('NO_COMPUTABLE', '2024-04-19', 2);
INSERT INTO attendance (type, date, student_id) VALUES ('NO_COMPUTABLE', '2024-04-20', 2);





-- Insertar las 6 materias a los estudiantes
INSERT INTO student_subject (student_id, subject_id) VALUES (1, 1);
INSERT INTO student_subject (student_id, subject_id) VALUES (1, 2);
INSERT INTO student_subject (student_id, subject_id) VALUES (1, 3);
INSERT INTO student_subject (student_id, subject_id) VALUES (1, 4);
INSERT INTO student_subject (student_id, subject_id) VALUES (1, 5);
INSERT INTO student_subject (student_id, subject_id) VALUES (1, 6);


INSERT INTO student_subject (student_id, subject_id) VALUES (2, 1);
INSERT INTO student_subject (student_id, subject_id) VALUES (2, 2);
INSERT INTO student_subject (student_id, subject_id) VALUES (2, 3);
INSERT INTO student_subject (student_id, subject_id) VALUES (2, 4);
INSERT INTO student_subject (student_id, subject_id) VALUES (2, 6);

-- Insertar Calificaciones para los estudiantes

INSERT INTO grade (period_type, score, student_id, subject_id) VALUES ('PRIMERO', 7.0, 1, 1);
INSERT INTO grade (period_type, score, student_id, subject_id) VALUES ('SEGUNDO', 8.5, 1, 1);

INSERT INTO grade (period_type, score, student_id, subject_id) VALUES ('PRIMERO', 6.0, 1, 2);
INSERT INTO grade (period_type, score, student_id, subject_id) VALUES ('SEGUNDO', 7.5, 1, 2);

INSERT INTO grade (period_type, score, student_id, subject_id) VALUES ('PRIMERO', 7.5, 1, 3);
INSERT INTO grade (period_type, score, student_id, subject_id) VALUES ('SEGUNDO', 7.5, 1, 3);

INSERT INTO grade (period_type, score, student_id, subject_id) VALUES ('PRIMERO', 8.5, 1, 4);
INSERT INTO grade (period_type, score, student_id, subject_id) VALUES ('SEGUNDO', 7.5, 1, 4);

INSERT INTO grade (period_type, score, student_id, subject_id) VALUES ('PRIMERO', 10.0, 1, 5);
INSERT INTO grade (period_type, score, student_id, subject_id) VALUES ('SEGUNDO', 8.5, 1, 5);

INSERT INTO grade (period_type, score, student_id, subject_id) VALUES ('PRIMERO', 9.5, 1, 6);
INSERT INTO grade (period_type, score, student_id, subject_id) VALUES ('SEGUNDO', 5.5, 1, 6);


-- estudiante 2
INSERT INTO grade (period_type, score, student_id, subject_id) VALUES ('PRIMERO', 7.0, 2, 1);
INSERT INTO grade (period_type, score, student_id, subject_id) VALUES ('SEGUNDO', 8.5, 2, 1);

INSERT INTO grade (period_type, score, student_id, subject_id) VALUES ('PRIMERO', 6.0, 2, 2);
INSERT INTO grade (period_type, score, student_id, subject_id) VALUES ('SEGUNDO', 7.5, 2, 2);

INSERT INTO grade (period_type, score, student_id, subject_id) VALUES ('PRIMERO', 7.5, 2, 3);
INSERT INTO grade (period_type, score, student_id, subject_id) VALUES ('SEGUNDO', 7.5, 2, 3);

INSERT INTO grade (period_type, score, student_id, subject_id) VALUES ('PRIMERO', 8.5, 2, 4);
INSERT INTO grade (period_type, score, student_id, subject_id) VALUES ('SEGUNDO', 7.5, 2, 4);

INSERT INTO grade (period_type, score, student_id, subject_id) VALUES ('PRIMERO', 10.0, 2, 5);
INSERT INTO grade (period_type, score, student_id, subject_id) VALUES ('SEGUNDO', 8.5, 2, 5);

INSERT INTO grade (period_type, score, student_id, subject_id) VALUES ('PRIMERO', 9.5, 2, 6);
INSERT INTO grade (period_type, score, student_id, subject_id) VALUES ('SEGUNDO', 5.5, 2, 6);


-- Insertando datos de teacher (esta sujeto a cambios)

INSERT INTO teacher (name, surname, dni) VALUES ('Juan', 'Gonzalez', 123456789);
INSERT INTO teacher (name, surname, dni) VALUES ('Maria', 'Lopez', 987654321);
INSERT INTO teacher (name, surname, dni) VALUES ('Carlos', 'Martinez', 456789123);
INSERT INTO teacher (name, surname, dni) VALUES ('Laura', 'Rodriguez', 789123456);
INSERT INTO teacher (name, surname, dni) VALUES ('Pedro', 'Sanchez', 321654987);
INSERT INTO teacher (name, surname, dni) VALUES ('Ana', 'Perez', 654987321);
INSERT INTO teacher (name, surname, dni) VALUES ('Luis', 'Fernandez', 987321654);
INSERT INTO teacher (name, surname, dni) VALUES ('Sofia', 'Garcia', 234567891);
INSERT INTO teacher (name, surname, dni) VALUES ('Diego', 'Hernandez', 678912345);
INSERT INTO teacher (name, surname, dni) VALUES ('Elena', 'Diaz', 567891234);

-- Asignando materias a los profesores
INSERT INTO teacher_subject (teacher_id, subject_id) VALUES (1, 1), (1, 2), (1, 3);
