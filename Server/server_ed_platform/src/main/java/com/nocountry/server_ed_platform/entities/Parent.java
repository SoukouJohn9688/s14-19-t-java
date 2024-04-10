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
    @Column(name = "parent_id")
    private Long id;
    protected String email;
    protected String password;
    protected String name;
    protected String surname;
    protected LocalDate birthdate;
    protected Long dni;
    @Enumerated(EnumType.STRING)
    private UserRole role;

}
