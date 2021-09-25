const mongoose = require('mongoose')
const Dog = mongoose.model("Dog")

// CRUD

function crearDog(req, res, next){
	var mascota = new Dog(req.body);
	mascota.save().then(mas =>{
		res.status(200).send(mas)
	}).catch(next)
}

function obtenerDog(req, res, next){
	if (req.params.id){
		Dog.findById(req.params.id)
		.then(mas => {res.send(mas)})
		.catch(next)
	} else {
		Dog.find()
		.then(dogs => {res.send(dogs)})
		.catch(next)
	}
}

function modificarDog(req, res, next){
	Dog.findById(req.params.id)
	.then(mascota => {
		if(!mascota){ return res.sendStatus(404); }
		let nuevaInfo = req.body
		if (typeof nuevaInfo.name !== "undefined")
			mascota.name = nuevaInfo.name
		if(typeof nuevaInfo.size !== "undefined")
			mascota.size = nuevaInfo.size
		if (typeof nuevaInfo.pictures !== 'undefined')
        	mascota.pictures = nuevaInfo.pictures
      	if (typeof nuevaInfo.description !== 'undefined')
        	mascota.description = nuevaInfo.description
      	if (typeof nuevaInfo.owner !== 'undefined')
        	mascota.owner = nuevaInfo.owner
      	if (typeof nuevaInfo.location !== 'undefined')
        	mascota.location = nuevaInfo.location
        mascota.save()
        .then(updated => {                                   
        res.status(201).json(updated.publicData())})
        .catch(next)
	})
	.catch(next)
}

function eliminarDog(req, res,next){
	Dog.findOneAndDelete({_id:req.params.id})
	.then(r => {res.status(200).send("La mascota se elimino.")})
	.catch(next)
}

function count(req, res, next) {
	var size = req.params.cat
	Dog.aggregate([
		{'$match' : {'size' : size}},
		{'$count' : 'total'}
	]).then(r => {
		res.status(200).send(r)
	})
	.catch(next)
}

module.exports = {
	crearDog,
	obtenerDog,
	modificarDog,
	eliminarDog,
	count
}
















