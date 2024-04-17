package com.nocountry.server_ed_platform.services.impl;

import com.nocountry.server_ed_platform.dtos.StudentDTO;
import com.nocountry.server_ed_platform.entities.Student;
import com.nocountry.server_ed_platform.entities.Subject;
import com.nocountry.server_ed_platform.repositories.StudentRepo;
import com.nocountry.server_ed_platform.repositories.SubjectRepo;
import com.nocountry.server_ed_platform.services.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class StudentServImpl implements StudentService {

    private final StudentRepo studentRepo;
    private final SubjectRepo subjectRepo;

    @Override
    public void AssignSubjectByCurrentYear(Long studentId, String currentYear) {
        // Por ahora solo agregamos una materia al estudiante en cualquier anio
        Optional<Student> studentDB = studentRepo.findById(studentId);
        if (studentDB.isEmpty()) {
            throw new RuntimeException("estudiante no encontrado");
        }
        Optional<Subject> subject1 = subjectRepo.findById(1L);
        if (subject1.isEmpty()) {
            throw new RuntimeException("Materia no existe");
        }


        List<Subject> subjects = new ArrayList<>();
        subjects.add(subject1.get());
        studentDB.get().setSubjects(subjects);
        studentRepo.save(studentDB.get());

        List<Student> students = new ArrayList<>();
        students.add(studentDB.get());
        subject1.get().setStudents(students);
        subjectRepo.save(subject1.get());

    }

    @Override
    public StudentDTO findByStudentId(Long studentId) {

        Optional<Student> studentDB = studentRepo.findById(studentId);

        if (studentDB.isEmpty()) {
            throw new RuntimeException("estudiante con id tanto no encontrado");
        }

        return StudentDTO.builder()
                .id(studentDB.get().getId())
                .name(studentDB.get().getName())
                .surname(studentDB.get().getSurname())
                .dni(studentDB.get().getDni())
                .birthdate(studentDB.get().getBirthdate())
                .sex(studentDB.get().getSex())
                .address(studentDB.get().getAddress())
                .cellphone(studentDB.get().getCellphone())
                .build();

    }
}
