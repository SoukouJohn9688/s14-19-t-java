package com.nocountry.server_ed_platform.dtos.Response;

import java.util.List;
import com.nocountry.server_ed_platform.dtos.AttendanceDTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AttendanceResponseDTO {

    private Long idStudent;
    private List<AttendanceDTO> attendances;

}