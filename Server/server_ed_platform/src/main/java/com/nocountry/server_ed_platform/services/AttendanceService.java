package com.nocountry.server_ed_platform.services;

import com.nocountry.server_ed_platform.dtos.AttendanceDTO;
import com.nocountry.server_ed_platform.dtos.Request.AttendanceRegister;
import com.nocountry.server_ed_platform.dtos.Request.TeacherRegisterDTO;
import com.nocountry.server_ed_platform.dtos.TeacherDTO;

import java.util.List;

public interface AttendanceService {

    List<AttendanceDTO> findAll();
    AttendanceDTO createAttendance(AttendanceRegister request);
    AttendanceDTO findById(Long id);
    AttendanceDTO deleteById(Long id);


}
