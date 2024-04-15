package com.nocountry.server_ed_platform.entities;

import jakarta.persistence.*;

import java.util.List;


@Entity
public class Subject {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long subject_id;
    private String name;
    @OneToMany(mappedBy = "subject")
    private List<Classroom> classroomList;

    private String description;
    private String current_year; // Grado en el que se imparte la asignatura


    @ManyToMany
    @JoinTable(name = "teacher_subjecty",
       joinColumns = @JoinColumn(name = "teacher_id"),
        inverseJoinColumns = @JoinColumn(name = "subject_id",referencedColumnName = ""))
    private List<Teacher> teacherList; // Profesores que pueden impartir esta asignatura
    @OneToMany(mappedBy = "subject")
    private List<Classroom> cursos;
}