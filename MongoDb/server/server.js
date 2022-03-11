const express = require("express");
const app = express();



app.use(express.json(), express.urlencoded({extended: true}));
require ("./config/mongoose.config");

const AllMyUsersRoutes = require("./routes/user.routes");
AllMyUsersRoutes(app);
app.listen(8000, ()=> console.log("The server is all fired up on port 8000"));