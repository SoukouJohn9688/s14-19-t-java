package com.nocountry.server_ed_platform.controllers;

import com.nocountry.server_ed_platform.dtos.Response.ResponseGenericDTO;
import com.nocountry.server_ed_platform.dtos.TeacherDTO;
import com.nocountry.server_ed_platform.entities.Teacher;
import com.nocountry.server_ed_platform.services.TeacherService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping(value = "/api/v1/teacher")
@RequiredArgsConstructor
public class TeacherController {


    private static final Logger logger = LoggerFactory.getLogger(TeacherController.class);

    private final TeacherService teacherService;



    @PostMapping("/updateTeacher/{id}")
    public ResponseEntity<TeacherDTO> updateTeacher(@PathVariable Long id){

        try {
            TeacherDTO foundTeacher=teacherService.findById(id);
            logger.info("Updated teacher with ID: " + foundTeacher.getTeacher_id());
            return new ResponseEntity<>(foundTeacher, HttpStatus.OK);
        }catch(Exception ex){
            logger.error("Error creating Teacher: " + ex.getMessage() + " cause: " + ex.getCause());
            return new ResponseEntity<>(HttpStatus.NOT_MODIFIED);
        }
    }


    @GetMapping("/")
    public ResponseEntity<ResponseGenericDTO<List<TeacherDTO>>> findAll(){

        return ResponseEntity.ok().body(
                new ResponseGenericDTO<>(
                        true,
                        "peticion correcta",
                        teacherService.findAll()
                )
        );
    }




}