package com.nocountry.server_ed_platform.dtos.Request;


import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class AttendanceRegisterDTO {
    @NotNull
    @NotBlank
    private boolean asistio;
    @NotNull
    @NotBlank
    private Date fecha;
}
