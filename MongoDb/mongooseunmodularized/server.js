const express = require("express");

//start our server /create the express app object
const app = express();

//This is needed to allow for JSON post and get requests
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// run the mongoose config code
require("./config/mongoose.config");


app.get('/', (req, res) => {
    return res.json({message: 'Hello world'});
})

//this is the long way to bring in this dog routes and to run them 
const dogRoutes = require("./routes/dog.routes");
dogRoutes(app);

app.listen(8000, ()=>{
    console.log("You have successfully started your server on port 8000");
}
)