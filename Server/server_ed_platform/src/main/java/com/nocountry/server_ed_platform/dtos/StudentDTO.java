package com.nocountry.server_ed_platform.dtos;

import com.nocountry.server_ed_platform.entities.Teacher;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

import java.time.LocalDate;

public class StudentDTO {
    private Long student_id;
    private String name;
    private String surname;
    private LocalDate birthdate;
    private String sex;
    private String classroom;
    private String grade;
    private String email;

    @ManyToOne()
    @JoinColumn(name = "teacher_id")
    private Teacher teacher;
}
