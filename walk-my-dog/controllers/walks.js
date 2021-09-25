const Walk = require('../models/Walk')

// CRUD

function crearWalk(req, res){
	var walk = new Walk(req.body);
	res.status(200).send(walk);
}

function obtenerWalk(req, res){
	var walk1 = new Walk(1, 2, '25/06/2021', 3, 2, 'Activa')
  	var walk2 = new Walk(2, 5, '5/12/2021', 4, 1, 'Rechazada')
  	res.send([walk1,walk2])
}

function modificarWalk(req, res){
	var walk = new Walk(req.params.id,2, '25/06/2021', 3, 2, 'Activa')
	var modificaciones = req.body
	walk = {...walk,...modificaciones }
	res.send(walk)
}

function eliminarWalk(req, res){
	res.status(200).send(`La walk ${req.params.id} se elimino`)
}

module.exports = {
	crearWalk,
	obtenerWalk,
	modificarWalk,
	eliminarWalk
}

