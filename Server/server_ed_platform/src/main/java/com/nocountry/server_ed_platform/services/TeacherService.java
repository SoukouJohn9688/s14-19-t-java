package com.nocountry.server_ed_platform.services;

import com.nocountry.server_ed_platform.dtos.Request.TeacherRegisterDTO;
import com.nocountry.server_ed_platform.dtos.TeacherDTO;
import com.nocountry.server_ed_platform.entities.Classroom;
import com.nocountry.server_ed_platform.entities.Student;
import com.nocountry.server_ed_platform.exceptions.TeacherNotFoundException;

import java.util.List;

public interface TeacherService {

    List<TeacherDTO> findAll();
    TeacherDTO createTeacher(TeacherRegisterDTO request);
    TeacherDTO findById(Long id);

    TeacherDTO updateTeacher(Long id, TeacherRegisterDTO request) throws TeacherNotFoundException;

    List<Student> getListStudentOfSubjecByClassroom(Long idClassroom, Long idTeacher);
}
