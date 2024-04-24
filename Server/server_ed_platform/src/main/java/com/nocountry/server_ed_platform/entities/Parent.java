package com.nocountry.server_ed_platform.entities;


import com.nocountry.server_ed_platform.enumarations.SexEnum;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "parent")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Parent {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String surname;
    private Long dni;
    private LocalDate birthdate;
    private String address;
    private String cellphone;
    @Enumerated(EnumType.STRING)
    private SexEnum sex;


    @OneToMany(mappedBy = "parent")
    private List<Student> students;

}
