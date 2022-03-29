const mongoose = require("mongoose");

const dbName = "movies";

mongoose.connect (`mongodb://127.0.0.1:27017/${dbName}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    //if the result of the promise is a resolution
    .then(() => console.log(`Connected to ${dbName} database!`))
    //if the reuslt of the promise a rejection
    .catch((err) => console.log(err))