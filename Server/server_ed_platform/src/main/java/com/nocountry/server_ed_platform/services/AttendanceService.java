package com.nocountry.server_ed_platform.services;

import com.nocountry.server_ed_platform.dtos.AttendanceDTO;
import com.nocountry.server_ed_platform.dtos.Response.AttendanceResponseDTO;
import com.nocountry.server_ed_platform.exceptions.AttendanceNotFoundException;
import com.nocountry.server_ed_platform.exceptions.DuplicateDateException;
import com.nocountry.server_ed_platform.exceptions.FutureDateException;
import com.nocountry.server_ed_platform.exceptions.StudentNotFoundException;

import java.time.LocalDate;
import java.util.List;

public interface AttendanceService {

    AttendanceResponseDTO findAttendanceByStudentId(Long studentId) throws StudentNotFoundException;

    AttendanceDTO saveAttendance(Long studentId, AttendanceDTO attendanceDTO) throws DuplicateDateException, FutureDateException, StudentNotFoundException;

    AttendanceDTO updateTypeOfAttendanceById(Long attendanceId, String type) throws AttendanceNotFoundException;

    AttendanceDTO AssignByStudentIdAndSubjectId(Long studentId, Long subjectId, AttendanceDTO attendanceDTO);

    AttendanceResponseDTO findByStudentAndDate(Long studentId, LocalDate starDate, LocalDate endDate) throws StudentNotFoundException;

    List<AttendanceDTO> findAll();

}
