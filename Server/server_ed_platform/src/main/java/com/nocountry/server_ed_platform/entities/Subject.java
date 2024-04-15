package com.nocountry.server_ed_platform.entities;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "subject")
@Builder
@Entity
public class Subject {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long subjectId;
    private String name;
    @OneToMany(mappedBy = "subject")
    private List<Classroom> classroomList;
    @OneToMany(mappedBy = "subject")
    private List<Grade> gradeList;

    private Double grade;
    private String description;
    private Integer current_year; // Grado en el que se imparte la asignatura


    @ManyToMany
    @JoinTable(name = "teacher_subjecty",
       joinColumns = @JoinColumn(name = "teacher_id"),
        inverseJoinColumns = @JoinColumn(name = "subject_id",referencedColumnName = ""))
    private List<Teacher> teacherList; // Profesores que pueden impartir esta asignatura



}