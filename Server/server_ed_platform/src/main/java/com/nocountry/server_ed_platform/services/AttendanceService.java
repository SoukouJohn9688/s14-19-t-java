package com.nocountry.server_ed_platform.services;

import com.nocountry.server_ed_platform.dtos.AttendanceDTO;
import com.nocountry.server_ed_platform.dtos.Response.AttendanceResponseDTO;
import com.nocountry.server_ed_platform.exceptions.AttendanceNotFoundException;
import com.nocountry.server_ed_platform.exceptions.DuplicateDateException;
import com.nocountry.server_ed_platform.exceptions.FutureDateException;

public interface AttendanceService {

    AttendanceResponseDTO findAttendanceByStudentId(Long studentId);

    AttendanceDTO saveAttendance(Long studentId, AttendanceDTO attendanceDTO) throws DuplicateDateException, FutureDateException;

    AttendanceDTO updateTypeOfAttendanceById(Long attendanceId, String type) throws AttendanceNotFoundException;

}
