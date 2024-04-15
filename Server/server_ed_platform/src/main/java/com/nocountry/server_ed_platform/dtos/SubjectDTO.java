package com.nocountry.server_ed_platform.dtos;

import jakarta.persistence.criteria.CriteriaBuilder;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class SubjectDTO {
    private Long subject_id;
    private String name;

    private Double grade;
    private Integer current_year;
}
