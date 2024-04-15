package com.nocountry.server_ed_platform.services;

import com.nocountry.server_ed_platform.dtos.Request.StudentRegisterDTO;
import com.nocountry.server_ed_platform.dtos.StudentDTO;
import com.nocountry.server_ed_platform.dtos.SubjectDTO;
import com.nocountry.server_ed_platform.exceptions.StudentNotFoundException;
import com.nocountry.server_ed_platform.exceptions.SubjectNotFoundException;

import java.util.List;

public interface SubjectService {


    List<SubjectDTO> findAll();
    SubjectDTO findById(Long id) throws SubjectNotFoundException;
    SubjectDTO createStudent(StudentRegisterDTO request);
    SubjectDTO updateStudent(Long id, StudentRegisterDTO request) throws StudentNotFoundException;
}
