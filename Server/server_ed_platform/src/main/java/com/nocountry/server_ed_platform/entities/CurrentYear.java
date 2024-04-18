package com.nocountry.server_ed_platform.entities;

import com.nocountry.server_ed_platform.enumarations.CurrentYearEnum;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

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

    @Enumerated(EnumType.STRING)
    private CurrentYearEnum year;

    @OneToMany(mappedBy = "currentYear")
    private List<Student> students;

    @ManyToMany
    @JoinTable(
            name = "year_subject",
            joinColumns = @JoinColumn(name = "current_year_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "subject_id", referencedColumnName = "id")
    )
    private List<Subject> subjects;

}
