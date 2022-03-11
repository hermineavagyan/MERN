const mongoose = require("mongoose");

//create the "dog" model- shape of the documents inside of a collection
const DogSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
    },
    age: {
        type: Number,
    },
    isFriendly: {
        type: Boolean,
    },
}, {timestamps: true});

const DogModel = mongoose.model("Dog", DogSchema);
