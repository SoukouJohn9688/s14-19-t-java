package com.nocountry.server_ed_platform.entities;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Classroom {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "classroom_id")
    private Long classroom_id;

    private String name;
    @ManyToOne
    private Subject subject;
    @ManyToMany
    @JoinTable(
            name = "classroom_teacher",
            joinColumns = @JoinColumn(name = "classroom_id"),
            inverseJoinColumns = @JoinColumn(name = "teacher_id"))
    private List<Teacher> teacherList;
    @OneToMany(mappedBy = "classroom")
    private List<Student> students;



}
