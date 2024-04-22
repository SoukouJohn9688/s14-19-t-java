package com.nocountry.server_ed_platform.services;

import com.nocountry.server_ed_platform.dtos.GradeDTO;
import com.nocountry.server_ed_platform.dtos.Response.GradesResponseDTO;
import com.nocountry.server_ed_platform.exceptions.CurrentYearNotFoundException;
import com.nocountry.server_ed_platform.exceptions.StudentNotFoundException;
import com.nocountry.server_ed_platform.exceptions.SubjectNotFoundException;

public interface GradeService {
    GradeDTO AssignByStudentIdAndSubjectId(Long studentId, Long subjectId, GradeDTO gradeDTO) throws StudentNotFoundException, SubjectNotFoundException;
    GradesResponseDTO findGradesByStudentIdAndSubjectId(Long studentId, Long subjectId) throws StudentNotFoundException, SubjectNotFoundException, CurrentYearNotFoundException;
}
