async function handleSubmit(event) {
    event.preventDefault();

    // get user input and save it into a variable
    let formInput = document.getElementById("name").value;

    // // get target html element
    // const resultsHtmlElement = document.getElementById("results");

    // API URL
    let apiUrl = await Client.getSentimentAnalysisUrl(formInput);

    // API call
    let apiResponse = await Client.apiCall(apiUrl);
    console.log('apiResponse:', apiResponse)

    // function apiCall() {
    //     fetch(apiUrl)
    //         .then((res) => res.json())
    //         .then(function (res) {
    //             console.log(res);
    //             Client.analyzeContent(resultsHtmlElement, formInput, res);
    //         });
    // }

    if (Client.checkInput(formInput)) {
        console.log('input == URL');
        Client.updateUi()
        Client.analyzeContent(resultsHtmlElement, formInput, apiResponse);
    } else {
        console.log('input != url');
        Client.updateUi(await Client.invalidInput());
    }
}

export { handleSubmit }