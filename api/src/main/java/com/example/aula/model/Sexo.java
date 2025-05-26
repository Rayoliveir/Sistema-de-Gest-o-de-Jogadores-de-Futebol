package com.example.aula.model;

public enum Sexo {
    FEMININO("Feminino"),
    MASCULINO("Masculino"),
    OUTRO("Outro");

    private String texto;

    Sexo(String texto) {
        this.texto = texto;
    }

    public String getTexto() {
        return texto;
    }
}
