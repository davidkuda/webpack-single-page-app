async function handleSubmit(event) {
    event.preventDefault();

    // get user input and save it into a variable
    let formInput = document.getElementById("name").value;

    // API URL
    let apiUrl = await Client.getSentimentAnalysisUrl(formInput);

    // API call
    let apiResponse = await Client.apiCall(apiUrl);
    console.log('apiResponse:', apiResponse)

    if (Client.checkInput(formInput)) {
        console.log('input == URL');
        Client.updateUi(Client.markupAnalyzeContent(formInput, apiResponse))
        // Client.analyzeContent(resultsHtmlElement, formInput, apiResponse);
    } else {
        console.log('input != url');
        Client.updateUi(await Client.markupInvalidInput());
    }
}

export { handleSubmit }