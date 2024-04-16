package com.nocountry.server_ed_platform.controllers;


import com.nocountry.server_ed_platform.dtos.Response.ResponseGenericDTO;
import com.nocountry.server_ed_platform.dtos.SubjectDTO;
import com.nocountry.server_ed_platform.dtos.TeacherDTO;
import com.nocountry.server_ed_platform.services.SubjectService;
import com.nocountry.server_ed_platform.services.TeacherService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/v1/subject")
@RequiredArgsConstructor
public class SubjectController {

    private static final Logger logger = LoggerFactory.getLogger(SubjectController.class);

    @Autowired
    private final SubjectService subjectService;

//    @PostMapping("/updateSubject/{id}")
//    public ResponseEntity<SubjectDTO> updateSubject(@PathVariable Long id){
//
//        try {
//            SubjectDTO foundSubject=subjectService.findById(id);
//            logger.info("Updated subject with ID: " + foundSubject.getSubject_id());
//            return new ResponseEntity<>(foundSubject, HttpStatus.OK);
//        }catch(Exception ex){
//            logger.error("Error creating Subject: " + ex.getMessage() + " cause: " + ex.getCause());
//            return new ResponseEntity<>(HttpStatus.NOT_MODIFIED);
//        }
//    }


//    @GetMapping("/")
//    public ResponseEntity<ResponseGenericDTO<List<SubjectDTO>>> findAll(){
//
//        return ResponseEntity.ok().body(
//                new ResponseGenericDTO<>(
//                        true,
//                        "peticion correcta",
//                        subjectService.findAll()
//                )
//        );
//    }

}
