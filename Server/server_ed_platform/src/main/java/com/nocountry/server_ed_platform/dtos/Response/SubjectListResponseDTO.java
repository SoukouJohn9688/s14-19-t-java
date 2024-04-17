package com.nocountry.server_ed_platform.dtos.Response;

import com.nocountry.server_ed_platform.dtos.SubjectDTO;
import com.nocountry.server_ed_platform.dtos.SubjectNameDTO;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class SubjectListResponseDTO {
    private Long studentId;
    private List<SubjectNameDTO> subjects;
}
