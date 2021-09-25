const mongoose = require('mongoose')
const Dog = mongoose.model("Dog")

// CRUD

function createDog(req, res, next){
	var dog = new Dog(req.body);
	dog.save().then(mas =>{
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
	.then(dog => {
		if(!dog){ return res.sendStatus(404); }
		let newInfo = req.body
		if (typeof newInfo.name !== "undefined")
			dog.name = newInfo.name
		if(typeof newInfo.size !== "undefined")
			dog.size = newInfo.size
		if (typeof newInfo.pictures !== 'undefined')
        	dog.pictures = newInfo.pictures
      	if (typeof newInfo.description !== 'undefined')
        	dog.description = newInfo.description
      	if (typeof newInfo.owner !== 'undefined')
        	dog.owner = newInfo.owner
      	if (typeof newInfo.location !== 'undefined')
        	dog.location = newInfo.location
        dog.save()
        .then(updated => {                                   
        res.status(201).json(updated.publicData())})
        .catch(next)
	})
	.catch(next)
}

function deleteDog(req, res,next){
	Dog.findOneAndDelete({_id:req.params.id})
	.then(r => {res.status(200).send("the dog has been deleted")})
	.catch(next)
}

module.exports = {
	createDog,
	getDog,
	modifyDog,
	deleteDog,
}
















