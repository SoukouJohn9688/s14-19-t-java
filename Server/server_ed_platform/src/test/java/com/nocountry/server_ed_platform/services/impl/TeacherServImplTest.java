package com.nocountry.server_ed_platform.services.impl;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.nocountry.server_ed_platform.dtos.AttendanceDTO;
import com.nocountry.server_ed_platform.services.TeacherService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Date;
import java.util.HashMap;

import static org.junit.jupiter.api.Assertions.*;


@SpringBootTest
class TeacherServImplTest {

    @Autowired
    private TeacherService teacherService;


    @Test
    void assignAttendanceByStudentIdAndSubjectId() {

        AttendanceDTO attendanceDTO=AttendanceDTO.builder()
                .date("2024-04-04")
                .type("PRESENTE")
                .build();
        teacherService.AssignAttendanceByStudentIdAndSubjectId(2L,2L, attendanceDTO);


    }
}