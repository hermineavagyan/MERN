const dogController = require('../controllers/dog.controller');
module.exports = (app)=>{
//get all dogs
app.get('/api/dogs/getAll', dogController.getAllDogs);

//get a dog by its mongo __id
app.get('/api/dogs/:thisDogId',dogController.getDogById);

//create a dog document and save it to the DB
app.post('/api/dogs/create', dogController.createDog);
}
