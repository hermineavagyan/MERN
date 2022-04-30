const mongoose = require('mongoose');
const BlogPost = require('./models/BlogPost')

mongoose.connect('mongodb://127.0.0.1:27017/my_database', {useNewUrlParser:true});

// BlogPost.create({
//     title: 'The Mythbuster Guide to Saving Money Eenergy Bills',
//     body: 'If you have been here a long tim, you might have remember when I wnet on ITV Tonight to dispense a masterclass in saving money on energy bills. energy saving is one of my favorite money topics, beacsue once you get past the boring bullet-point lists, a whole new word of thrifty nredery opens up. You know those bullet-point lists. You start spotting them everything at this time of year. They go like this:'
// },(error, blogpost) => {
//     console.log(error, blogpost)
// })

// BlogPost.find({},(error, blogpost)=>{
//     console.log(error, blogpost)
// })
var id = '626c2c9ae55e581d19545a8e'
BlogPost.findByIdAndUpdate(id, {title: 'Updated title'},(error, blogpost) => {
    console.log(error, blogpost)
})