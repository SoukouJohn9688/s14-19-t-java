package com.nocountry.server_ed_platform.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class AttendanceDTO {

    private boolean asistio;
    private Date fecha;
}
