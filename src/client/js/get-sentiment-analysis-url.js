function getSentimentAnalysisUrl(formInput) {
    const baseUrl = "https://api.meaningcloud.com/sentiment-2.1",
     apiKey = "?key=5e209f22ac0f0d3ad7045b336058b1fc",
     link = "&txt=" + formInput,
     language = "&lang=en",
     model = "&model=general",
     apiUrl = `${baseUrl}${apiKey}${link}${language}${model}`;
     return apiUrl;
};