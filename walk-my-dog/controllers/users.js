const mongoose = require("mongoose")
const User = mongoose.model("User")
const passport = require('passport');

// CRUD

function crearUser (req, res, next){
	const body = req.body,
		password = body.password

	delete body.password
	const user = new User(body)

	user.createPassword(password);
	user.save()
	.then( user => {
		return res.status(200).json(user.toAuthJSON())
	})
	.catch(next)
}
function obtenerUsers(req, res, next) {

  User.findById(req.user.id, (err, user) => {
    if (!user || err) {
      return res.sendStatus(401)
    }
    return res.send(user.publicData());
  }).catch(err => res.send(err));
}

function modificarUser(req, res, next){
	User.findById(req.user.id).then(user => {
    if (!user) { return res.sendStatus(401); }
    let nuevaInfo = req.body
    if (typeof nuevaInfo.username !== 'undefined')
      user.username = nuevaInfo.username
    if (typeof nuevaInfo.bio !== 'undefined')
      user.bio = nuevaInfo.bio
    if (typeof nuevaInfo.foto !== 'undefined')
      user.foto = nuevaInfo.foto
    if (typeof nuevaInfo.location !== 'undefined')
      user.location = nuevaInfo.location
    if (typeof nuevaInfo.telefono !== 'undefined')
      user.telefono = nuevaInfo.telefono
    if (typeof nuevaInfo.password !== 'undefined')
      user.createPassword(nuevaInfo.password)
    user.save().then(updatedUser => {
      res.status(201).json(updatedUser.publicData())
    }).catch(next)
  }).catch(next)
}

function eliminarUser(req, res, next){
	User.findOneAndDelete({_id: req.user.id})
	.then(r => {
		res.status(200).send("User eliminado")
	})
	.catch(next)
}

function iniciarSesion(req, res, next){
	if (!req.body.email || !req.body.password){
		return res.status(422).json({error : {email : "Falta informacion"}})
	}

	passport.authenticate('local',
		{ session: false },
		function (err, user, info){
			if (err){ return next(err)}
			if (user) {
				user.token = user.generaJWT();
			} else {
				return res.status(422).json(info);
			}
		})(req, res, next)
}

module.exports = {
	crearUser,
	obtenerUsers,
	modificarUser,
	eliminarUser,
	iniciarSesion
}
















