package com.nocountry.server_ed_platform.services;

import com.nocountry.server_ed_platform.dtos.Response.SubjectListResponseDTO;
import com.nocountry.server_ed_platform.dtos.Response.SubjectsByStudentResponseDTO;
import com.nocountry.server_ed_platform.exceptions.StudentNotFoundException;
import com.nocountry.server_ed_platform.exceptions.SubjectNotFoundException;

public interface SubjectService {

    void AssignSubjectsByCurrentYear(Long studentId, int currentYear) throws SubjectNotFoundException;

    SubjectListResponseDTO findSubjectsByStudentId(Long studentId) throws StudentNotFoundException;

}