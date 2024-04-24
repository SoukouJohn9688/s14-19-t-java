package com.nocountry.server_ed_platform.services;

import com.nocountry.server_ed_platform.dtos.Request.StudentRegisterDTO;
import com.nocountry.server_ed_platform.dtos.StudentDTO;
import com.nocountry.server_ed_platform.exceptions.StudentNotFoundException;
import com.nocountry.server_ed_platform.exceptions.SubjectNotFoundException;

import java.util.List;

public interface StudentService {

    void AssignSubjectByCurrentYear(Long studentId, String currentYear) throws StudentNotFoundException, SubjectNotFoundException;

    StudentDTO findByStudentId(Long studentId)throws StudentNotFoundException;
    List<StudentDTO> findAll();
}
