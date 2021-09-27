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
	var lim = req.query.lim
	console.log (typeof lim)
	if (req.params.id){
		Dog.findById(req.params.id)
		.then(mas => {res.send(mas)})
		.catch(next)
	} else {
		if(typeof lim === "undefined"){
			Dog.find()
			.then(dogs => {res.send(dogs)})
			.catch(next)
		} else {
			Dog.aggregate([
				{'$limit' : parseInt(lim)}
			]).then(r => {
				res.status(200).send(r)
			})
			.catch(next)
		}
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

function filterFields(req, res, next){
	var filters = req.query
		Dog.aggregate([
			{'$match' : filters}
	]).then(r => {
		res.status(200).send(r)
	})
	.catch(next)
}

function convertIntObj(obj) {
	const res = {}
	for (const key in obj) {
	  res[key] = parseInt(obj[key]);;
	}
	return res;
  }

function activeFields(req, res, next){
	var projection = convertIntObj(req.query)
		Dog.aggregate([
			{'$project' : projection}
	]).then(r => {
		res.status(200).send(r)
	})
	.catch(next)
}

module.exports = {
	createDog,
	getDog,
	modifyDog,
	deleteDog,
	activeFields,
	filterFields
}
















