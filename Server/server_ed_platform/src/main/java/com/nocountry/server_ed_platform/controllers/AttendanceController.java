package com.nocountry.server_ed_platform.controllers;

import com.nocountry.server_ed_platform.dtos.AttendanceDTO;
import com.nocountry.server_ed_platform.exceptions.AttendanceNotFoundException;
import com.nocountry.server_ed_platform.exceptions.DuplicateDateException;
import com.nocountry.server_ed_platform.exceptions.FutureDateException;
import io.swagger.v3.oas.annotations.Hidden;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.nocountry.server_ed_platform.dtos.Response.AttendanceResponseDTO;
import com.nocountry.server_ed_platform.dtos.Response.ResponseGenericDTO;
import com.nocountry.server_ed_platform.services.AttendanceService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/attendance")
@Tag(name = "Attendance")
@SecurityRequirement(name = "bearerAuth")
@RequiredArgsConstructor

public class AttendanceController {

    private final AttendanceService attendanceService;

    @PreAuthorize("hasRole('ROLE_STUDENT')")
    @GetMapping("/{studentId}")
    public ResponseEntity<AttendanceResponseDTO> getAttendanceByStudentId(@PathVariable Long studentId) {
        return ResponseEntity.ok().body(attendanceService.findAttendanceByStudentId(studentId));
    }

    @Hidden
    @PostMapping("/save/{studentId}")
    public ResponseEntity<ResponseGenericDTO<AttendanceDTO>> saveAttendance(
            @PathVariable Long studentId,
            @Valid @RequestBody AttendanceDTO attendanceDTO) throws DuplicateDateException, FutureDateException {

        return ResponseEntity.ok().body(new ResponseGenericDTO<>(
                true,
                "Asistencia guardada",
                attendanceService.saveAttendance(studentId, attendanceDTO)
        ));
    }

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

}