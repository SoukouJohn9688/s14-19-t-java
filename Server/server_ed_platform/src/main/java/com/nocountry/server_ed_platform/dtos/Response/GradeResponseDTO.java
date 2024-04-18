package com.nocountry.server_ed_platform.dtos.Response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class GradeResponseDTO {

    private Long id;
    private String periodType;
    private Double score;

}
