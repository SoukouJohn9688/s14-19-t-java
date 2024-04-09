package com.nocountry.server_ed_platform.controllers;


import com.nocountry.server_ed_platform.dtos.AttendanceDTO;
import com.nocountry.server_ed_platform.dtos.Response.ResponseGenericDTO;
import com.nocountry.server_ed_platform.services.AttendanceService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/v1/attendance")
@RequiredArgsConstructor
public class AttendanceController {

    private final AttendanceService attendanceService;

    @GetMapping("/")
    public ResponseEntity<ResponseGenericDTO<List<AttendanceDTO>>> findAll(){
        return ResponseEntity.ok().body(
                new ResponseGenericDTO<>(
                        true,
                        "peticion correcta",
                        attendanceService.findAll()
                )
        );
    }
    @GetMapping("/{attendance_id}")
    public ResponseEntity<ResponseGenericDTO<AttendanceDTO>> findById(@PathVariable Long attendance_id){
        return ResponseEntity.ok().body(
                new ResponseGenericDTO<>(
                        true,
                        "Asistencia obtenida correctamente",
                        attendanceService.findById(attendance_id)
                )
        );
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ResponseGenericDTO<Void>> deleteAttendanceById(@PathVariable Long attendance_id){
        attendanceService.deleteById(attendance_id);
        return ResponseEntity.ok().body(
                new ResponseGenericDTO<>(
                        true,
                        "Asistencia eliminada correctamente",
                        null
                )
        );
    }


}
