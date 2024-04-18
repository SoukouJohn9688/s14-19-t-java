package com.nocountry.server_ed_platform.dtos;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class SubjectDTO {

    private Long id;
    private String name;
    private Double grade;
    private Integer current_year;

}