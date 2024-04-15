package com.nocountry.server_ed_platform.services;


import com.nocountry.server_ed_platform.dtos.AsignaturaDTO;
import com.nocountry.server_ed_platform.entities.Asignatura;
import com.nocountry.server_ed_platform.repositories.AsignaturaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AsignaturaService {

    private final AsignaturaRepository asignaturaRepository;

    @Autowired
    public AsignaturaService(AsignaturaRepository asignaturaRepository) {
        this.asignaturaRepository = asignaturaRepository;
    }
    public List<Asignatura> getAsignaturas() {
        return asignaturaRepository.findAll();
    }
    public Optional<Asignatura> getAsignatura(Long id) {
        return asignaturaRepository.findById(id);
    }
    public Asignatura addAsignatura(Asignatura asignatura) {
        return asignaturaRepository.save(asignatura);
    }
    public Asignatura updateAsignatura(Asignatura asignatura) {
        return asignaturaRepository.save(asignatura);
    }
    public void deleteAsignatura(Long id) {
        asignaturaRepository.deleteById(id);
    }

    public List<AsignaturaDTO> getAllAsignaturas() {
        return null;
    }
}
