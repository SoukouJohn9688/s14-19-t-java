package com.nocountry.server_ed_platform.controllers;

import com.nocountry.server_ed_platform.dtos.AttendanceDTO;
import com.nocountry.server_ed_platform.dtos.SubjectNameDTO;
import com.nocountry.server_ed_platform.dtos.Response.AssignAttendanceDTO;
import com.nocountry.server_ed_platform.dtos.Response.ResponseGenericDTO;
import com.nocountry.server_ed_platform.dtos.TeacherDTO;
import com.nocountry.server_ed_platform.exceptions.AttendanceNotFoundException;
import com.nocountry.server_ed_platform.exceptions.TeacherNotFoundException;
import com.nocountry.server_ed_platform.services.TeacherService;
import io.swagger.v3.oas.annotations.Hidden;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
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

    @Hidden
    @Secured("TEACHER")
    @PostMapping("/updateTeacher/{id}")
    public ResponseEntity<TeacherDTO> updateTeacher(@PathVariable Long id) {

        try {
            TeacherDTO foundTeacher = teacherService.findById(id);
            logger.info("Updated teacher with ID: " + foundTeacher.getTeacher_id());
            return new ResponseEntity<>(foundTeacher, HttpStatus.OK);
        } catch (Exception ex) {
            logger.error("Error creating PET: " + ex.getMessage() + " cause: " + ex.getCause());
            return new ResponseEntity<>(HttpStatus.NOT_MODIFIED);
        }
    }

    @Hidden
    @Secured("TEACHER")
    @GetMapping("/")
    public ResponseEntity<ResponseGenericDTO<List<TeacherDTO>>> findAll() throws TeacherNotFoundException {

        return ResponseEntity.ok().body(
                new ResponseGenericDTO<>(
                        true,
                        "peticion correcta",
                        teacherService.findAll()));
    }

    @Secured("TEACHER")
    @Hidden
    @PutMapping("/assign/{StudentId}/subject/{SubjectId}")
    public ResponseEntity<ResponseGenericDTO<AssignAttendanceDTO>> assignAttendanceByStudentIdAndSubjectId(
            @PathVariable Long studentId,
            @PathVariable Long subjectId,
            @RequestBody AttendanceDTO attendanceRequest) throws AttendanceNotFoundException {

        AssignAttendanceDTO assignedAttendance = teacherService.AssignAttendanceByStudentIdAndSubjectId(studentId,
                subjectId, attendanceRequest);
        ResponseGenericDTO<AssignAttendanceDTO> responseDTO = new ResponseGenericDTO<>(
                true,
                "Asistencia añadida",
                assignedAttendance);
        return ResponseEntity.ok().body(responseDTO);
    }

    @Secured("TEACHER")
    @GetMapping("{teacherId}/subjects")
    public ResponseEntity<ResponseGenericDTO<?>> getSubjectByTeacherId(@PathVariable Long teacherId)
            throws TeacherNotFoundException {
        return ResponseEntity.ok().body(new ResponseGenericDTO<>(
                true,
                "Peticion exitosa",
                teacherService.getSubjectByTeacherId(teacherId)));
    }

}