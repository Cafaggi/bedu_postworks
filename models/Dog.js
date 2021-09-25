const mongoose = require('mongoose');

const DogSchema = new mongoose.Schema({
	name:{type: String, required: true},
	size:{type:String, enum: ['Small', 'Medium', 'Large']},
	pictures:String,
	description:{type: String, required: true},
	owner:{type: mongoose.Schema.Types.ObjectId, ref:'User'},
	location:String
},{timestamps: true, collection:'Dogs'})


DogSchema.methods.publicData = () => {
	return {
	    id: this.id,
	    name: this.name,
	    size: this.size,
	    pictures: this.pictures,
	    description: this.description,
	    owner: this.owner,
	    location: this.location,
	}
};

mongoose.model("Dog", DogSchema);


















