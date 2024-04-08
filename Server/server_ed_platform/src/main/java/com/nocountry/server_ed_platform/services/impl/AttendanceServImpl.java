package com.nocountry.server_ed_platform.services.impl;
import com.nocountry.server_ed_platform.dtos.AttendanceDTO;
import com.nocountry.server_ed_platform.dtos.Request.AttendanceRegister;
import com.nocountry.server_ed_platform.entities.Attendance;
import com.nocountry.server_ed_platform.repositories.AttendanceRepo;
import com.nocountry.server_ed_platform.services.AttendanceService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AttendanceServImpl implements AttendanceService {

    private final AttendanceRepo attendanceRepo;
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
    public AttendanceDTO createAttendance(AttendanceRegister request) {
        Attendance attendance = Attendance.builder()
                .fecha(request.getFecha())
                .asistio(request.isAsistio())
                .build();
        Attendance attendancedb = attendanceRepo.save(attendance);
        return modelMapper.map(attendancedb, AttendanceDTO.class);
    }

    @Override
    public AttendanceDTO findById(Long id) {
        Attendance attendance = attendanceRepo.findById(id).orElse(null);
        if (attendance != null) {
            return modelMapper.map(attendance, AttendanceDTO.class);
        }
        return null;
    }

    @Override
    public AttendanceDTO deleteById(Long id) {
        Attendance attendance = attendanceRepo.findById(id).orElse(null);
        if (attendance != null) {
            attendanceRepo.deleteById(id);
            return modelMapper.map(attendance, AttendanceDTO.class);
        }
        return null;
    }
}


