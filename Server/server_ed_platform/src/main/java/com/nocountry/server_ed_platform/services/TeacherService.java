package com.nocountry.server_ed_platform.services;

import com.nocountry.server_ed_platform.dtos.Request.TeacherRegisterDTO;
import com.nocountry.server_ed_platform.dtos.TeacherDTO;
import java.util.List;

public interface TeacherService {

    List<TeacherDTO> findAll();
    TeacherDTO createTeacher(TeacherRegisterDTO request);
    TeacherDTO findById(Long id);

}
