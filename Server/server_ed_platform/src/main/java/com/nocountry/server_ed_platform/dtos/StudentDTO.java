package com.nocountry.server_ed_platform.dtos;

import com.nocountry.server_ed_platform.entities.*;
import com.nocountry.server_ed_platform.enumarations.SexEnum;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class StudentDTO {

    private Long id;
    private String name;
    private String surname;
    private Long dni;
    private LocalDate birthdate;
    private SexEnum sex;
    private String address;
    private String cellphone;

}
