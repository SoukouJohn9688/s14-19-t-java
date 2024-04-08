package com.nocountry.server_ed_platform.services;

import com.nocountry.server_ed_platform.dtos.Request.StudentRegisterDTO;
import com.nocountry.server_ed_platform.dtos.StudentDTO;

import java.util.List;

public interface StudentService {

    List<StudentDTO> findAll();
    StudentDTO findById(Long id);
    StudentDTO createStudent(StudentRegisterDTO request);
}
