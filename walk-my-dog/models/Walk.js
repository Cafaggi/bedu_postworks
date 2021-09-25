// Walk.js
/** Clase que representa una walk de adopción */
class Walk {
  constructor(id, idDog, fechaDeCreacion, idUsuarioAnunciante, idUsuarioSolicitante, estado) {
    this.id = id;
    this.idDog = idDog;
    this.fechaDeCreacion = fechaDeCreacion;
    this.idUsuarioAnunciante = idUsuarioAnunciante;
    this.idUsuarioSolicitante = idUsuarioSolicitante;
    this.estado = estado;
  }
}

module.exports = Walk;
