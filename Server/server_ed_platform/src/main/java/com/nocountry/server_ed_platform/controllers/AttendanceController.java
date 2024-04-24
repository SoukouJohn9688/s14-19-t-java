package com.nocountry.server_ed_platform.controllers;

import com.nocountry.server_ed_platform.dtos.AttendanceDTO;
import com.nocountry.server_ed_platform.exceptions.AttendanceNotFoundException;
import com.nocountry.server_ed_platform.exceptions.DuplicateDateException;
import com.nocountry.server_ed_platform.exceptions.FutureDateException;
import com.nocountry.server_ed_platform.exceptions.StudentNotFoundException;
import io.swagger.v3.oas.annotations.Hidden;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import com.nocountry.server_ed_platform.dtos.Response.AttendanceResponseDTO;
import com.nocountry.server_ed_platform.dtos.Response.ResponseGenericDTO;
import com.nocountry.server_ed_platform.services.AttendanceService;

import lombok.RequiredArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/v1/attendance")
@Tag(name = "Attendance")
@SecurityRequirement(name = "bearerAuth")
@RequiredArgsConstructor
public class AttendanceController {

    private final AttendanceService attendanceService;

    @Secured({"STUDENT", "PARENT","ADMIN", "TEACHER"})
    @GetMapping("/{studentId}")
    public ResponseEntity<ResponseGenericDTO<AttendanceResponseDTO>> getAttendanceByStudentId(@PathVariable Long studentId) throws StudentNotFoundException {
        return ResponseEntity.ok().body(new ResponseGenericDTO<>(
                true,
                "Peticion exitosa",
                attendanceService.findAttendanceByStudentId(studentId))
        );
    }

    @Secured({"STUDENT", "PARENT","ADMIN", "TEACHER"})
    @GetMapping("/")
    public ResponseEntity<ResponseGenericDTO<List<AttendanceDTO>>> findAll()throws AttendanceNotFoundException {
        return ResponseEntity.ok().body(
                new ResponseGenericDTO<>(
                        true,
                        "peticion correcta",
                        attendanceService.findAll()
                )
        );
    }

    @Hidden
    @Secured({"STUDENT", "PARENT","ADMIN", "TEACHER"})
    @PostMapping("/save/{studentId}")
    public ResponseEntity<ResponseGenericDTO<AttendanceDTO>> saveAttendance(
            @PathVariable Long studentId,
            @Valid @RequestBody AttendanceDTO attendanceDTO)
            throws DuplicateDateException,
            FutureDateException,
            StudentNotFoundException {

        return ResponseEntity.ok().body(new ResponseGenericDTO<>(
                true,
                "Asistencia guardada",
                attendanceService.saveAttendance(studentId, attendanceDTO)
        ));
    }
    @Secured({ "TEACHER","ADMIN"})
    @PutMapping("/update/{attendanceId}")
    public ResponseEntity<ResponseGenericDTO<AttendanceDTO>> updateTypeOfAttendanceById(
            @PathVariable Long attendanceId,
            @RequestParam String type) throws AttendanceNotFoundException {

        AttendanceDTO updatedAttendance = attendanceService.updateTypeOfAttendanceById(attendanceId, type);
        ResponseGenericDTO<AttendanceDTO> responseDTO = new ResponseGenericDTO<>(
                true,
                "Asistencia actualizada",
                updatedAttendance
        );
        return ResponseEntity.ok().body(responseDTO);
    }

    @Secured({"STUDENT", "PARENT","ADMIN", "TEACHER"})
    @GetMapping("/{studentId}/{startDate}/{endDate}")
    public ResponseEntity<ResponseGenericDTO<AttendanceResponseDTO>> getAttendanceByStudentAndDate(
            @PathVariable Long studentId,
            @PathVariable LocalDate startDate,
            @PathVariable LocalDate endDate) throws StudentNotFoundException {
        return ResponseEntity.ok().body(new ResponseGenericDTO<>(
                true,
                "Peticion exitosa",
                attendanceService.findByStudentAndDate(studentId, startDate, endDate)
        ));
    }


}