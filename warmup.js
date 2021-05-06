//What's the difference between git and github. - Git tracks changes in your files on your local drive. While Github is a remote repository where you can upload git file changes.
// front end deals with how the website is going to look and feel while backend is the engine of the website. It deals with how the wesbite communicates with the server.

const http = require ('http');
const express = require('express');
const app = express()
const server = http.createServer(app)
const port = 3001;

const es6Renderer = require('express-es6-template-engine')
app.engine('html', es6Renderer);
app.set('views','templates');
app.set('view engine','html');


server.listen(port,()=>{
console.log("server is listening 12-8")
})

app.get('/', (req,res)=>{
    res.render('helloWorld1')
})

app.get('/lift-off', (req,res)=>{
    res.render('anchor')
})
