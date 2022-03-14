const mongoose = require ("mongoose");

const ProductSchema = new mongoose.Schema({

    title: {
        type: String,
        required: [true, " A product's title is required!!!"],
        //minlength and maxlength are for Strings, max/min are for number types
        maxlength: [30, "The title's length can be no more than 30 characters"],
    },

    price:{
        type: Number,
        required: [true, "Need to know the price of a product!!!"]
    },

    description: {
        type: String,
        minLength: [3, "Description should be at least 3 characters!"]
    } 

}, {timestamps: true})

const Product = mongoose.model("Product", ProductSchema)


module.exports = Product;
