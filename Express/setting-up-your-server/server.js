//import dependencies/nodemon
const express = require('express');
const faker = require('faker');

const app = express();

//middleware/configuration
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//C - CREATE: we use POST 
//R - READ: we use GET
//U - UPDATE: we use PUT
//D - DESTROY: we use DELETE
app.get("/api/welcome",(request, response)=>{
    console.log(request);
    console.log("This is welcome API route");
    response.json({message: "Welcome to our API"})
})

// this is our call to the faker api which is 
app.get("/api/faker",(request, response)=>{
    const name = faker.name.firstName();
    const email = faker.internet.email();

    // console.log(request);
    // console.log("This is welcome API route");
    response.json({firstName: name,
    userEmail: email
})
//console.log(request);
//console.log(response);
})
//our calls

//listen to port 8000
app.listen(8000, ()=>console.log("You have successfully connected to port 8000"));