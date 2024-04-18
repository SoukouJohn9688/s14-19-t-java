package com.nocountry.server_ed_platform.controllers;

import com.nocountry.server_ed_platform.dtos.Response.ResponseGenericDTO;
import com.nocountry.server_ed_platform.dtos.StudentDTO;
import com.nocountry.server_ed_platform.exceptions.StudentNotFoundException;
import com.nocountry.server_ed_platform.services.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/v1/student")
@RequiredArgsConstructor
public class StudentController {

    private final StudentService studentService;

    @Secured("STUDENT")
    @GetMapping("/{studentId}")
    public ResponseEntity<ResponseGenericDTO<StudentDTO>> findByStudentId(@PathVariable Long studentId) throws StudentNotFoundException {
        return ResponseEntity.ok().body(new ResponseGenericDTO<>(
                true,
                "Estudiante encontrado",
                studentService.findByStudentId(studentId)
        ));
    }

}
