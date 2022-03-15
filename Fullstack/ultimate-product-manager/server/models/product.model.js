//title, description, price
const mongoose = require("mongoose");

const NewProductSchema = new mongoose.Schema({
    title: {
        type: String
    },
    price: {
        type: Number
    },
    description: {
        type: String
    }
    //_id is also created every time we create a new product/document

}, {timestamps: true})

const NewProduct = mongoose.model("NewProduct", NewProductSchema);

module.exports = NewProduct;