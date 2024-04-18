package com.nocountry.server_ed_platform.dtos;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ParentDTO {

    private Long id;
    private String name;
    private String surname;
    private Long dni;
    private LocalDate birthdate;
    private String address;
    private String cellphone;
    private String sex;

}
