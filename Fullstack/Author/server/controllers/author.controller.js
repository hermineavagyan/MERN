const Author = require("../models/author.model.js");

module.exports = {
    createAuthor: (req, res)=>{
        Author.create(req.body)

            .then((newAuthor) =>{
                console.log(newAuthor)
                res.json(newAuthor)
            })
            .catch((err)=>{
                console.log("Something went wrong in create New Author");
                res.status(400).json(err)
                //res.status(400).json({message: 'Error occured', errors: err})
                    // const errString = err.toString();
                    // if (errString.includes("E11000")) {
                    // return res.status(404).json({ err: 'That field value is already in use!' })}
                    // else{
                    //     res.status(400).json(err)
                    // }
                })
                
                //
            
    },
    getAllAuthors: (req, res) =>{
        Author.find({}).collation({ locale: "en" }).sort({ name: 1 })
        //Author.find({}).sort({"lastName": 1})
            .then((allAuthors) => {
                console.log(allAuthors);
                res.json(allAuthors);
            })
            .catch((err)=>{
                console.log("getAllAuthors has failed!");
                res.json({ message: "Something went wrong in getAllAuthors", error: err })
            })

            },
            getOneAuthor: (req, res) => {
                Author.findOne({_id: req.params.id})
                    .then((oneAuthor) =>{
                        console.log(oneAuthor);
                        res.json(oneAuthor);
                    })
                    .catch((err)=>{
                        console.log("getOneAuthor failed");
                        res.json({ message: "Something went wrong in getOneAuthor", error: err })
                    })
            },
            updateAuthor: (req, res)=>{
                //this query requires an id param, body from request
                Author.findOneAndUpdate({_id: req.params.id},
                    req.body,
                    //the options return a new doc and allow shmema validatons to run on a put request 
                    {new: true, runValidators: true}
                    )
                    .then((updatedAuthor) =>{
                        console.log(updatedAuthor);
                        res.json(updatedAuthor);
                    })
                    .catch((err)=>{
                        console.log("Something went wrong in updateAuthor");
                        res.status(400).json(err) 
                    })
            },
            deleteAuthor: (req, res)=>{
                Author.deleteOne({_id: req.params.id})
                    .then((deletedAuthor) =>{
                        console.log(deletedAuthor);
                        res.json(deletedAuthor);
                    })
                    .catch((err)=>{
                        console.log("deleteAuthor failed");
                        res.json({ message: "Something went wrong in deleteAuthor", error: err })
                    })
            }

    }

    

