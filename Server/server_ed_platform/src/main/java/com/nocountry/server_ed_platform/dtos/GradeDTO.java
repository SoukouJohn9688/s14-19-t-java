package com.nocountry.server_ed_platform.dtos;

import com.nocountry.server_ed_platform.enumarations.PeriodEnum;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class GradeDTO {

    private Long grade_id;
    private String periodType;
    private Double score;
}
