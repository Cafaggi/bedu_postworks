const mongoose = require("mongoose")
const User = mongoose.model("User")
const passport = require('passport');

// CRUD

function createUser (req, res, next){
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
function getUsers(req, res, next) {

  User.findById(req.user.id, (err, user) => {
    if (!user || err) {
      return res.sendStatus(401)
    }
    return res.send(user.publicData());
  }).catch(err => res.send(err));
}

function modifyUser(req, res, next){
	User.findById(req.user.id).then(user => {
    if (!user) { return res.sendStatus(401); }
    let newInfo = req.body
    if (typeof newInfo.username !== 'undefined')
      user.username = newInfo.username
    if (typeof newInfo.password !== 'undefined')
      user.createPassword(newInfo.password)
    user.save().then(updatedUser => {
      res.status(201).json(updatedUser.publicData())
    }).catch(next)
  }).catch(next)
}

function deleteUser(req, res, next){
	User.findOneAndDelete({_id: req.user.id})
	.then(r => {
		res.status(200).send("User deleted")
	})
	.catch(next)
}

function logIn(req, res, next){
	if (!req.body.email || !req.body.password){
		return res.status(422).json({error : {email : "Missing info"}})
	}

	passport.authenticate('local',
		{ session: false },
		function (err, user, info){
			if (err){ return next(err)}
			if (user) {
				user.token = user.generateJWT();
			} else {
				return res.status(422).json(info);
			}
		})(req, res, next)
}

module.exports = {
	createUser,
	getUsers,
	modifyUser,
	deleteUser,
	logIn
}
















