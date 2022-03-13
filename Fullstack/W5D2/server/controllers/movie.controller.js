const Movie = require("../models/movie.model");

//We are exporting an object of key value pairs.
    //The key being how we're refering to our calls
//ANd the call itself (arroe func), being the value!
    //We can easily access these in the movie.routes.js
    module.exports = {
        findAllMovies: (req, res) =>{
            Movie.find()
            .then((allMovies)=>{
                console.log(allMovies);
                res.json(allMovies)
            })
            .catch((err)=>{
                console.log("findAllMovies has failed");
                res.json({message: "Something went wrong in findAll", error: err})
            })
        },

        createNewMovie: (req, res)=>{
            Movie.create(req.body)
                .then((newMovie) =>{
                    console.log(newMovie)
                    res.json(newMovie);
                })
                .catch((err)=>{
                    console.log("Something went wrong in createNewMovie");
                    //We set the response status of 400 to 
                        //display our error which is the rejetion of our promise
                    //A 400 hundred status means that our client is talking to
                        //our server just fine but the client is not sending good info
                    //This is how we will eventualy display
                        //our validations from the server in react
                    //A 404 status measn a client's request 
                        //isnt to the right place or your server is not set up properly
                    //On the flip side, a status of 200 means we are looking good!

                    res.status(400).json(err)
                })
        },
        findOneMovie: (req, res)=>{
            Movie.findOne({_id: req.params.id})
                .then((oneMovie)=>{
                    console.log(oneMovie);
                    res.json(oneMovie);
                })
                .catch((err)=>{
                    console.log("Find one Movie failed");
                    res.json({message: "Something went wrong in findOneMovie", error: err})
                })
        },
        deleteOneMovie: (req, res)=>{
            Movie.deleteOne({_id: req.params.id})
                .then((deletedMovie)=>{
                    console.log(deletedMovie);
                    res.json(deletedMovie);
                })
                .catch((err)=>{
                    console.log("Delete one Movie failed");
                    res.json({message: "Something went wrong in deleteOneMovie", error: err})
                })
        },
        updateMovie: (req, res)=>{
            Movie.findOneAndUpdate({_id: req.params.id},
                req.body,
                {new: true, runValidators: true}
                )
                .then((updatedMovie)=>{
                    console.log(updatedMovie);
                    res.json(updatedMovie)
                })
                .catch((err)=>{
                    console.log("Something went wrong in updateMovie");

                    res.status(400).json(err)
                })

        }


    }