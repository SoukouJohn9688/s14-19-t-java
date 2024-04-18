package com.nocountry.server_ed_platform.services.impl;

import com.nocountry.server_ed_platform.dtos.Response.SubjectListResponseDTO;
import com.nocountry.server_ed_platform.dtos.SubjectNameDTO;
import com.nocountry.server_ed_platform.entities.Student;
import com.nocountry.server_ed_platform.entities.Subject;
import com.nocountry.server_ed_platform.exceptions.StudentNotFoundException;
import com.nocountry.server_ed_platform.exceptions.SubjectNotFoundException;
import com.nocountry.server_ed_platform.repositories.StudentRepo;
import com.nocountry.server_ed_platform.services.SubjectService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@RequiredArgsConstructor
public class SubjectServiceImpl implements SubjectService {

    private final StudentRepo studentRepo;

    @Override
    public void AssignSubjectsByCurrentYear(Long studentId, int currentYear) throws SubjectNotFoundException {
    }

    @Override
    @Transactional
    public SubjectListResponseDTO findSubjectsByStudentId(Long studentId) throws StudentNotFoundException {

        Optional<Student> studentDB = studentRepo.findById(studentId);

        if (studentDB.isEmpty()) {
            throw new StudentNotFoundException("Estudiante con id " + studentId + "no encontrado");
        }
        List<Subject> subjects = studentDB.get().getSubjects();

        for (Subject subject : studentDB.get().getSubjects()) {
            System.out.println(subject.getName());
        }

        List<SubjectNameDTO> response = subjects.stream().map(subject -> SubjectNameDTO.builder()
                .subjectId(subject.getId())
                .name(subject.getName().name())
                .build()).toList();

        return SubjectListResponseDTO.builder()
                .studentId(studentId)
                .subjects(response)
                .build();

    }
}
