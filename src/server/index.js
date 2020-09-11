const dotenv = require('dotenv');
dotenv.config();
console.log(`Your API key is ${process.env.API_KEY}`);
const path = require('path');
var cors = require('cors');
const express = require('express');
const apiObj = require('./api.js');
const fetch = require('node-fetch');

const app = express();
app.use(cors());

app.use(express.static('dist'))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('app listening on port 8081!')
})

app.get('/api', function (req, res) {
    res.send(apiObj)
})

console.log('hello Dave 👊')
