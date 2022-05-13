const express = require('express');
const path = require('path')

const app = new express();
const ejs = require('ejs')
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/my_database',
                    {useNewUrlParser:true})

app.get('/', (req, res)=>{
    // res.sendFile(path.resolve(__dirname, 'pages/index.html'))
    res.render('index')
})

app.get('/about', (req, res)=>{
    // res.sendFile(path.resolve(__dirname, 'pages/about.html'))
    res.render('about')
})
app.get('/contact', (req, res)=>{
    // res.sendFile(path.resolve(__dirname, 'pages/contact.html'))
    res.render('contact')
})
app.get('/post', (req, res)=>{
    // res.sendFile(path.resolve(__dirname, 'pages/post.html'))
    res.render('post')
})
app.get('/posts/new',(req, res)=>{
    res.render('create')
})
app.post('/posts/store', (req, res)=>{
    console.log(req.body)
    res.redirect('/')
})

app.listen(4000, ()=>{
    console.log("App listening on port 4000")
})