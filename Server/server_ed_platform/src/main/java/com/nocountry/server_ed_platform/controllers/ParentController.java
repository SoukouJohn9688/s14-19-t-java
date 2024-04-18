package com.nocountry.server_ed_platform.controllers;


import com.nocountry.server_ed_platform.dtos.ParentDTO;
import com.nocountry.server_ed_platform.dtos.Response.ResponseGenericDTO;
import com.nocountry.server_ed_platform.dtos.StudentDTO;
import com.nocountry.server_ed_platform.exceptions.ParentNotFoundException;
import com.nocountry.server_ed_platform.services.ParentService;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/v1/parent")
@RequiredArgsConstructor
@Tag(name = "Parent")
public class ParentController {

    private final ParentService parentService;

    @Secured("PARENT")
    @GetMapping("/{parentId}")
    public ResponseEntity<ResponseGenericDTO<ParentDTO>> findById(@PathVariable Long parentId) throws ParentNotFoundException {
        return ResponseEntity.ok().body(new ResponseGenericDTO<>(
                true,
                "Padre encontrado",
                parentService.findById(parentId)
        ));
    }

    @Secured("PARENT")
    @GetMapping("/{parentId}/children")
    public ResponseEntity<ResponseGenericDTO<List<StudentDTO>>> findAllChildrenByParentId(@PathVariable Long parentId) throws ParentNotFoundException {
        return ResponseEntity.ok().body(new ResponseGenericDTO<>(
                true,
                "Hijos encontrados",
                parentService.findAllChildrenByParentId(parentId)
        ));
    }


}
