package com.nocountry.server_ed_platform.controllers;

import com.nocountry.server_ed_platform.dtos.Response.ResponseGenericDTO;
import com.nocountry.server_ed_platform.dtos.StudentDTO;
import com.nocountry.server_ed_platform.dtos.TeacherDTO;
import com.nocountry.server_ed_platform.services.StudentService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import java.util.List;

@RestController
@RequestMapping(value = "/api/v1/student")
@RequiredArgsConstructor
public class StudentController {


    private static final Logger logger = LoggerFactory.getLogger(StudentController.class);
    private final StudentService studentService;

    @GetMapping()
    public ResponseEntity<ResponseGenericDTO<List<StudentDTO>>> findAll(){
        return ResponseEntity.ok().body(
                new ResponseGenericDTO<>(
                        true,
                        "peticion correcta",
                        studentService.findAll()
                )
        );
    }

    @PostMapping("/updateStudent/{id}")
    public ResponseEntity<StudentDTO> updateStudent(@PathVariable Long id){

        try {
            StudentDTO foundStudent=studentService.findById(id);
            logger.info("Updated student with ID: " + foundStudent.getStudent_id());
            return new ResponseEntity<>(foundStudent, HttpStatus.OK);
        }catch(Exception ex){
            logger.error("Error creating Student: " + ex.getMessage() + " cause: " + ex.getCause());
            return new ResponseEntity<>(HttpStatus.NOT_MODIFIED);
        }
    }


}
