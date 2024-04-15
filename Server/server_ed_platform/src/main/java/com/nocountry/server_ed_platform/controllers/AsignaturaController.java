package com.nocountry.server_ed_platform.controllers;

import com.nocountry.server_ed_platform.dtos.AsignaturaDTO;
import com.nocountry.server_ed_platform.services.AsignaturaService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/asignaturas")
public class AsignaturaController {
    private final AsignaturaService asignaturaService;

    public AsignaturaController(AsignaturaService asignaturaService) {
        this.asignaturaService = asignaturaService;
    }

    @GetMapping
    public List<AsignaturaDTO> getAllAsignaturas() {
        return asignaturaService.getAllAsignaturas();
    }

    // otros endpoints...
}
