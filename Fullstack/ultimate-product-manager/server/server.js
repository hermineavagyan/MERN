const express = require("express");
const cors = require("cors");
const app = express(); //the express method that allows us to create an express app

//middleware
app.use(express.json());//allows us to read json onjects sent in the clients request
app.use(express.urlencoded({extended: true})); //allows us to read json objects with strings and arrays in the client's request

app.use(
    cors({
        //cors is going to allow different ports to send requests to our API
        origin: "http://localhost:3000",
    }),
);
//we require our mongoose config file so that it is available to our express method
require("./config/mongoose.config");
//we require our routes folder which had a function (with an app parameter) exported in this short-hand syntax. The express method must be added as an argument
require("./routes/product.routes")(app);
//below is a long-hand syntax of what is goiong on in the line above
//const ProductRoutes = require("./routes/product.routes");
//ProductRoutes(app);
app.listen(8000, ()=>{
    console.log("Listening to the port 8000");
});