//importing express
const express = require("express");
const faker = require("faker");
const app = express();

//function to create a user object
const createUser = ()=>({
    _id: faker.datatype.number(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    password: faker.internet.password(),
});

//function to create a company object
const createCompany = ()=>({
    _id: faker.datatype.number(),
    name: faker.company.companyName(),
    address: {
        street: faker.address.streetName(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country(),
    }
});
//route to get a user
app.get("/api/users/new", (request, response)=>{
    const newUser = createUser();
    response.json(newUser)
    })
//route to get a company
app.get("/api/companies/new", (request, response)=>{
    const newCompany = createCompany();
    response.json(newCompany)
    })

//route to get a user and a company
app.get("/api/user/company", (request, response)=>{
    const newUser = createUser();
    const newCompany = createCompany();
    const myNewObject = {
        user: newUser,
        company: newCompany,
    }
    response.json(myNewObject)
    })


//connect to the port 
app.listen(8000, ()=>console.log("You have successfully connected to the port"));



