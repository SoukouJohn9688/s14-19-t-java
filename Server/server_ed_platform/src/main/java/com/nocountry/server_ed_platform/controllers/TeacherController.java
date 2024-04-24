package com.nocountry.server_ed_platform.controllers;

import com.nocountry.server_ed_platform.dtos.AttendanceDTO;
import com.nocountry.server_ed_platform.dtos.Request.TeacherRegisterDTO;
import com.nocountry.server_ed_platform.dtos.Response.AssignAttendanceDTO;
import com.nocountry.server_ed_platform.dtos.Response.ResponseGenericDTO;
import com.nocountry.server_ed_platform.dtos.TeacherDTO;
import com.nocountry.server_ed_platform.exceptions.AttendanceNotFoundException;
import com.nocountry.server_ed_platform.exceptions.TeacherNotFoundException;
import com.nocountry.server_ed_platform.services.TeacherService;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping(value = "/api/v1/teacher")
@RequiredArgsConstructor
@Tag(name = "Teacher")
@SecurityRequirement(name = "bearerAuth")
public class TeacherController {


    private static final Logger logger = LoggerFactory.getLogger(TeacherController.class);

    private final TeacherService teacherService;



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



    @Secured("TEACHER")
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

    @Secured("TEACHER")
    @PostMapping("/assign/{StudentId}/subject/{SubjectId}")
    public ResponseEntity<ResponseGenericDTO<AssignAttendanceDTO>> assignAttendanceByStudentIdAndSubjectId(
            @PathVariable("StudentId") Long studentId,
            @PathVariable("SubjectId") Long subjectId,
            @RequestBody AttendanceDTO attendanceRequest) throws AttendanceNotFoundException {

        AssignAttendanceDTO assignedAttendance = teacherService.AssignAttendanceByStudentIdAndSubjectId(studentId,subjectId,attendanceRequest);
        ResponseGenericDTO<AssignAttendanceDTO> responseDTO = new ResponseGenericDTO<>(
                true,
                "Asistencia añadida",
                assignedAttendance
        );
        return ResponseEntity.ok().body(responseDTO);
    }

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



}