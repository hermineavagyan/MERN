const { response } = require("express");
const express = require("express");
const faker = require("faker");
const app = express();

//middleware
app.use(express.json());//allows us to parse JSON object coming in from POST and PUT requests
app.use(express.urlencoded({extended: true}));//allows to parse strings and arrays coming in with JSON object

//a get rquest
app.get("/api/welcome",(request, response)=>{
    console.log("This is the welcome api route");
    response.json({message: "Welcome to our API ...This is the response"})
})
app.post("/api/welcome",(request, response)=>{
    console.log("This is our post request");
    response.json({
        message: ["MERN is great", "MERNY goodness", "MERNMERN"],
        ourRequestBody: request.body
    
    })
    console.log(request);
})
app.get("/api/faker",(request, response)=>{
    const name = faker.name.firstName();
    const email = faker.internet.email();
    response.json({
        firstName: name,
        useremail: email
})  
    })

app.get("/api/users/new",(request, response)=>{
    const id = faker.datatype.number();
    const name = faker.name.firstName();
    const lastName = faker.name.lastName();
    const phoneNumber = faker.phone.phoneNumber();
    const email = faker.internet.email();
    const password = faker.internet.password()
        response.json({
            userId: id,
            firstName: name,
            lastName : lastName,
            phoneNumber: phoneNumber,
            userEmail: email,
            password: password
    })  
        })
app.get("/api/companies/new",(request, response)=>{
    const companyId = faker.datatype.number();
    const name = faker.company.companyName();
    const street = faker.address.streetAddress();
    const city = faker.address.cityName();
    const state = faker.address.stateAbbr();
    const zipCode = faker.address.zipCode();
    const country = faker.address.country()
   
        response.json({
            companyId: companyId,
            companyName: name,
            //address : street +", " + city + " " + state,
            address : [street,city,state, zipCode, country],

        })  
            })

            const createUser = ()=>({
                id: faker.datatype.number(),
                name: faker.name.firstName(),
                lastName:faker.name.lastName(),
                phoneNumber: faker.phone.phoneNumber(),
                email: faker.internet.email(),
                password: faker.internet.password()
            });
            app.get("/api/users/test",(request, response)=>{
                const newUser = createUser()
                response.json(newUser)  
                })

            const createCompany = ()=>({
                companyId: faker.datatype.number(),
                companyName: faker.company.companyName(),
                address: {
                    street: faker.address.streetAddress(),
                    city: faker.address.cityName(),
                    state: faker.address.state(),
                    zipcode: faker.address.zipCode(),
                    country: faker.address.country()
            },
        });

        app.get("/api/companies/test",(request, response)=>{
            const newCompany = createCompany()
            response.json(newCompany)  
            })

            app.get("/api/users/companies/test",(request, response)=>{
                const newCompany = createCompany()
                const newUser = createUser()
                const newObject = {
                    user: newUser,
                    company: newCompany
                }
                response.json(newObject)  
                })

            
            
app.get("/api/user/company",(request, response)=>{
    const companyId = faker.datatype.number();
    const companyName = faker.company.companyName();
    const street = faker.address.streetAddress();
    const city = faker.address.cityName();
    const state = faker.address.stateAbbr();
    const zipCode = faker.address.zipCode();
    const country = faker.address.country();
   
                
        response.json({
            companyId: companyId,
            companyName: companyName,
            //address : street +", " + city + " " + state,
            address : [street,city,state, zipCode, country],
                
                       }, {
                           
                        userName: name,
                        lastName: lastName

                   
                 })  
                            })



app.listen(8000, ()=>console.log("You have successfully connected to port 8000"));