const mongoose = require("mongoose");

const movieDB = "movieDB";

//mongoose.connect(`mongodb://localhost/${movieDB}`
mongoose.connect(`mongodb://127.0.0.1:27017/${movieDB}`,{
//useNewParser and useUnifiedToplogy are options we pass to handle deprecation warnings in our terminal
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>{
        console.log(`You are connected to the database called ${movieDB}`)
    })
    .catch((err)=>{
        console.log(`You had a problem connecting the ${dbName}. Here is your error: `,err )
    })