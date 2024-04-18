package com.nocountry.server_ed_platform.controllers;

import com.nocountry.server_ed_platform.dtos.Response.GradesResponseDTO;
import com.nocountry.server_ed_platform.dtos.Response.ResponseGenericDTO;
import com.nocountry.server_ed_platform.services.GradeService;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/grade")
@RequiredArgsConstructor
@Tag(name = "Grade")
public class GradeController {
    private final GradeService gradeService;

    @PreAuthorize("hasRole('ROLE_STUDENT')")
    @GetMapping("/student/{studentId}/subject/{subjectId}")
    public ResponseEntity<ResponseGenericDTO<GradesResponseDTO>> findGradesByStudentIdAndSubjectId(@PathVariable Long studentId, @PathVariable Long subjectId) {
        return ResponseEntity.ok().body(new ResponseGenericDTO<>(
                true,
                "Notas encontradas",
                gradeService.findGradesByStudentIdAndSubjectId(studentId, subjectId)
        ));
    }


}
