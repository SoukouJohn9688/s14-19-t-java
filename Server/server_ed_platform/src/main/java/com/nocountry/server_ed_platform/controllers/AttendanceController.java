package com.nocountry.server_ed_platform.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nocountry.server_ed_platform.dtos.Response.AttendanceResponseDTO;
import com.nocountry.server_ed_platform.dtos.Response.ResponseGenericDTO;
import com.nocountry.server_ed_platform.services.AttendanceService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/attendance")
public class AttendanceController {

        private AttendanceService attendanceService;

        @GetMapping("/{idStudent}")
        public ResponseEntity<ResponseGenericDTO<AttendanceResponseDTO>> findByIdStudent(
                        @PathVariable(name = "idStudent") Long idStudent) {
                System.out.println("iniciando service");
                System.out.println("Peticion");
                return ResponseEntity.ok().body(
                                new ResponseGenericDTO<>(
                                                true,
                                                "peticion realizada con exito",
                                                attendanceService.findByIdStudent(idStudent)));
        }

}