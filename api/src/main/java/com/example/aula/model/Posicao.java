package com.example.aula.model;

public enum Posicao {
    GOLEIRO ("Goleiro") ,
    ZAGUEIRO ("Zagueiro"),
    LATERAL_ESQUERDO("Lateral Esquerdo"),
    LATERAL_DIREITO("Direito"),
    VOLANTE("Volante"),
    ALA_ESQUERDO("Ala Esquerdo"),
    ALA_DIREITO("Ala Direito"),
    MEIO_CAMPO_ESQUERDO("Meio Campo Esquerdo"),
    MEIO_CAMPO_DIREITO("Meio Campo Direito"),
    MEIA_CENTRAL("Meia central"),
    MEIA_LATERAL("Meia Lateral "),
    MEIA_ATACANTE_ESQUERDO("Atacante Esquerdo"),
    MEIA_ATACANTE_DIREITO("Atacante Direito"),
    PONTA("Ponta"),
    ATACANTE("Atacante");

    private String texto;

    Posicao(String texto) {
        this.texto = texto;
    }

    public String getTexto() {
        return texto;
    }
}
