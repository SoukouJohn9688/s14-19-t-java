package com.nocountry.server_ed_platform.dtos;

import com.nocountry.server_ed_platform.enumarations.UserRole;
import jakarta.persistence.EnumType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


import java.time.LocalDate;


@Data
@AllArgsConstructor
@NoArgsConstructor

public class ParentDTO {

    private Long id;

    private String name;
    private String surname;
    private LocalDate birthdate;


    //Representa la materia impartida por el profesor
    private String subject;
    private String email;
    private String password;


}
