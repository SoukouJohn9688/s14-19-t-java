package com.nocountry.server_ed_platform.services;

import com.nocountry.server_ed_platform.dtos.Request.StudentRegisterDTO;
import com.nocountry.server_ed_platform.dtos.StudentDTO;
import com.nocountry.server_ed_platform.exceptions.StudentNotFoundException;

import java.util.List;

public interface StudentService {

    List<StudentDTO> findAll();
    StudentDTO findById(Long id) throws StudentNotFoundException;
    StudentDTO createStudent(StudentRegisterDTO request);
    StudentDTO updateStudent(Long id, StudentRegisterDTO request) throws StudentNotFoundException;
}
