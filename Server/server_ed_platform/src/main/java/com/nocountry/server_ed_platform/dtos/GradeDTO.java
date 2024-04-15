package com.nocountry.server_ed_platform.dtos;

import com.nocountry.server_ed_platform.enumarations.PeriodEnum;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor

public class GradeDTO {

    private Long grade_id;
    private PeriodEnum periodType;
    private Double score;
}
