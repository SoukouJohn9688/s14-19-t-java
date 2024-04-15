package com.nocountry.server_ed_platform.controllers;
import com.nocountry.server_ed_platform.dtos.ClassroomDTO;
import com.nocountry.server_ed_platform.dtos.Request.ClassroomRegisterDTO;
import com.nocountry.server_ed_platform.exceptions.ClassroomNotFoundException;
import com.nocountry.server_ed_platform.services.ClassroomService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
@RestController
@RequestMapping(value = "/api/v1/classroom")
@RequiredArgsConstructor
public class ClassroomController {



    private static final Logger logger = LoggerFactory.getLogger(ClassroomController.class);

   final ClassroomService classroomService;
   final ModelMapper modelMapper;

    @PostMapping("/update/{id}")
    public ResponseEntity<ClassroomDTO> updateClassroom(@PathVariable Long classroom_id, @RequestBody ClassroomRegisterDTO request) throws ClassroomNotFoundException {
        ClassroomDTO updatedClassroom = classroomService.updateClassroom(classroom_id, request);
        return new ResponseEntity<>(updatedClassroom, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ClassroomDTO> findById(@PathVariable Long classroom_id) {
        ClassroomDTO classroomDTO = classroomService.findById(classroom_id);
        if (classroomDTO != null) {
            return new ResponseEntity<>(classroomDTO, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}
