const Movie = require("../models/movie.model");

    module.exports = {

        findAllMovies: (req, res)=>{
            Movie.find()
                .then((allMovies)=>{
                    console.log(allMovies);
                    res.json(allMovies)
                })
                .catch((err)=>{
                    console.log("findAllMovies has failed!");
                    res.json({ message: "Something went wrong in findAll", error: err })
                })
        },
        createNewMovie: (req, res)=>{
            Movie.create(req.body)
                .then((newMovie)=>{
                    console.log(newMovie);
                    res.json(newMovie);
                })
                .catch((err)=>{
                    console.log("Something went wrong in createNewMovie");
                    
                    res.status(400).json(err)
                })
        },
        findOneMovie: (req, res)=>{
                    //We use the paramater's (params) or the client's request to search for a
            //specific document by the field (here _id) specified
            Movie.findOne({ _id: req.params.id })//the params id MUST MATCH how we write it in our routes!!!
                .then((oneMovie)=>{
                    console.log(oneMovie);
                    res.json(oneMovie);
                })
                .catch((err)=>{
                    console.log("Find One Movie failed");
                    res.json({ message: "Something went wrong in findOneMovie", error: err })
                })
        },
        deleteOneMovie: (req, res)=>{
            Movie.deleteOne({_id: req.params.id})
                .then((deletedMovie)=>{
                    console.log(deletedMovie);
                    res.json(deletedMovie);
                })
                .catch((err)=>{
                    console.log("delete One Movie failed");
                    res.json({ message: "Something went wrong in deleteOneMovie", error: err })
                })
        },
            updateMovie: (req, res)=>{
            
            Movie.findOneAndUpdate({_id: req.params.id},
                req.body,
                {new: true, runValidators: true}
                )
                .then((updatedMovie)=>{
                    console.log(updatedMovie)
                    res.json(updatedMovie)
                })
                .catch((err)=>{
                    console.log("Something went wrong in createNewMovie");
                    res.status(400).json(err) 
                })
        }


    }