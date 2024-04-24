package com.nocountry.server_ed_platform.services.impl;

import com.nocountry.server_ed_platform.dtos.AttendanceDTO;
import com.nocountry.server_ed_platform.dtos.GradeDTO;
import com.nocountry.server_ed_platform.dtos.Response.AttendanceResponseDTO;
import com.nocountry.server_ed_platform.entities.Attendance;
import com.nocountry.server_ed_platform.entities.Grade;
import com.nocountry.server_ed_platform.entities.Student;
import com.nocountry.server_ed_platform.entities.Subject;
import com.nocountry.server_ed_platform.enumarations.AttendanceTypeEnum;
import com.nocountry.server_ed_platform.enumarations.PeriodEnum;
import com.nocountry.server_ed_platform.exceptions.AttendanceNotFoundException;
import com.nocountry.server_ed_platform.exceptions.DuplicateDateException;
import com.nocountry.server_ed_platform.exceptions.FutureDateException;
import com.nocountry.server_ed_platform.repositories.AttendanceRepo;
import com.nocountry.server_ed_platform.repositories.StudentRepo;
import com.nocountry.server_ed_platform.repositories.SubjectRepo;
import com.nocountry.server_ed_platform.services.AttendanceService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AttendanceServiceImpl implements AttendanceService {

    private final AttendanceRepo attendanceRepo;
    private final StudentRepo studentRepo;
    private final SubjectRepo subjectRepo;
    private final ModelMapper modelMapper;



    @Override
    public List<AttendanceDTO> findAll() {
        List<Attendance> attendanceDB = attendanceRepo.findAll();
        List<AttendanceDTO> attendanceDTOS = new ArrayList<>();
        for(Attendance attendance : attendanceDB){
            attendanceDTOS.add(modelMapper.map(attendance, AttendanceDTO.class));
        }
        return attendanceDTOS;
    }

    @Override
    public AttendanceResponseDTO findAttendanceByStudentId(Long studentId) {

        Optional<Student> studentDB = studentRepo.findById(studentId);

        if (studentDB.isEmpty()) {
            throw new RuntimeException("Estudiante con id " + studentId + "no encontrado");
        }

        List<Attendance> attendancesDB = attendanceRepo.findAttendanceByStudentId(studentId);

        List<AttendanceDTO> attendanceDTOs = attendancesDB.stream()
                .map(attendance -> AttendanceDTO.builder()
                        .id(attendance.getId())
                        .type(attendance.getType().name())
                        .date(attendance.getDate().toString())
                        .build()).collect(Collectors.toList());

        return AttendanceResponseDTO.builder()
                .idStudent(studentId)
                .attendances(attendanceDTOs)
                .build();
    }

    @Override
    public AttendanceDTO saveAttendance(Long studentId, AttendanceDTO attendanceDTO)
            throws DuplicateDateException, FutureDateException {

        Optional<Student> studentDB = studentRepo.findById(studentId);

        if (studentDB.isEmpty()) {
            throw new RuntimeException("Estudiante no encontrado");
        }

        if (studentDB.get().getAttendances().stream().anyMatch(
                attendance -> attendance.getDate().isEqual(LocalDate.parse(attendanceDTO.getDate())))) {
            throw new DuplicateDateException(String.format("La fecha %s ya existe", attendanceDTO.getDate()));
        }

        if (!LocalDate.now().isEqual(LocalDate.parse(attendanceDTO.getDate()))) {
            throw new FutureDateException("No puedes agregar fechas que no sean el actual");
        }

        Attendance attendanceDB = attendanceRepo.save(
                Attendance.builder()
                        .type(AttendanceTypeEnum.valueOf(attendanceDTO.getType().toUpperCase()))
                        .date(LocalDate.parse(attendanceDTO.getDate()))
                        .student(studentDB.get())
                        .build());

        return AttendanceDTO.builder()
                .id(attendanceDB.getId())
                .type(attendanceDB.getType().name())
                .date(attendanceDTO.getDate())
                .build();
    }

    @Override
    @Transactional
    public AttendanceDTO updateTypeOfAttendanceById(Long attendanceId, String type)
            throws AttendanceNotFoundException {

        Optional<Attendance> attendanceDB = attendanceRepo.findById(attendanceId);
        if (attendanceDB.isEmpty()) {
            throw new AttendanceNotFoundException(String.format("Asistencia con id %s no encontrada", attendanceId));
        }

        attendanceDB.get().setType(AttendanceTypeEnum.valueOf(type.toUpperCase()));

        Attendance response = attendanceRepo.save(attendanceDB.get());

        return AttendanceDTO.builder()
                .id(response.getId())
                .type(response.getType().name())
                .date(response.getDate().toString())
                .build();
    }

    @Override
    @Transactional
    public AttendanceDTO AssignByStudentIdAndSubjectId(Long studentId, Long subjectId, AttendanceDTO request) {
        Optional<Student> studentDB = studentRepo.findById(studentId);
        if (studentDB.isEmpty()) {
            throw new RuntimeException("estudiante no encontrado");
        }
        Optional<Subject> subjectDB = subjectRepo.findById(subjectId);
        if (subjectDB.isEmpty()) {
            throw new RuntimeException("materia no encontrada");
        }

        Attendance response = attendanceRepo.save(Attendance.builder()
                .type(AttendanceTypeEnum.valueOf(request.getType().toUpperCase()))
                .date(LocalDate.parse(request.getDate()))
                .student(studentDB.get())
                .build());

        return AttendanceDTO.builder()
                .id(response.getId())
                .type(response.getType().name())
                .date(response.getDate().toString())
                .build();
    }






}