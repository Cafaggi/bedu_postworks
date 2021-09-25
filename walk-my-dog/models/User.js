const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const secret = require('../config').secret;


const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: [true, "username field must be filled"],
    lowercase: true,
    match : [/^[a-z0-9]+$/, "invalid Username"],
    index: true
  },
  name: {
    type:String,
    required: true
  },
  lastname:{
    type:String,
    required: true
  },
  email: {
    type:String,
    unique: true,
    required: [true, "email must be filled"],
    match:[/\S+@\S+.\S+/, "invalid Email"],
    index: true
  },
  type:{
    type:String,
    enum: ['walker', 'owner']
  },
  hash: String,
  salt: String
}, {collection:"Users", timestamps: true});

UserSchema.plugin(uniqueValidator, {message : "user already exists"})

UserSchema.methods.createPassword = function (password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString("hex")
}

UserSchema.methods.validatePassword = function (password) {
  const newHash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex')
  return this.hash === newHash
}

UserSchema.methods.generateJWT = function() {
  const today = new Date();
  const exp = new Date(today);
  exp.setDate(today.getDate() + 60);

  return jwt.sign({
    id: this._id,
    username: this.username,
    exp: parseInt(exp.getTime() / 1000),
  }, secret)
}

UserSchema.methods.toAuthJSON = function(){
  return {
    username: this.username,
    email: this.email,
    token: this.generateJWT()
  }
}

UserSchema.methods.publicData = function() {
  return {
    id: this.id,
    username: this.username,
    name: this.name,
    lastname: this.lastname,
    email: this.email,
    type: this.type
  }
}

mongoose.model("User", UserSchema)

















