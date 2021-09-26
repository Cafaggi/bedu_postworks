const mongoose = require('mongoose');

const WalkSchema = new mongoose.Schema({
  	idDog:{type: mongoose.Schema.Types.ObjectId, ref:'Dog'},
	idWalker:{type: mongoose.Schema.Types.ObjectId, ref:'User'},
	playtime:{type:String, enum: ['1h', '2h', '3h']},
	datetime:{type: String, required: true},
},{timestamps: true, collection:'Walks'})


WalkSchema.methods.publicData = () => {
	return {
	    idDog: this.idDog,
	    playtime: this.playtime,
	    datetime: this.datetime,
		idWalker: this.idWalker
	}
};

mongoose.model("Walk", WalkSchema);