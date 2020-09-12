// Requiring modules
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');
const express = require('express');
const apiObj = require('./api.js');
const fetch = require('node-fetch');
const bodyParser = require("body-parser");

// implementing moduldes
dotenv.config();
console.log(`Your API key is ${process.env.API_KEY}`);

// setting up Express
const app = express();

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

// get api sentiment analysis url

const getSentimentAnalysisUrl = (formInput) => {
    const baseUrl = "https://api.meaningcloud.com/sentiment-2.1",
        apiKey = process.env.API_KEY,
        link = "&url=" + formInput,
        language = "&lang=en",
        model = "&model=general",
        apiUrl = `${baseUrl}${apiKey}${link}${language}${model}`;
    return apiUrl;
};

let sampleWebsite = 'https://www.understandmyself.com/';

// sample api to test
const chukNorris = "https://api.chucknorris.io/jokes/random";

// fetch api request

let projectData;

const getData = async url => {
    try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        return json;

    } catch (error) {
        console.log(error);
    }
};

app.get('/api', function (req, res) {
    res.send(projectData)
})

app.get('/chuck', async function (req, res) {
    let projectDataChuck = await getData(url);
    console.log('hihihi');
    res.send(projectDataChuck);
})

console.log('hello Dave 👊')
