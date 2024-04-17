package com.nocountry.server_ed_platform.services;

import com.nocountry.server_ed_platform.dtos.GradeDTO;
import com.nocountry.server_ed_platform.dtos.Response.GradesResponseDTO;

public interface GradeService {
    GradeDTO AssignByStudentIdAndSubjectId(Long studentId, Long subjectId, GradeDTO gradeDTO);
    GradesResponseDTO findGradesByStudentIdAndSubjectId(Long studentId, Long subjectId);
}
