package com.nocountry.server_ed_platform.services;

import com.nocountry.server_ed_platform.dtos.TeacherDTO;
import com.nocountry.server_ed_platform.entities.Teacher;

import java.util.List;
import java.util.Optional;

public interface TeacherService {

    List<TeacherDTO> findAll();
    TeacherDTO createTeacher(TeacherRequest request);
    TeacherDTO findById(Long id);



}
