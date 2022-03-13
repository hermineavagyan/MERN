const mongoose = require ("mongoose");

const MovieSchema = new mongoose.Schema({

    title: {
        type: String,
        //Our validations are defined right here in our schema
        //Most take two values, the criteria and the message
        required: [true, " A movie's title is required!!!"],
        //minlength and maxlength are for Strings, max/min are for number types
        maxlength: [30, "The title's length can be no more than 30 characters"],
    },

    genre:{
        type: String,
        required: [true, "A movie's genre is required!!!"],
        enum:[
            "Crime Noir",
            "French Cinema",
            "Romcom",
            "Horror",
            "Sci-Fi",
            "Silent movie",
            "Documentary",
            "Comedy",
            "Action",
            "Thriller",
            "Family",
            "Animated",
            "Drama"
        ]
    },

    boxArt:{
        type: String,
        required: [true, "Because we love pictures!!!"]
    },

    watchLength:{
        type: Number,
    },

    rating: {
        type: String,
       enum:[
           "G",
           "PG",
           "PG-13",
           "R",
           "NC-17"
       ]
    },

    actors: {
        type: String
    },

    kidsFriendly:{
        type: Boolean,
        required: [true, "Need to know if it is good for kids!!!"]
    },

    yearReleased: {
        type: Number,
        min: [1920, "Nothing too old - they creep me out!"]
    } 

// there is an invisible field _id that's created every time a new document is made 


//timestamps automatically will create "createdAt" and "updatetedAt" date and time info for each document
//every time a doc is updated it will change the "updatedAt"

}, {timestamps: true})
//The model is a combination of
//1. Collection name which  will be a singular, capitalized version of the collection name that's held in the db 
//(will show in our db as "movies")
//2. The Schema
const Movie = mongoose.model("Movie", MovieSchema)

//mongoose model provides an interface to the database for creating, quering, updating, deleting records, etc

//we export the model to be imported and used in the controller. We will write Movie.find() for example to find all the documents inside the movies collection we have created 

module.exports = Movie;
