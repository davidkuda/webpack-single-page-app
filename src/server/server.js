// Requiring modules
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');
const express = require('express');
const fetch = require('node-fetch');
const bodyParser = require("body-parser");

dotenv.config();

// setting up Express
const app = express();

// setting up body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// setting up cors
app.use(cors());

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
        apiKey = "?key=" + process.env.API_KEY,
        link = "&url=" + formInput,
        language = "&lang=en",
        model = "&model=general",
        apiUrl = `${baseUrl}${apiKey}${link}${language}${model}`;
        console.log(apiUrl)
    return apiUrl;
};

let sampleWebsite = 'https://www.understandmyself.com/';

// sample api to test
const chuckNorris = "https://api.chucknorris.io/jokes/random";

// fetch api request
const getData = async url => {
    try {
        const response = await fetch(url);
        const json = await response.json();
        return json;

    } catch (error) {
        console.log(error);
    }
};

// api request to meaning cloud's sentiment analysis
app.get('/sentiment-analysis', async function (req, res) {
    console.log('this is req.query.input:', req.query.input);
    let sentimentAnalysisUrl = await getSentimentAnalysisUrl(req.query.input);
    let sentimentAnalysisFull = await getData(sentimentAnalysisUrl);
    console.log("this is the complete response: ", + sentimentAnalysisFull);
    let sentimentAnalysis = {
      source: req.query.input,
      agreement: sentimentAnalysisFull.agreement,
      confidence: sentimentAnalysisFull.confidence,
      irony: sentimentAnalysisFull.irony,
      subjectivity: sentimentAnalysisFull.subjectivity,
    };
    res.send(sentimentAnalysis);
})

// sample api request to chuck norris api
app.get('/chuck', async function (req, res) {
    let projectDataChuck = await getData(chuckNorris);
    console.log('hihihi');
    res.send(projectDataChuck.value);
})

console.log('hello Dave 👊')
