module.exports = (app)=>{
    //routes go here

app.get('/api/dogs/getAll', (req,res) => {
    console.log("Inside of getALlDogs");

    DogModel.find({})
    .then((allDogObjects)=>{
        console.log("Find all dogs successfully");
        //a dogObject could be Undefined if our id was invalid
        console.log(allDogObjects);
        return res.json(allDogObjects);
    })
    .catch((err) =>{
        console.log("err: " + err);
        return res.json(err);
    })
})
//get a dog by its mongo __id
app.get('/api/dogs/:thisDogId',(req, res)=>{
    console.log("Inside of getDogById");
    console.log(`getting dog id: ${req.params.thisDogId}`);

    DogModel.findById(req.params.thisDogId)
    .then((dogObject)=>{
        console.log("Find dog by id was successfull");
        //a dogObject could be Undefined if our id was invalid
        console.log(dogObject);
        return res.json(dogObject);
    })
    .catch((err) =>{
        console.log("err: " + err);
        return res.json(err);
    })
})
//create a dog document and save it to the DB
app.post('/api/dogs/create', (req, res) =>{
    console.log("Inside create dog route");
    console.log(req.body);

    DogModel.create(req.body)
        .then((newDogObject)=>{
            console.log("New dog created successfully");
            console.log(newDogObject);
            return res.json(newDogObject);
        })
        .catch((err) =>{
            console.log("err: " + err);
            return res.json(err);
        })

})
}
