const express = require('express'),
    bodyParser = require('body-parser'),
    massive = require('massive');

require('dotenv').config();

var app = express();
app.use(bodyParser.json());

massive({
    host: 'ec2-54-243-28-109.compute-1.amazonaws.com',
    port: 5432,
    database: 'd6s9gopinortlk',
    user: 'hhtxgcoeqszfkw',
    password: '9f50e5c97c59f2c3552dbbf697db05878aa29a3b714a9214612cace89ba6cb87', 
    ssl: true
}).then(function(db) {
    app.set('db', db)
});

let port = 3003;
app.listen(port, ()=> {console.log(`docked on port ${port}`)});