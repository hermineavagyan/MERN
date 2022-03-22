//firstName, lastName, quote
const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');

const AuthorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required!!!"],
        minlength: [3, "First name length can be no less than 3 characters!"],
        maxlength: [15, "First name length can be no more than 15 characters!"]
    },
    lastName: {
        type: String,
        unique: [true, "Last name should be unique"],
    
        
        //partialFilterExpression: {lastName: {$type: "string"}},
    
        required: [true, "Last name is required!!!"],
        minlength: [3, "Last name length can be no less than 3 characters!"],
        //maxlength and minlength are for Strings, max/min are for number types
        maxlength: [15, "Last name length can be no more than 15 characters!"]
    },
    genre:{
        type: String,
        //An enum will require this field's value in the request to 
        //include one of these values EXACTLY as typed here
        required: [true, "A genre is required!!!"],
        enum:[
            "Tragedy",
            "Children's Literature",
            "Fictional Prose",
            "Fiction"
        ]
    },
    quote: {
        type: String
    },
    rating: {
        type: Number
    },
    kidFriendly:{
        type: Boolean,
        required:[true, "Need to know if this author has written anything for kids!!!"]
    },
    yearOfBirth: {
        type: Number,
        min: [1, "An author's birth year cannot be 0 or a negative number!"]
    }
    //_id is also created every time we create a new author/document

}, {timestamps: true})

const Author = mongoose.model("Author", AuthorSchema);
AuthorSchema.plugin(uniqueValidator, {message: 'No duplicate values are allowed for last name, {VALUE} is not unique!!!'})

module.exports = Author;