package com.nocountry.server_ed_platform.entities;


import com.nocountry.server_ed_platform.enumarations.UserRole;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "teacher")
public class Teacher {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "teacher_id")
    private Long teacher_id;

    private String name;
    private String surname;

    private String email;
    //    @NotBlank(message = "The password cannot be blank.")
//    private String password;

    private LocalDate birthdate;

    private String course;

    private String password;

    @Enumerated(EnumType.STRING)
    private UserRole role;
}
