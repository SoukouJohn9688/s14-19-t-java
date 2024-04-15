package com.nocountry.server_ed_platform.entities;


import com.nocountry.server_ed_platform.enumarations.PeriodEnum;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table(name = "grade")
@Builder
public class Grade {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "grade_id")
    private Long gradeId;

    @Enumerated
    private PeriodEnum periodType;
    private Double score;
    @ManyToOne
    private Subject subject;




}
