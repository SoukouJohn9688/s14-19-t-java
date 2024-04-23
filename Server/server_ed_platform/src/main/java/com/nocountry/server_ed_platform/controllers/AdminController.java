package com.nocountry.server_ed_platform.controllers;


import com.nocountry.server_ed_platform.dtos.ParentDTO;
import com.nocountry.server_ed_platform.dtos.RegisterDTO;
import com.nocountry.server_ed_platform.dtos.Response.AuthResponseDTO;
import com.nocountry.server_ed_platform.exceptions.EmailExistsException;
import com.nocountry.server_ed_platform.exceptions.ParentNotFoundException;
import com.nocountry.server_ed_platform.exceptions.StudentNotFoundException;
import com.nocountry.server_ed_platform.services.ParentService;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
@RestController
@RequestMapping("/api/v1/admin")
@Tag(name = "Admin")
@SecurityRequirement(name = "bearerAuth")
@RequiredArgsConstructor
public class AdminController {

    private static final Logger logger = LoggerFactory.getLogger(AdminController.class);

    private final ParentService parentService;


    @Secured("ADMIN")
    @PostMapping("/updateParentInfo/{studentId}/{parentId}")
    private ResponseEntity<ParentDTO> updateParentDetails(@PathVariable("studentId") Long studentId,
                                                          @PathVariable("parentId") Long parentId,
                                                          @RequestBody ParentDTO parentRequest) throws StudentNotFoundException, ParentNotFoundException {


        try {
            ParentDTO parent = parentService.updateParentById(studentId, parentId, parentRequest);
            logger.info("Updated parent and student info");
            return new ResponseEntity<>(parent, HttpStatus.OK);

        } catch (StudentNotFoundException err) {
            logger.error("Error updating Teacher: " + err.getMessage() + " cause: " + err.getCause());
            return new ResponseEntity<>(HttpStatus.NOT_MODIFIED);

        }


    }



    @Secured("ADMIN")
    @PostMapping("/addParent/{studentId}/{parentId}")
    private ResponseEntity<AuthResponseDTO> addParentById(@PathVariable("studentId") Long StudentId,
                                                          @PathVariable("parentId") Long ParentId,
                                                          @RequestBody RegisterDTO request) throws EmailExistsException {
        try {
            AuthResponseDTO response = parentService.addParentById(StudentId, ParentId, request);
            return new ResponseEntity<AuthResponseDTO>(response, HttpStatus.OK);

        } catch (EmailExistsException err) {
            logger.error("Error creating a Parent: " + err.getMessage() + " cause" + err.getCause());
            return new ResponseEntity<>(HttpStatus.NOT_MODIFIED);
        }

    }



}
