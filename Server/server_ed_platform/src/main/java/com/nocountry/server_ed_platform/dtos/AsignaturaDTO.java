package com.nocountry.server_ed_platform.dtos;

public class AsignaturaDTO {
    private Long id;
    private String nombre;
    private String descripcion;
    private String grado;

    public AsignaturaDTO(Long id, String nombre, String descripcion, String grado) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.grado = grado;
    }
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public String getDescripcion() {
        return descripcion;
    }
    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
    public String getGrado() {
        return grado;
    }
    public void setGrado(String grado) {
        this.grado = grado;
    }
}
