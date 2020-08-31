const dotenv = require('dotenv');
dotenv.config();
// console.log(`Your API key is ${process.env.API_KEY}`);
const path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const AylienNewsApi = require("aylien-news-api");


const app = express()

app.use(express.static('dist'))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// Aylien API

const defaultClient = AylienNewsApi.ApiClient.instance;

const app_id = defaultClient.authentications["app_id"];
app_id.apiKey = process.env["NEWSAPI_APP_ID"];

console.log('hello Dave 👊')

const app_key = defaultClient.authentications["app_key"];
app_key.apiKey = process.env["NEWSAPI_APP_KEY"];

const api = new AylienNewsApi.DefaultApi();

console.log(api)