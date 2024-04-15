package com.nocountry.server_ed_platform.entities;


import com.nocountry.server_ed_platform.enumarations.UserRole;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.security.core.userdetails.User;

import java.time.LocalDate;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "teacher")
@Builder
public class Teacher {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "teacher_id")
    private Long teacher_id;
    private String subject;

    protected String email;
    protected String password;
    protected String name;
    protected String surname;
    protected LocalDate birthdate;
    protected Long dni;




    @Enumerated(EnumType.STRING)
    private UserRole role;
}
