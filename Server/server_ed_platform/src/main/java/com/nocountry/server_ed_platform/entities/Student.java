package com.nocountry.server_ed_platform.entities;

import com.nocountry.server_ed_platform.enumarations.SexEnum;
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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String surname;
    private Long dni;
    private LocalDate birthdate;

    @Enumerated(EnumType.STRING)
    private SexEnum sex;

    private String address;
    private String cellphone;

    @ManyToOne
    @JoinColumn(name = "parent_id")
    private Parent parent;

    @OneToMany(mappedBy = "student")
    private List<Attendance> attendances;

    @ManyToOne
    @JoinColumn(name = "current_year_id")
    private CurrentYear currentYear;

    @ManyToMany
    @JoinTable(
            name = "student_subject",
            joinColumns = @JoinColumn(name = "student_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "subject_id", referencedColumnName = "id")
    )
    private List<Subject> subjects;

}
