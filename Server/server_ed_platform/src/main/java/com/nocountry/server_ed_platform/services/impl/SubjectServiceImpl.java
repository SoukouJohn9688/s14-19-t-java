package com.nocountry.server_ed_platform.services.impl;

import com.nocountry.server_ed_platform.dtos.GradeDTO;
import com.nocountry.server_ed_platform.dtos.Request.StudentRegisterDTO;
import com.nocountry.server_ed_platform.dtos.Response.SubjectListResponseDTO;
import com.nocountry.server_ed_platform.dtos.Response.SubjectsByStudentResponseDTO;
import com.nocountry.server_ed_platform.dtos.SubjectDTO;
import com.nocountry.server_ed_platform.dtos.SubjectGradeDTO;
import com.nocountry.server_ed_platform.dtos.SubjectNameDTO;
import com.nocountry.server_ed_platform.entities.Student;
import com.nocountry.server_ed_platform.entities.Subject;
import com.nocountry.server_ed_platform.exceptions.StudentNotFoundException;
import com.nocountry.server_ed_platform.exceptions.SubjectNotFoundException;
import com.nocountry.server_ed_platform.repositories.StudentRepo;
import com.nocountry.server_ed_platform.repositories.SubjectRepo;
import com.nocountry.server_ed_platform.services.SubjectService;
import com.nocountry.server_ed_platform.utils.ListSubject;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@RequiredArgsConstructor
public class SubjectServiceImpl implements SubjectService {

    private final StudentRepo studentRepo;
    private final SubjectRepo subjectRepo;

    @Override
    public void AssignSubjectsByCurrentYear(Long studentId, int currentYear) {

        Optional<Student> studentDB = studentRepo.findById(studentId);

        if (studentDB.isEmpty()) {
            throw new RuntimeException("Estudiante no encontrado");
        }

        ListSubject listSubject = new ListSubject();
        studentDB.get().setSubjects(listSubject.getSubjects());

        System.out.println("Materia del estudiante con id " + studentId);
        System.out.println(studentDB.get().toString());

    }

    @Override
    @Transactional //tener cuidado con esta anotacion?
    public SubjectListResponseDTO findSubjectsByStudentId(Long studentId) {

        Optional<Student> studentDB = studentRepo.findById(studentId);

        if (studentDB.isEmpty()) {
            throw new RuntimeException("Estudiante con id " + studentId + "no encontrado");
        }
        List<Subject> subjects = studentDB.get().getSubjects();
//        for (Subject subject : subjects){
//            System.out.println(subject.getName());
//        }
//

        for (Subject subject : studentDB.get().getSubjects()){
            System.out.println(subject.getName());
        }

        List<SubjectNameDTO> response = subjects.stream().map(subject -> {
            return SubjectNameDTO.builder()
                    .subjectId(subject.getId())
                    .name(subject.getName().name())
                    .build();
        }).toList();

        return SubjectListResponseDTO.builder()
                .studentId(studentId)
                .subjects(response)
                .build();

    }
}
