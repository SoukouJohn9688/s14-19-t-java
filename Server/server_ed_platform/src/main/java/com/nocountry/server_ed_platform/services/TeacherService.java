package com.nocountry.server_ed_platform.services;

import com.nocountry.server_ed_platform.dtos.GradeDTO;
import com.nocountry.server_ed_platform.dtos.Request.TeacherRegisterDTO;
import com.nocountry.server_ed_platform.dtos.Response.AssignGradeStudentResponseDTO;
import com.nocountry.server_ed_platform.dtos.TeacherDTO;
import com.nocountry.server_ed_platform.exceptions.TeacherNotFoundException;

import java.util.List;

public interface TeacherService {

    List<TeacherDTO> findAll();
    TeacherDTO createTeacher(TeacherRegisterDTO request);
    TeacherDTO findById(Long id);

    TeacherDTO updateTeacher(Long id, TeacherRegisterDTO request) throws TeacherNotFoundException;

    AssignGradeStudentResponseDTO AssignGradeByStudentIdSubjectId(Long studentId, Long subjectId, GradeDTO request);

    

}
