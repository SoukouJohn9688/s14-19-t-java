package com.nocountry.server_ed_platform.entities;

import com.nocountry.server_ed_platform.enumarations.SubjectEnum;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;


@Entity
@Table(name = "subject")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Subject {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    private SubjectEnum name;

    @ManyToMany(mappedBy = "subjects")
    private List<Student> students;
}