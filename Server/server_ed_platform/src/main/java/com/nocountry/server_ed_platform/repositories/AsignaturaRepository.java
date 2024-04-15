package com.nocountry.server_ed_platform.repositories;


import com.nocountry.server_ed_platform.entities.Asignatura;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AsignaturaRepository extends JpaRepository<Asignatura, Long> {
}
