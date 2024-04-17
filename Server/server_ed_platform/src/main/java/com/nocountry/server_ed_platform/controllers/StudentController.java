package com.nocountry.server_ed_platform.controllers;

import com.nocountry.server_ed_platform.dtos.StudentDTO;
import com.nocountry.server_ed_platform.services.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/v1/student")
@RequiredArgsConstructor
public class StudentController {

    private StudentService studentService;

    @GetMapping("/{studentId}")
    public StudentDTO findByStudentId(@PathVariable Long studentId) {
        return studentService.findByStudentId(studentId);
    }

}
