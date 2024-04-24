package com.nocountry.server_ed_platform.controllers;

import com.nocountry.server_ed_platform.dtos.Response.ResponseGenericDTO;
import com.nocountry.server_ed_platform.dtos.Response.SubjectListResponseDTO;
import com.nocountry.server_ed_platform.dtos.SubjectDTO;
import com.nocountry.server_ed_platform.dtos.TeacherDTO;
import com.nocountry.server_ed_platform.exceptions.StudentNotFoundException;
import com.nocountry.server_ed_platform.exceptions.SubjectNotFoundException;
import com.nocountry.server_ed_platform.exceptions.TeacherNotFoundException;
import com.nocountry.server_ed_platform.services.SubjectService;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/subject")
@RequiredArgsConstructor
@Tag(name = "Subject")
@SecurityRequirement(name = "bearerAuth")
public class SubjectController {

    private final SubjectService subjectService;

    @Secured({"STUDENT", "PARENT","TEACHER"})
    @GetMapping("/{studentId}")
    public ResponseEntity<ResponseGenericDTO<SubjectListResponseDTO>> findSubjectsByStudentId(@PathVariable Long studentId) throws StudentNotFoundException {
        return ResponseEntity.ok().body(new ResponseGenericDTO<>(
                true,
                "Materias encontradas",
                subjectService.findSubjectsByStudentId(studentId)
        ));
    }

    @Secured({"STUDENT", "PARENT","TEACHER"})
    @GetMapping("/")
    public ResponseEntity<ResponseGenericDTO<List<SubjectDTO>>> findAll() throws SubjectNotFoundException {

        return ResponseEntity.ok().body(
                new ResponseGenericDTO<>(
                        true,
                        "peticion correcta",
                        subjectService.findAll()
                )
        );
    }

}
