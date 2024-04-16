package com.nocountry.server_ed_platform.services;

import com.nocountry.server_ed_platform.dtos.GradeDTO;

public interface GradeService {
    GradeDTO AssignByStudentIdAndSubjectId(Long studentId, Long subjectId, GradeDTO gradeDTO);
}
