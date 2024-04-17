package com.nocountry.server_ed_platform.dtos;

import com.nocountry.server_ed_platform.enumarations.UserRole;
import jakarta.persistence.EnumType;


import java.time.LocalDate;

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
