package com.nocountry.server_ed_platform.dtos;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.*;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AttendanceDTO {

    private Long id;

    @NotNull(message = "El campo 'type' no puede ser nulo")
    @NotBlank(message = "El campo 'type' no puede estar en blanco")
    @Pattern(regexp = "presente|justificado|injustificado|no_computable",
            message = "El campo 'type' debe ser una de las opciones: presente, justificado, injustificado o no_computable")
    @Enumerated(EnumType.STRING)
    private String type;

    @NotNull(message = "El campo 'date' no puede ser nulo")
    @NotBlank(message = "El campo 'date' no puede estar en blanco")
    @Pattern(regexp = "\\d{4}-\\d{2}-\\d{2}", message = "El formato de la fecha debe ser YYYY-MM-DD")
    private String date;

}