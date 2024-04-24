package com.nocountry.server_ed_platform.services.impl;

import com.nocountry.server_ed_platform.dtos.StudentDTO;
import com.nocountry.server_ed_platform.entities.Student;
import com.nocountry.server_ed_platform.entities.Subject;
import com.nocountry.server_ed_platform.exceptions.StudentNotFoundException;
import com.nocountry.server_ed_platform.exceptions.SubjectNotFoundException;
import com.nocountry.server_ed_platform.repositories.StudentRepo;
import com.nocountry.server_ed_platform.repositories.SubjectRepo;
import com.nocountry.server_ed_platform.services.StudentService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class StudentServImpl implements StudentService {

    private final StudentRepo studentRepo;
    private final SubjectRepo subjectRepo;
    private final ModelMapper modelMapper;
    @Override
    public void AssignSubjectByCurrentYear(Long studentId, String currentYear) throws StudentNotFoundException, SubjectNotFoundException {
        // Por ahora solo agregamos una materia al estudiante en cualquier anio

        Optional<Student> studentDB = studentRepo.findById(studentId);
        if (studentDB.isEmpty()) {

            throw new RuntimeException("estudiante no encontrado");
        }

        Optional<Subject> subject1 = subjectRepo.findById(1L);
        if (subject1.isEmpty()) {
            throw new RuntimeException("Materia no existe");
        }

        Optional<Subject> subject2 = subjectRepo.findById(2L);
        if (subject2.isEmpty()) {
            throw new RuntimeException("Materia no existe");
        }

        Optional<Subject> subject3 = subjectRepo.findById(3L);
        if (subject3.isEmpty()) {
            throw new RuntimeException("Materia no existe");
        }

        Optional<Subject> subject4 = subjectRepo.findById(4L);
        if (subject4.isEmpty()) {
            throw new RuntimeException("Materia no existe");
        }

        Optional<Subject> subject5 = subjectRepo.findById(5L);
        if (subject5.isEmpty()) {
            throw new RuntimeException("Materia no existe");
        }

        Optional<Subject> subject6 = subjectRepo.findById(6L);
        if (subject6.isEmpty()) {
            throw new RuntimeException("Materia no existe");
        }


        List<Student> listStudents=subject1.get().getStudents();
        List<Student> listStudents2=subject2.get().getStudents();
        List<Student> listStudents3=subject3.get().getStudents();
        List<Student> listStudents4=subject4.get().getStudents();
        List<Student> listStudents5=subject5.get().getStudents();
        List<Student> listStudents6=subject6.get().getStudents();


        List<Subject> subjects = new ArrayList<>();
        subjects.add(subject1.get());
        subjects.add(subject2.get());
        subjects.add(subject3.get());
        subjects.add(subject4.get());
        subjects.add(subject5.get());
        subjects.add(subject6.get());

        studentDB.get().setSubjects(subjects);
        studentRepo.save(studentDB.get());

//

        listStudents=subject1.get().getStudents();
        listStudents.add(studentDB.get());

        listStudents2=subject2.get().getStudents();
        listStudents2.add(studentDB.get());

        listStudents3=subject3.get().getStudents();
        listStudents3.add(studentDB.get());

        listStudents4=subject4.get().getStudents();
        listStudents4.add(studentDB.get());

        listStudents5=subject5.get().getStudents();
        listStudents5.add(studentDB.get());

        listStudents6=subject6.get().getStudents();
        listStudents6.add(studentDB.get());



        subject1.get().setStudents(listStudents);
        subject2.get().setStudents(listStudents2);
        subject3.get().setStudents(listStudents3);
        subject4.get().setStudents(listStudents4);
        subject5.get().setStudents(listStudents5);
        subject6.get().setStudents(listStudents6);
        subjectRepo.save(subject1.get());
    }



    @Override
    public StudentDTO findByStudentId(Long studentId)throws StudentNotFoundException {

        Optional<Student> studentDB = studentRepo.findById(studentId);

        if (studentDB.isEmpty()) {
            throw new StudentNotFoundException("estudiante con el id "+ studentId + "no encontrado");
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

    @Override
    public List<StudentDTO> findAll() {

        List<Student> studentsDB = studentRepo.findAll();
        List<StudentDTO> studentDTOS = new ArrayList<>();
        for (Student student : studentsDB){
            studentDTOS.add(modelMapper.map(student, StudentDTO.class));
        }
        return studentDTOS;
    }


}
