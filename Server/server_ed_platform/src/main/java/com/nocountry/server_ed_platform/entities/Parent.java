package com.nocountry.server_ed_platform.entities;


import com.nocountry.server_ed_platform.enumarations.UserRole;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Table(name = "parent")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class Parent {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "teacher_id")
    private Long id;

    private String name;
    private String surname;
    private LocalDate birthdate;


    //Representa la materia impartida por el profesor
    private String subject;
    private String email;
    private String password;

    @Enumerated(EnumType.STRING)
    private UserRole role;

}
