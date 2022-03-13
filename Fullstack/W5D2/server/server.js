const express = require("express");
const cors = require ("cors");
const app = express();

//This parses the incoming requests with JSON payloads
//Allows us to recognize Request Object as a JSON object
app.use(express.json())

//this parses incoming requests with JSOn payloads consisting of STRINGS or ARRAYS
//Allows us to recognize Request Object as a string or arrays
app.use(express.urlencoded({extended: true}))

//This lets our front end at port 3000 make calls to our back-end at port 8000
//Taking it away will result in "cors" errors when attempting your axios calls
//This security feature is built into the browser. That's why we do not experience it in Postman
app.use(cors({
    origin: "http:localhost:3000"
}))

require("./config/mongoose.config")

require("./routes/movie.routes")(app)

//longhand
//const movieRoutes = require("./routes/movie.routes");
//movieRoutes(app);

app.listen(8000, ()=>console.log("You are connected to port 8000"))