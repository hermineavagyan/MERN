//mongoose work starts here
const mongoose = require("mongoose");
const databaseName = "dogs";

mongoose.connect("mongodb://127.0.0.1/" + databaseName,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then (()=> {
        console.log ("You connected to the " + databaseName + " database");
    })
    .catch((err)=>{
        console.log("There was an error while connecting to the " + databaseName + " database");
        console.log(err);
    })