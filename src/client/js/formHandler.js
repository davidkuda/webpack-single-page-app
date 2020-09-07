function handleSubmit(event) {
    event.preventDefault()
    
    // get user input and save it into a variable
    let formInput = document.getElementById('name').value
    console.log("::: Form Submitted :::")

    // API URL
    const baseUrl = 'https://api.meaningcloud.com/sentiment-2.1';
    const apiKey = '?key=5e209f22ac0f0d3ad7045b336058b1fc';
    const outputFormat = '&of=json';
    let text = '&txt=' + formInput.replace(' ', '%'); // is no longer used / either text or url!
    let link = '&txt=' +formInput;
    const language = '&lang=en';
    const model = '&model=general';
    let apiUrl = `${baseUrl}${apiKey}${link}${language}${model}`

    // API call
    fetch(apiUrl)
    .then(res => res.json())
    .then(function(res) {
        console.log(res);
        Client.testLog();
        const resultsHtmlElement = document.getElementById('results');
        Client.createMarkup(resultsHtmlElement, formInput, res);
    })
}

export { handleSubmit }