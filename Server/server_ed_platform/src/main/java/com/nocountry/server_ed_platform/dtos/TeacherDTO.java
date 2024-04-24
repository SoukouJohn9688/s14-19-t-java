package com.nocountry.server_ed_platform.dtos;

import jdk.jshell.Snippet;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;



@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class TeacherDTO {

    private Long teacher_id;

    private String name;
    private Long dni;
    private String surname;

    private String email;

    private LocalDate birthdate;

    private String subject;


}
