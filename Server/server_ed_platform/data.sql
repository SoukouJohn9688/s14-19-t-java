-- Agregar las cuentas de usuario
-- Estudiante
INSERT INTO user_entity (email, password, role, username) VALUES ('student1@email.com', '$2a$10$0TI9Lx.S0737Fqvs/DbtbODt9wYbmyKd1fpNULGWYq8tJOzkVeh0S', 'STUDENT','pedro_student');

-- Insertar materias adicionales
INSERT INTO subject (name) VALUES ('MATEMATICAS');
INSERT INTO subject (name) VALUES ('LENGUAS');
INSERT INTO subject (name) VALUES ('CIENCIAS');
INSERT INTO subject (name) VALUES ('EDUCACION_FISICA');
INSERT INTO subject (name) VALUES ('SISTEMAS');
INSERT INTO subject (name) VALUES ('FISICA');

-- Insertar padres adicionales
INSERT INTO parent (name, surname, dni) VALUES ('John', 'Doe', 123456789);

-- Insertar 
INSERT INTO current_year (year) VALUES ('PRIMER_AÑO');
INSERT INTO current_year (year) VALUES ('SEGUNDO_AÑO');
INSERT INTO current_year (year) VALUES ('TERCER_AÑO');

-- Insertar estudiantes asociados a los padres con IDs del 1 al 5
-- Dos estudiantes para John Doe (ID de padre: 1)
INSERT INTO student (name, surname, dni, current_year_id, parent_id, address, birthdate, cellphone, sex) VALUES ('Pedro', 'Doe', 893478578, 1, 1, 'Dirección de Pedro', '1998-05-15', '1234567890', 'MASCULINO');

INSERT INTO student (name, surname, dni, current_year_id, parent_id, address, birthdate, cellphone, sex) VALUES ('Miguel', 'Doe', 839457894, 3, 1, 'Dirección de Miguel', '2000-10-20', '0987654321', 'MASCULINO');

-- Insertar asistencias para el estudiante con ID 1
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-04-16', 1);
INSERT INTO attendance (type, date, student_id) VALUES ('JUSTIFICADO', '2024-04-15', 1);
INSERT INTO attendance (type, date, student_id) VALUES ('INJUSTIFICADO', '2024-04-14', 1);
INSERT INTO attendance (type, date, student_id) VALUES ('NO_COMPUTABLE', '2024-04-13', 1);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-04-12', 1);

-- Insertar asistencias para el estudiante con ID 2
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-04-16', 2);
INSERT INTO attendance (type, date, student_id) VALUES ('JUSTIFICADO', '2024-04-15', 2);
INSERT INTO attendance (type, date, student_id) VALUES ('INJUSTIFICADO', '2024-04-14', 2);
INSERT INTO attendance (type, date, student_id) VALUES ('NO_COMPUTABLE', '2024-04-13', 2);
INSERT INTO attendance (type, date, student_id) VALUES ('PRESENTE', '2024-04-12', 2);

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

