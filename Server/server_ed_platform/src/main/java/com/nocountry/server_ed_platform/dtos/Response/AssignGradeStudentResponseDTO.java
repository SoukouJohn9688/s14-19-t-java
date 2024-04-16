package com.nocountry.server_ed_platform.dtos.Response;

import com.nocountry.server_ed_platform.dtos.GradeDTO;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AssignGradeStudentResponseDTO {
    private Long studentId;
    private GradeDTO gradeDTO;
}
