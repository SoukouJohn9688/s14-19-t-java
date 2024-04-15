package com.nocountry.server_ed_platform.services;

import com.nocountry.server_ed_platform.dtos.AttendanceDTO;
import com.nocountry.server_ed_platform.dtos.Request.AttendanceRegisterDTO;

import java.util.List;

public interface AttendanceService {

    List<AttendanceDTO> findAll();
    AttendanceDTO createAttendance(AttendanceRegisterDTO request);
    AttendanceDTO findById(Long id);
    AttendanceDTO deleteById(Long id);


}
