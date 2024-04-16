package com.nocountry.server_ed_platform.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Set;

@Entity
@Table(name = "current_year")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CurrentYear {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int year;

    @OneToMany(mappedBy = "currentYear")
    List<Student> students;
}
