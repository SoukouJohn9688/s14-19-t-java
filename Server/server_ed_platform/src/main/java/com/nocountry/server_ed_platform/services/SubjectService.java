package com.nocountry.server_ed_platform.services;

import com.nocountry.server_ed_platform.dtos.Response.SubjectListResponseDTO;
import com.nocountry.server_ed_platform.dtos.Response.SubjectsByStudentResponseDTO;
import com.nocountry.server_ed_platform.dtos.SubjectDTO;
import com.nocountry.server_ed_platform.dtos.TeacherDTO;
import com.nocountry.server_ed_platform.exceptions.StudentNotFoundException;
import com.nocountry.server_ed_platform.exceptions.SubjectNotFoundException;
import com.nocountry.server_ed_platform.exceptions.TeacherNotFoundException;

import java.util.List;

public interface SubjectService {

    List<SubjectDTO> findAll()throws SubjectNotFoundException;

    void AssignSubjectsByCurrentYear(Long studentId, int currentYear) throws SubjectNotFoundException;

    SubjectListResponseDTO findSubjectsByStudentId(Long studentId) throws StudentNotFoundException;

}