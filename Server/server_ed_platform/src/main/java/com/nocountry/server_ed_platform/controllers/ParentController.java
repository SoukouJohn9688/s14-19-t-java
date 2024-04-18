package com.nocountry.server_ed_platform.controllers;


import com.nocountry.server_ed_platform.dtos.ParentDTO;
import com.nocountry.server_ed_platform.dtos.Response.ResponseGenericDTO;
import com.nocountry.server_ed_platform.services.ParentService;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/api/v1/parent")
@RequiredArgsConstructor
@Tag(name = "Parent")
public class ParentController {

    private final ParentService parentService;
    @GetMapping()
    public ResponseEntity<ResponseGenericDTO<List<ParentDTO>>> findAll(){
        return ResponseEntity.ok().body(
                new ResponseGenericDTO<>(
                        true,
                        "peticion correcta",
                        parentService.findAll()
                )
        );
    }
}
