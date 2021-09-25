const mongoose = require('mongoose');

const WalkSchema = new mongoose.Schema({
  idDog:{type: mongoose.Schema.Types.ObjectId, ref:'Dog'},
	playtime:{type:String, enum: ['1h', '2h', '3h']},
	datetime:{type: String, required: true},
},{timestamps: true, collection:'Dogs'})


DogSchema.methods.publicData = () => {
	return {
	    idDog: this.idDog,
	    playtime: this.playtime,
	    datetime: this.datetime,
	}
};

mongoose.model("Walk", WalkSchema);