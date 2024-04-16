package com.nocountry.server_ed_platform.services.impl;

import com.nocountry.server_ed_platform.dtos.GradeDTO;
import com.nocountry.server_ed_platform.entities.Grade;
import com.nocountry.server_ed_platform.entities.Student;
import com.nocountry.server_ed_platform.entities.Subject;
import com.nocountry.server_ed_platform.enumarations.PeriodEnum;
import com.nocountry.server_ed_platform.repositories.GradeRepo;
import com.nocountry.server_ed_platform.repositories.StudentRepo;
import com.nocountry.server_ed_platform.repositories.SubjectRepo;
import com.nocountry.server_ed_platform.services.GradeService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class GradeServiceImpl implements GradeService {
    private final GradeRepo gradeRepo;
    private final StudentRepo studentRepo;
    private final SubjectRepo subjectRepo;

    @Override
    @Transactional
    public GradeDTO AssignByStudentIdAndSubjectId(Long studentId, Long subjectId, GradeDTO request) {
        Optional<Student> studentDB = studentRepo.findById(studentId);
        if (studentDB.isEmpty()) {
            throw new RuntimeException("estudiante no encontrado");
        }
        Optional<Subject> subjectDB = subjectRepo.findById(subjectId);
        if (subjectDB.isEmpty()) {
            throw new RuntimeException("materia no encontrada");
        }

        Grade response = gradeRepo.save(Grade.builder()
                .periodType(PeriodEnum.valueOf(request.getPeriodType().toUpperCase()))
                .score(request.getScore())
                .subject(subjectDB.get())
                .student(studentDB.get())
                .build());

        return GradeDTO.builder()
                .grade_id(response.getId())
                .periodType(response.getPeriodType().name())
                .score(response.getScore())
                .build();
    }
}
