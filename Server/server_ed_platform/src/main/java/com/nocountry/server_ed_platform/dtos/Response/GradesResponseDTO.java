package com.nocountry.server_ed_platform.dtos.Response;

import com.nocountry.server_ed_platform.dtos.SubjectGradeDTO;
import com.nocountry.server_ed_platform.entities.Subject;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class GradesResponseDTO {
    private String currentYear;
    private SubjectGradeDTO subject;
}
