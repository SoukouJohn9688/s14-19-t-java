package com.nocountry.server_ed_platform.dtos;

import com.nocountry.server_ed_platform.entities.Student;
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
public class ParentDTO {

    private Long id;
    private String name;
    private String surname;
    private Long dni;
    private LocalDate birthdate;
    private String address;
    private String cellphone;
    private String sex;

    private List<StudentDTO> childrenList; // Lista de estudiantes a cargo del padre.


}
