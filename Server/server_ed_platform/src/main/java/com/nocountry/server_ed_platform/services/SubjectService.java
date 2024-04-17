package com.nocountry.server_ed_platform.services;

import com.nocountry.server_ed_platform.dtos.Response.SubjectListResponseDTO;
import com.nocountry.server_ed_platform.dtos.Response.SubjectsByStudentResponseDTO;

public interface SubjectService {

    void AssignSubjectsByCurrentYear(Long studentId, int currentYear);

    SubjectListResponseDTO findSubjectsByStudentId(Long studentId);

}