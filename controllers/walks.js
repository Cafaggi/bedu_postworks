const mongoose = require('mongoose')
const Walk = mongoose.model("Walk")

// CRUD

function createWalk(req, res, next){
	var walk = new Walk(req.body);
	walk.save().then(mas =>{
		res.status(200).send(mas)
	}).catch(next)
}

function getWalk(req, res, next){
	if (req.params.id){
		Walk.findById(req.params.id)
		.then(mas => {res.send(mas)})
		.catch(next)
	} else {
		Walk.find()
		.then(walks => {res.send(walks)})
		.catch(next)
	}
}

function modifyWalk(req, res, next){
	Walk.findById(req.params.id)
	.then(walk => {
		if(!walk){ return res.sendStatus(404); }
		let newInfo = req.body
		if (typeof newInfo.idDog !== "undefined")
			walk.idDog = newInfo.idDog
		if(typeof newInfo.playtime !== "undefined")
			walk.playtime = newInfo.playtime
		if (typeof newInfo.datetime !== 'undefined')
        	walk.datetime = newInfo.datetime
		if (typeof newInfo.idWalker !== 'undefined')
        	walk.idWalker = newInfo.idWalker
        walk.save()
        .then(updated => {                                   
        res.status(201).json(updated.publicData())})
        .catch(next)
	})
	.catch(next)
}

function deleteWalk(req, res, next){
	Walk.findOneAndDelete({_id:req.params.id})
	.then(r => {res.status(200).send("this walk has been deleted")})
	.catch(next)
}

module.exports = {
	createWalk,
	getWalk,
	modifyWalk,
	deleteWalk
}

