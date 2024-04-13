package com.nocountry.server_ed_platform.services;

import com.nocountry.server_ed_platform.dtos.Response.AttendanceResponseDTO;

public interface AttendanceService {

    AttendanceResponseDTO findByIdStudent(Long idStudent);

}
