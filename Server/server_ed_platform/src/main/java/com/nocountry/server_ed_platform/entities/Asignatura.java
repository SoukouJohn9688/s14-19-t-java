package com.nocountry.server_ed_platform.entities;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.ManyToMany;
import lombok.Getter;
import org.springframework.data.annotation.Id;

import java.util.List;

@Entity
public class Asignatura {
    @Getter
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Getter
    private String nombre;
    @Getter
    private String descripcion;
    @Getter
    private String grado; // Grado en el que se imparte la asignatura
    @ManyToMany
    private List<Teacher> teachers; // Profesores que pueden impartir esta asignatura

    public void setId(Long id) {
        this.id = id;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
    public void setGrado(String grado) {
        this.grado = grado;
    }
    public List<Teacher> getteacher() {
        return teachers;
    }
    public void setTeachers(List<Teacher> teachers) {
        this.teachers = teachers;
    }
    // getters y setters
}

