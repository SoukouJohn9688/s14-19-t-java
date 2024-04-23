package com.nocountry.server_ed_platform.controllers;


import com.nocountry.server_ed_platform.dtos.AttendanceDTO;
import com.nocountry.server_ed_platform.dtos.Request.TeacherRegisterDTO;
import com.nocountry.server_ed_platform.dtos.Response.AssignAttendanceDTO;
import com.nocountry.server_ed_platform.dtos.Response.ResponseGenericDTO;
import com.nocountry.server_ed_platform.dtos.SubjectGradeDTO;
import com.nocountry.server_ed_platform.dtos.TeacherDTO;
import com.nocountry.server_ed_platform.entities.Subject;
import com.nocountry.server_ed_platform.entities.Teacher;
import com.nocountry.server_ed_platform.exceptions.AttendanceNotFoundException;
import com.nocountry.server_ed_platform.exceptions.TeacherNotFoundException;
import com.nocountry.server_ed_platform.services.AttendanceService;
import com.nocountry.server_ed_platform.services.SubjectService;
import com.nocountry.server_ed_platform.services.TeacherService;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/admin")
@Tag(name = "Admin")
@SecurityRequirement(name = "bearerAuth")
@RequiredArgsConstructor
public class AdminController {



    private static final Logger logger = LoggerFactory.getLogger(TeacherController.class);

    private final TeacherService teacherService;



    @Secured({"ADMIN"})
    @PostMapping("/create")
    public ResponseEntity<ResponseGenericDTO<TeacherDTO>> createTeacher(@RequestBody TeacherRegisterDTO request) {

        TeacherDTO createdTeacher = teacherService.createTeacher(request);

        ResponseGenericDTO<TeacherDTO> responseDTO = new ResponseGenericDTO<>(
                true,
                "Profesor creado con éxito",
                createdTeacher
        );


        return ResponseEntity.status(HttpStatus.CREATED).body(responseDTO);
    }

    @Secured({"ADMIN"})
    @DeleteMapping("/{id}")
    public ResponseEntity<ResponseGenericDTO<Void>> deleteTeacherById(@PathVariable Long teacher_id) throws TeacherNotFoundException {
        teacherService.deleteById(teacher_id);
        return ResponseEntity.ok().body(
                new ResponseGenericDTO<>(
                        true,
                        "Profesor eliminado correctamente",
                        null
                )
        );
    }

    @Secured({"ADMIN"})
    @PostMapping("/updateTeacher/{id}")
    public ResponseEntity<TeacherDTO> updateTeacher(@PathVariable Long id, @RequestBody TeacherRegisterDTO teacherDTO) throws TeacherNotFoundException, Exception {

        try {
            TeacherDTO updatedTeacher = teacherService.updateTeacher(id, teacherDTO);
            logger.info("El profesor fue actualizado con el id: " + updatedTeacher.getTeacher_id());
            return new ResponseEntity<>(updatedTeacher, HttpStatus.OK);
        } catch (TeacherNotFoundException excep) {
            logger.error("El Teacher con el ID " + id + " no fue encontrado", excep);
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception excep) {
            logger.error("Error al editar el teacher: " + excep.getMessage(), excep);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }



    @Secured("ADMIN")
    @GetMapping("/")
    public ResponseEntity<ResponseGenericDTO<List<TeacherDTO>>> findAll() throws TeacherNotFoundException {

        return ResponseEntity.ok().body(
                new ResponseGenericDTO<>(
                        true,
                        "peticion correcta",
                        teacherService.findAll()
                )
        );
    }

    @PostMapping("/assignSubject/{subjectId}/{teacherId}/{currentYear}")
    public ResponseEntity<?> assignSubjectToTeacher(@RequestParam Long subjectId,
                                                    @RequestParam Long teacherId,
                                                    @RequestParam String currentYear,
                                                    @RequestBody TeacherDTO teacherDTO) {
        try {
            teacherService.assignSubject(subjectId, teacherId, currentYear, teacherDTO);
            logger.info("La materia fue asignada al profesor con id : " + teacherId);
            return new ResponseEntity<>(HttpStatus.OK);

        } catch (RuntimeException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }
}








