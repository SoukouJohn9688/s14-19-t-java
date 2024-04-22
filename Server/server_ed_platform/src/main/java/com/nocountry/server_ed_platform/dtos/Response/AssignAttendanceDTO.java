package com.nocountry.server_ed_platform.dtos.Response;

import com.nocountry.server_ed_platform.dtos.AttendanceDTO;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AssignAttendanceDTO {

    private Long StudentId;
    private AttendanceDTO attendanceDTO;
}
