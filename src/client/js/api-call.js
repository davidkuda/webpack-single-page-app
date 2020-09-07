function apiCall(input) {
    const baseUrl = "https://api.meaningcloud.com/sentiment-2.1";
    const apiKey = "?key=5e209f22ac0f0d3ad7045b336058b1fc";
    const outputFormat = "&of=json";
    let link = "&url=" + input;
    const language = "&lang=en";
    const model = "&model=general";
    let apiUrl = `${baseUrl}${apiKey}${link}${language}${model}`;
    return apiUrl;
};

export { apiCall }