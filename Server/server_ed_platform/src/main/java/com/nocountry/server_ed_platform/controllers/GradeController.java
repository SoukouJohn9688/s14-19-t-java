package com.nocountry.server_ed_platform.controllers;

import com.nocountry.server_ed_platform.dtos.Response.GradesResponseDTO;
import com.nocountry.server_ed_platform.services.GradeService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/grade")
@RequiredArgsConstructor
public class GradeController {
    private final GradeService gradeService;

    @GetMapping("/student/{studentId}/subject/{subjectId}")
    public GradesResponseDTO findGradesByStudentIdAndSubjectId(@PathVariable Long studentId, @PathVariable Long subjectId){
        return gradeService.findGradesByStudentIdAndSubjectId(studentId, subjectId);
    }


}
