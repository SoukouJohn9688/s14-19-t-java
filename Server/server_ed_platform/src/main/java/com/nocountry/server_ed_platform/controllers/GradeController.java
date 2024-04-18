package com.nocountry.server_ed_platform.controllers;

import com.nocountry.server_ed_platform.dtos.Response.GradesResponseDTO;
import com.nocountry.server_ed_platform.dtos.Response.ResponseGenericDTO;
import com.nocountry.server_ed_platform.services.GradeService;
import jakarta.annotation.security.RolesAllowed;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/grade")
@RequiredArgsConstructor
public class GradeController {
    private final GradeService gradeService;

    @Secured({"STUDENT", "PARENT"})
    @GetMapping("/student/{studentId}/subject/{subjectId}")
    public ResponseEntity<ResponseGenericDTO<GradesResponseDTO>> findGradesByStudentIdAndSubjectId(@PathVariable Long studentId, @PathVariable Long subjectId) {
        return ResponseEntity.ok().body(new ResponseGenericDTO<>(
                true,
                "Notas encontradas",
                gradeService.findGradesByStudentIdAndSubjectId(studentId, subjectId)
        ));
    }

}
