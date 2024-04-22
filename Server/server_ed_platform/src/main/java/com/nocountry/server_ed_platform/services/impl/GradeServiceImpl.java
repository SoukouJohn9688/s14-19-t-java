package com.nocountry.server_ed_platform.services.impl;

import com.nocountry.server_ed_platform.dtos.GradeDTO;
import com.nocountry.server_ed_platform.dtos.Response.GradesResponseDTO;
import com.nocountry.server_ed_platform.dtos.SubjectGradeDTO;
import com.nocountry.server_ed_platform.entities.CurrentYear;
import com.nocountry.server_ed_platform.entities.Grade;
import com.nocountry.server_ed_platform.entities.Student;
import com.nocountry.server_ed_platform.entities.Subject;
import com.nocountry.server_ed_platform.enumarations.PeriodEnum;
import com.nocountry.server_ed_platform.exceptions.CurrentYearNotFoundException;
import com.nocountry.server_ed_platform.exceptions.StudentNotFoundException;
import com.nocountry.server_ed_platform.exceptions.SubjectNotFoundException;
import com.nocountry.server_ed_platform.repositories.CurrentYearRepo;
import com.nocountry.server_ed_platform.repositories.GradeRepo;
import com.nocountry.server_ed_platform.repositories.StudentRepo;
import com.nocountry.server_ed_platform.repositories.SubjectRepo;
import com.nocountry.server_ed_platform.services.GradeService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class GradeServiceImpl implements GradeService {
    private final GradeRepo gradeRepo;
    private final StudentRepo studentRepo;
    private final SubjectRepo subjectRepo;
    private final CurrentYearRepo currentYearRepo;

    @Override
    @Transactional
    public GradeDTO AssignByStudentIdAndSubjectId(Long studentId, Long subjectId, GradeDTO request)
            throws StudentNotFoundException, SubjectNotFoundException {
        Optional<Student> studentDB = studentRepo.findById(studentId);
        if (studentDB.isEmpty()) {
            throw new StudentNotFoundException("estudiante no encontrado");
        }
        Optional<Subject> subjectDB = subjectRepo.findById(subjectId);
        if (subjectDB.isEmpty()) {
            throw new SubjectNotFoundException("materia no encontrada");
        }

        Grade response = gradeRepo.save(Grade.builder()
                .periodType(PeriodEnum.valueOf(request.getPeriodType().toUpperCase()))
                .score(request.getScore())
                .subject(subjectDB.get())
                .student(studentDB.get())
                .build());

        return GradeDTO.builder()
                .id(response.getId())
                .periodType(response.getPeriodType().name())
                .score(response.getScore())
                .build();
    }

    @Override
    public GradesResponseDTO findGradesByStudentIdAndSubjectId(Long studentId, Long subjectId)
            throws StudentNotFoundException, SubjectNotFoundException, CurrentYearNotFoundException {
        Optional<Student> studentDB = studentRepo.findById(studentId);
        if (studentDB.isEmpty()) {
            throw new StudentNotFoundException("estudiante no encontrado");
        }
        Optional<Subject> subjectDB = subjectRepo.findById(subjectId);
        if (subjectDB.isEmpty()) {
            throw new SubjectNotFoundException("materia no encontrada");
        }
        Optional<CurrentYear> currentYearDB = currentYearRepo.findById(subjectDB.get().getId());

        if (currentYearDB.isEmpty()) {
            throw new CurrentYearNotFoundException("anio actual no encontrado");
        }

        List<Grade> grades = gradeRepo.findGradesByStudentIdAndSubjectId(studentId, subjectId);

        List<GradeDTO> gradeDTOS = grades.stream().map(grade -> GradeDTO.builder()
                .id(grade.getId())
                .periodType(grade.getPeriodType().name())
                .score(grade.getScore())
                .build()).toList();

        SubjectGradeDTO subjectGradeDTO = SubjectGradeDTO.builder()
                .subjectId(subjectId)
                .name(subjectDB.get().getName().name())
                .grades(gradeDTOS)
                .build();

        return GradesResponseDTO.builder()
                .currentYear(currentYearDB.get().getYear().name())
                .subject(subjectGradeDTO)
                .build();
    }
}
