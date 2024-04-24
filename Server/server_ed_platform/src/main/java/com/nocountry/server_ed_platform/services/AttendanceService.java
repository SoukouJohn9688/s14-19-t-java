package com.nocountry.server_ed_platform.services;

import com.nocountry.server_ed_platform.dtos.AttendanceDTO;
import com.nocountry.server_ed_platform.dtos.GradeDTO;
import com.nocountry.server_ed_platform.dtos.Response.AttendanceResponseDTO;
import com.nocountry.server_ed_platform.exceptions.AttendanceNotFoundException;
import com.nocountry.server_ed_platform.exceptions.DuplicateDateException;
import com.nocountry.server_ed_platform.exceptions.FutureDateException;
import jakarta.transaction.Transactional;

import java.util.List;

public interface AttendanceService {

    List<AttendanceDTO> findAll();

    AttendanceResponseDTO findAttendanceByStudentId(Long studentId);

    AttendanceDTO saveAttendance(Long studentId, AttendanceDTO attendanceDTO) throws DuplicateDateException, FutureDateException;

    AttendanceDTO updateTypeOfAttendanceById(Long attendanceId, String type) throws AttendanceNotFoundException;

    AttendanceDTO AssignByStudentIdAndSubjectId(Long studentId, Long subjectId, AttendanceDTO attendanceDTO);


}
