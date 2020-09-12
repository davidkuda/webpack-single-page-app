// Requiring modules
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');
const express = require('express');
const apiObj = require('./api.js');
const fetch = require('node-fetch');
const bodyParser = require("body-parser");

// implementing moduldes
const app = express();
dotenv.config();
console.log(`Your API key is ${process.env.API_KEY}`);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('dist'));

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
});

app.listen(8081, function () {
    console.log('app listening on port 8081!')
})

// POST user Input
const data = [];
app.post('/form', addInput);
function addInput(req, res) {
    data.push(req.body);
};


app.get('/api', function (req, res) {
    res.send(apiObj)
})

console.log('hello Dave 👊')
