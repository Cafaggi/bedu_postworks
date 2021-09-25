const mongoose = require('mongoose')
const Dog = mongoose.model("Dog")

// CRUD

function createDog(req, res, next){
	var mascota = new Dog(req.body);
	mascota.save().then(mas =>{
		res.status(200).send(mas)
	}).catch(next)
}

function getDog(req, res, next){
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

function modifyDog(req, res, next){
	Dog.findById(req.params.id)
	.then(mascota => {
		if(!mascota){ return res.sendStatus(404); }
		let newInfo = req.body
		if (typeof newInfo.name !== "undefined")
			mascota.name = newInfo.name
		if(typeof newInfo.size !== "undefined")
			mascota.size = newInfo.size
		if (typeof newInfo.pictures !== 'undefined')
        	mascota.pictures = newInfo.pictures
      	if (typeof newInfo.description !== 'undefined')
        	mascota.description = newInfo.description
      	if (typeof newInfo.owner !== 'undefined')
        	mascota.owner = newInfo.owner
      	if (typeof newInfo.location !== 'undefined')
        	mascota.location = newInfo.location
        mascota.save()
        .then(updated => {                                   
        res.status(201).json(updated.publicData())})
        .catch(next)
	})
	.catch(next)
}

function deleteDog(req, res,next){
	Dog.findOneAndDelete({_id:req.params.id})
	.then(r => {res.status(200).send("La mascota se elimino.")})
	.catch(next)
}

module.exports = {
	createDog,
	getDog,
	modifyDog,
	deleteDog,
}
















