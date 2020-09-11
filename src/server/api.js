const fetch = require('node-fetch');

async function getFormInput() {
    const source = await fetch('/form');
    return source
};

async function getSentimentAnalysisUrl(source) {

    const baseUrl = "https://api.meaningcloud.com/sentiment-2.1",
        apiKeyDotEnv = process.env.apiKey,
        // apiKey = "?key=5e209f22ac0f0d3ad7045b336058b1fc",
        link = "&url=" + source,
        language = "&lang=en",
        model = "&model=general",
        apiUrl = `${baseUrl}${apiKeyDotEnv}${link}${language}${model}`;
    
        return apiUrl;
};

async function getSentimentAnalysisJson(url) {
    let response = await fetch(apiUrl);
    let data = await response.json();
    return data;
};

let json = {
    'apiKey': process.env.API_KEY,
    'title': 'test json response',
    'message': 'Congratulations, David. ;)',
}

module.exports = json
