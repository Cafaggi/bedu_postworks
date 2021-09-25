// Walk.js
/** Clase que representa una walk de adopción */
class Walk {
  constructor(id, idDog, fechaDeCreacion, idUserAnunciante, idUserSolicitante, estado) {
    this.id = id;
    this.idDog = idDog;
    this.fechaDeCreacion = fechaDeCreacion;
    this.idUserAnunciante = idUserAnunciante;
    this.idUserSolicitante = idUserSolicitante;
    this.estado = estado;
  }
}

module.exports = Walk;
