package com.nocountry.server_ed_platform.entities;

import com.nocountry.server_ed_platform.enumarations.UserRole;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.List;

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

    //Representa el grado, curso o nivel en que se encuentra el estudiente
    //Por ejemplo, cuarto de primaria, o segundo de bachillerato
    private String grade;
    private String email;
    private String password;

    private Integer current_year;


    @ManyToOne()
    @JoinColumn(name = "classroom_id")
    private Classroom classroom;
    @Enumerated(EnumType.STRING)
    private UserRole role;

    @ManyToOne
    @JoinColumn(name = "parent_id")
    private Parent parent;


    @OneToMany(mappedBy = "student")
    private List<Attendance> attendances;


}
