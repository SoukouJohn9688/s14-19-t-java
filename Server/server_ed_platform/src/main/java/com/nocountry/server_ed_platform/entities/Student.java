package com.nocountry.server_ed_platform.entities;

import com.nocountry.server_ed_platform.enumarations.UserRole;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Table(name = "student")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "student_id")
    private Long id;

    private String name;
    private String surname;
    private LocalDate birthdate;
    private Long dni;

    private String sex;
    //Representa el grado, curso o nivel en que se encuentra el estudiente
    //Por ejemplo, cuarto de primaria, o segundo de bachillerato
    private String classroom;

    // Provisional, atributo de notas (dependiendo de si almacenamos la nota en la tabla de materias o alumno)
    private Double grade;
    private String email;
    private String password;

    @Enumerated(EnumType.STRING)
    private UserRole role;
}
