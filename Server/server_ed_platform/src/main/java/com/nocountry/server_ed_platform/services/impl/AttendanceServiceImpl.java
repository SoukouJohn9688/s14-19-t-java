package com.nocountry.server_ed_platform.services.impl;

import com.nocountry.server_ed_platform.dtos.AttendanceDTO;
import com.nocountry.server_ed_platform.dtos.Response.AttendanceResponseDTO;
import com.nocountry.server_ed_platform.entities.Attendance;
import com.nocountry.server_ed_platform.repositories.AttendanceRepo;
import com.nocountry.server_ed_platform.services.AttendanceService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AttendanceServiceImpl implements AttendanceService {

    private final AttendanceRepo attendanceRepo;
    private final ModelMapper modelMapper;

    @Override
    public AttendanceResponseDTO findByIdStudent(Long idStudent) {
        System.out.println("**************************************************************************************");
        System.out.println("**************************************************************************************");
        System.out.println("**************************************************************************************");
        System.out.println("**************************************************************************************");
        System.out.println("iniciando service");
        List<Attendance> attendancesDB = attendanceRepo.findAttendancesByStudentId(idStudent);
        System.out.println("data -> " + attendancesDB.toString());
        AttendanceResponseDTO response = AttendanceResponseDTO.builder()
                .idStudent(idStudent)
                .attendances(attendancesDB.stream().map(attendance -> modelMapper.map(attendance, AttendanceDTO.class))
                        .collect(Collectors.toList()))
                .build();
                System.out.println(response.toString());
        return response;
    }
}