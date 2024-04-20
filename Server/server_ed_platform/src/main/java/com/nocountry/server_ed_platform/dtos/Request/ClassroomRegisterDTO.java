package com.nocountry.server_ed_platform.dtos.Request;


import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ClassroomRegisterDTO {

    @NotNull
    @NotBlank
    private Long classroom_id;
}
